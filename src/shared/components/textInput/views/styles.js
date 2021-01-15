import styled from 'styled-components';

import { colors } from '../../../colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const TextInputStyled = styled.input`
  font-size: 18px;
  line-height: 22px;
  padding: 8px;
  margin: 8px;
  background: ${(props) => props.transparent ? 'transparent' : colors.white};
  color: ${(props) => props.transparent ? 'white' : colors.greyInfo};
  border: none;
  border-bottom: 1px solid white;
  ::placeholder {
    color: ${(props) => props.transparent ? colors.white : colors.greyInfo};
  }
  font-family: Raleway;
`;

export default Container;
