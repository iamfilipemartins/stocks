import React from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  Title,
  Container,
  AccordionContainer,
  AccordionSummaryContainer,
  AccordionDetailsContainer,
} from './styles';

export const AccordionStyled = ({title, children}) => {
  return (
    <Container>
      <AccordionContainer>
        <AccordionSummaryContainer
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Title>{title}</Title>
        </AccordionSummaryContainer>
        <AccordionDetailsContainer>
          {children}
        </AccordionDetailsContainer>
      </AccordionContainer>
    </Container>
  );
};

AccordionStyled.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default AccordionStyled;
