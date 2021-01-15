import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonStyled,
  Container,
  SearchIcon,
} from './styles';

const Button = ({
  label,
  icon,
  onClick,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'search':
        return <SearchIcon />
      default:
        break;
    }
  };

  return (
    <Container>
      <ButtonStyled
        onClick={onClick}
      >
        {icon !== '' ? renderIcon() : label}
      </ButtonStyled>
    </Container>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => console.log("onClick"),
  label: '',
  icon: '',
};

export default Button;
