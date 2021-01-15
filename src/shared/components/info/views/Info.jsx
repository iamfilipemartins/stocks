import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  Text,
  TextLink,
  Container,
} from './styles';
import { useWindowDimensions } from '../../../utils';

const Info = ({
  title,
  text,
  link,
}) => {

  const { width } = useWindowDimensions();

  return (
    <Container width={width}>
      <Title>
        {title}
      </Title>
      {link ? (
        <TextLink href={text} target="_blank">
          {text}
        </TextLink>
      ) : (
        <Text>
          {text}
        </Text>
      )}
    </Container>
  );
};

Info.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.bool,
};

Info.defaultProps = {
  title: '',
  text: "",
  link: false,
};

export default Info;