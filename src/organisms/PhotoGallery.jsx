import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Photo from '../molecules/Photo';
import * as mq from '../globals/mediaqueries';

const chunkUrls = (urls, size) => {
  return Array.from({ length: Math.ceil(urls.length / size) }, (_, index) =>
    urls.slice(index * size, index * size + size)
  );
};

const PhotoGallery = ({ alt, isLoading, photoUrlList }) => {
  const container = css`
    display: flex;

    ${mq.small} {
      flex-direction: column;
      padding: 0 5px;
    }
  `;

  const wrapper = css`
    display: flex;
    justify-content: space-between;
    flex: 1;
    flex-direction: column;

    ${mq.small} {
      flex-direction: row;
    }
  `;

  const box = css`
    flex: 1;
    margin-right: 20px;

    ${mq.small} {
      margin-bottom: 5px;
      margin-right: 0;
    }
  `;

  const innerBox = css`
    display: flex;

    > img {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      ${mq.small} {
        margin-right: 5px;
      }
    }

    ${mq.small} {
      flex: 1;
      margin-right: 5px;

      &:last-child {
        margin-right: 0;
      }
    }
  `;

  const [firstUrl, ...restUrls] = photoUrlList;
  const chunks = chunkUrls(restUrls, 2);

  return (
    <div css={container}>
      <div css={box}>
        <Photo type="L" photoUrl={firstUrl} alt={alt} isLoading={isLoading} />
      </div>
      <div css={wrapper}>
        {chunks.map((chunk, chunkIndex) => {
          const chunkId = `${chunk.length}-${chunkIndex}`;
          return (
            <div css={innerBox} key={chunkId}>
              {chunk.map((photoUrl, index) => {
                const photoId = `${photoUrl}-${index}`;
                return (
                  <Photo
                    type="M"
                    photoUrl={photoUrl}
                    alt={alt}
                    isLoading={isLoading}
                    key={photoId}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

PhotoGallery.propTypes = {
  /** texto alternativo de la imagen */
  alt: PropTypes.string.isRequired,
  /** Indicates that is disabled */
  isLoading: PropTypes.bool,
  /** URL list */
  photoUrlList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PhotoGallery.defaultProps = {
  isLoading: false,
};

export default PhotoGallery;
