import styled from "styled-components";

import { colors } from './shared/colors';

export const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 100px;
  flex: 1;
  background-color: ${colors.greyBackground};
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ContainerContent = styled.div`
  height: 100%;
  position: relative;
  background-color: ${colors.purple};
`;