import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonStyled,
  Container,
  GitIcon,
  LinkedinIcon,
  SearchIcon,
} from './styles';

const Button = ({
  label,
  icon,
  onClick,
  border,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'search':
        return <SearchIcon />
      case 'git':
        return <GitIcon />
      case 'linkedin':
        return <LinkedinIcon />
      default:
        break;
    }
  };

  return (
    <Container>
      <ButtonStyled
        onClick={onClick}
        border={border}
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
  border: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => console.log("onClick"),
  label: '',
  icon: '',
  border: null,
};

export default Button;
