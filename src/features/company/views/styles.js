import styled from "styled-components";

import { colors } from '../../../shared/colors';

export const Container = styled.div`
  flex: 1;
  position: relative;
  background-color: ${colors.greyBackground};
  padding: 16px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: ${(props) => props.width || 80}px;
  height: ${(props) => props.width || 80}px;
  border-radius: 8px;
  margin-right: 24px;
`;

export const LoadingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${colors.white};
`;


export const CompanyContainer = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.white};
`;

export const CompanyPresentContainer = styled.div`
  flex: 1;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CompanyDescriptionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CompanyDataContainer = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutContainer = styled.div`
  flex: 1;
  margin-bottom: 16px;
`;

export const GraphicContainer = styled.div`
  flex: 1;
  margin-bottom: 16px;
`;

export const InfoContainer = styled.div`
  flex: 1;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  margin: 0px;
  margin-bottom: 8px;
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.primary ? "palevioletred" : colors.greyInfo};
`;

export const Text = styled.p`
  margin: 0px;
  font-size: 1em;
  text-align: center;
  color: ${props => props.primary ? "palevioletred" : colors.greyInfo};
`;