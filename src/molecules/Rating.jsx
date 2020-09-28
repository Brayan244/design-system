import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

function starType(value, color) {
  let selectedTypes = '';

  if (value <= 0) {
    selectedTypes = 'starEmpty';
  }

  if (value >= 1) {
    selectedTypes = 'starFull';
  }

  if (value > 0 && value < 1) {
    selectedTypes = 'starHalf';
  }

  return `${selectedTypes}${color}`;
}

const starsTemplate = [0, 1, 2, 3, 4];

const Rating = ({ compact, rating, color, label }) => {
  const ratingContainer = css`
    display: flex;
    align-items: center;
  `;

  return (
    <div css={ratingContainer}>
      {compact ? (
        <Icon size="S" type={`starFull${color}`} hasMargin margin={5} />
      ) : (
        starsTemplate.map(value => (
          <Icon
            key={value}
            size="S"
            type={starType(rating - value, color)}
            hasMargin
            margin={5}
          />
        ))
      )}
      <Text>{label || rating}</Text>
    </div>
  );
};

Rating.propTypes = {
  /** Número entre 0 y 5 para usar como calificación */
  rating: PropTypes.number.isRequired,

  /** Indica si mostrar una o 5 estrellas */
  compact: PropTypes.bool,

  /** Indica el color del icono de estrellas */
  color: PropTypes.oneOf(['Yellow']),

  /** Label opcional que se muestra en lugar del numero de estrellas */
  label: PropTypes.string,
};

Rating.defaultProps = {
  compact: false,
  color: '',
  label: '',
};

export default Rating;
