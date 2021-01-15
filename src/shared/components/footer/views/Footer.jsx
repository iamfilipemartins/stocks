import React from 'react';
import Button from '../../button';
import { urls } from "../../../conection"; 

import {
  Container,
} from './styles';

export const Footer = () => {
  const handleOnPressGitButton = () => {
    const url = urls.URL_GIT;
    window.open(url, '_blank');
  };

  const handleOnPressLinkedinButton = () => {
    const url = urls.URL_LINKEDIN;
    window.open(url, '_blank');
  };

  return (
    <Container>
      <Button 
        icon="git"
        onClick={handleOnPressGitButton}
      />
      <Button 
        icon="linkedin"
        onClick={handleOnPressLinkedinButton}
      />
    </Container>
  );
};

export default Footer;
