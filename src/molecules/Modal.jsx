import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/core';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Overlay from '../atoms/Overlay';
import Portal from '../atoms/Portal';
import * as mq from '../globals/mediaqueries';

const modalHeights = {
  S: {
    small: '40vh',
    large: '200px',
  },
  M: {
    small: '60vh',
    large: '300px',
  },
  L: {
    small: '80vh',
    large: '500px',
  },
};

const Modal = ({
  title,
  modalTrigger,
  children,
  onCloseModal,
  expandedModal,
  showOverFlowContent,
  responsiveSize,
  overlayOpacity,
  topPosition,
  portalSelector,
  fixedHieght,
  removeContentPadding,
}) => {
  const [opened, setOpened] = useState(false);

  const open = () => setOpened(true);
  const close = () => {
    onCloseModal();
    setOpened(false);
  };

  const fadeInUp = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `;

  const modalContainer = css`
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    height: fit-content;
    margin: 0 auto;

    ${mq.mediumAndUp} {
      max-width: ${expandedModal ? '900px' : null};
      min-width: ${expandedModal ? '500px' : null};
      width: ${expandedModal ? null : '500px'};
      max-height: 90vh;
      overflow: ${showOverFlowContent ? null : 'scroll'};
    }

    ${mq.small} {
      animation: ${fadeInUp} 0.5s;
      border-radius: 20px 20px 0 0;
      bottom: 0;
      position: absolute;
      width: 100%;
    }
  `;

  const titleWrapper = css`
    padding: 30px;
    display: flex;
    justify-content: space-between;

    ${mq.small} {
      padding: 20px 10px;
    }
  `;

  const contentWrapper = css`
    padding: ${removeContentPadding ? null : '0 30px 20px'};
    overflow-y: ${showOverFlowContent ? null : 'scroll'};
    -webkit-overflow-scrolling: touch;

    ${mq.mediumAndUp} {
      ${fixedHieght ? 'height' : 'max-height'}: ${modalHeights[responsiveSize]
        .large};
    }

    ${mq.small} {
      height: ${modalHeights[responsiveSize].small};
      padding: ${removeContentPadding ? null : '0 10px 20px'};
    }
  `;

  return (
    <>
      <div role="presentation" onClick={open}>
        {modalTrigger}
      </div>

      {opened && (
        <Portal selector={portalSelector}>
          <Overlay
            onClick={close}
            overlayOpacity={overlayOpacity}
            topPosition={topPosition}
          >
            <div
              css={modalContainer}
              onClick={e => e.stopPropagation()}
              role="presentation"
            >
              <div css={titleWrapper}>
                <div>
                  {Boolean(title) && (
                    <Text size="XL" weight="semibold">
                      {title}
                    </Text>
                  )}
                </div>
                <button onClick={close} type="button">
                  <Icon type="close" size="S" />
                </button>
              </div>

              <div css={contentWrapper}>
                {typeof children === 'function'
                  ? children({ closeModal: close })
                  : children}
              </div>
            </div>

            <style jsx global>
              {`
                body {
                  overflow: hidden;
                }
              `}
            </style>
          </Overlay>
        </Portal>
      )}
    </>
  );
};

Modal.propTypes = {
  /** Ayuda a definir el elemento en donde se mostrará el modal */
  portalSelector: PropTypes.string,
  /** Componente que abre el modal */
  modalTrigger: PropTypes.node.isRequired,
  /** Título del modal */
  title: PropTypes.string,
  /** Contenido del modal */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /** Cierra el modal */
  onCloseModal: PropTypes.func,
  /** Modifica el ancho del Modal en desktop */
  expandedModal: PropTypes.bool,
  /** Ajusta el tamaño del modal en mobile y medium */
  responsiveSize: PropTypes.oneOf(['S', 'M', 'L']),
  /** Muestra el contenido excedente */
  showOverFlowContent: PropTypes.bool,
  /** Value for `opacity` on Overlay  */
  overlayOpacity: PropTypes.number,
  /** Changes the position for the content, adds a `padding:top: 10vh` */
  topPosition: PropTypes.bool,
  /** Determines if modal has fixed height */
  fixedHieght: PropTypes.bool,
  /** Determina si el contenido del modal tiene padding */
  removeContentPadding: PropTypes.bool,
};

Modal.defaultProps = {
  onCloseModal: () => {},
  expandedModal: false,
  showOverFlowContent: false,
  title: '',
  portalSelector: 'body',
  responsiveSize: 'M',
  overlayOpacity: 0.7,
  topPosition: false,
  fixedHieght: false,
  removeContentPadding: false,
};

export default Modal;
