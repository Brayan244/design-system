import React from 'react';
import PropTypes from 'prop-types';
import Spacing from '../atoms/Spacing';
import RangePickerOption from '../molecules/RangePickerOption';
import Text from '../atoms/Text';

const RangePicker = ({ label, min, max, options, onOptionClick }) => {
  return (
    <Spacing vertical>
      {Boolean(label) && <Text weight="semibold">{label}</Text>}

      <Spacing size="XS">
        {options.map(option => {
          return (
            <RangePickerOption
              key={option}
              option={option}
              onClick={onOptionClick}
              isActive={option >= min && option <= max}
            />
          );
        })}
      </Spacing>
    </Spacing>
  );
};

RangePicker.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.number),
  onOptionClick: PropTypes.func.isRequired,
};

RangePicker.defaultProps = {
  label: '',
  options: [],
};

export default RangePicker;
