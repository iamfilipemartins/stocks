import React from 'react';
import PropTypes from 'prop-types';

import {
  TextInputStyled,
  Container,
} from './styles';

const TextInput = ({
  numberOfLines,
  placeholder,
  maxLength,
  value,
  onChange,
  transparent,
}) => {

  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <Container>
      <TextInputStyled
        placeholder={placeholder}
        value={value}
        onChange={(t) => handleChange(t)}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        type="text"
        transparent={transparent}
      />
    </Container>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  numberOfLines: PropTypes.number,
  transparent: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  placeholder: '',
  maxLength: "6",
  numberOfLines: "1",
  transparent: false,
};

export default TextInput;
