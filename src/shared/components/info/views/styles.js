import styled from "styled-components";
import { colors } from "../../../colors";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: ${(props) => (props.width > 600 ? 'row' : 'column')};
  align-items: center;
  justify-content: space-between;
  border: none;
  border-bottom: 1px solid ${colors.grey100};
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 1em;
  text-align: center;
  color: ${colors.greyInfo};
`;

export const Text = styled.p`
  font-size: 1em;
  text-align: center;
  color: ${colors.grey700};
`;

export const TextLink = styled.a`
  font-size: 1em;
  text-align: center;
  color: ${colors.grey700};
`;