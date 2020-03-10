import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

function starType(value) {
  if (value <= 0) return 'starEmpty';
  if (value >= 1) return 'starFull';
  return 'starHalf';
}

const starsTemplate = [0, 1, 2, 3, 4];

const Rating = ({ compact, rating }) => {
  const ratingContainer = css`
    display: flex;
    align-items: center;
  `;

  return (
    <div css={ratingContainer}>
      {compact ? (
        <Icon size="S" type="starFull" hasMargin margin={5} />
      ) : (
        starsTemplate.map(value => (
          <Icon
            key={value}
            size="S"
            type={starType(rating - value)}
            hasMargin
            margin={5}
          />
        ))
      )}
      <Text>{`(${rating})`}</Text>
    </div>
  );
};

Rating.propTypes = {
  /** Número entre 0 y 5 para usar como calificación */
  rating: PropTypes.number.isRequired,

  /** Indica si mostrar una o 5 estrellas */
  compact: PropTypes.bool,
};

Rating.defaultProps = {
  compact: false,
};

export default Rating;
