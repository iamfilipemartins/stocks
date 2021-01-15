import styled from "styled-components";
import { colors } from "../../../colors";

export const Title = styled.h6`
  font-size: 1em;
  text-align: center;
  color: ${colors.white};
`;

export const Container = styled.footer`
  bottom: 0;
  height: 100px;
  left: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${colors.blueVideo};
`;