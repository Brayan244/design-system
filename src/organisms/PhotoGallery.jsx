import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import Photo from '../molecules/Photo';
import * as mq from '../globals/mediaqueries';

function chunkUrls(urls, size) {
  return Array.from({ length: Math.ceil(urls.length / size) }, (_, index) => {
    return urls.slice(index * size, index * size + size);
  });
}

const PhotoGallery = ({ photos }) => {
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

  const [firstPhoto, ...otherPhotos] = photos;
  const chunks = chunkUrls(otherPhotos, 2);

  return (
    <div css={container}>
      <div css={box}>
        <Photo type="L" photoUrl={firstPhoto.url} alt={firstPhoto.caption} />
      </div>

      <div css={wrapper}>
        {chunks.map((chunk, chunkIndex) => {
          const chunkId = `${chunk.length}-${chunkIndex}`;

          return (
            <div css={innerBox} key={chunkId}>
              {chunk.map(({ url, caption }) => (
                <Photo key={url} photoUrl={url} type="M" alt={caption} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

PhotoGallery.propTypes = {
  /** Photo list */
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PhotoGallery;
