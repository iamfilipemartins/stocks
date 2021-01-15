import styled from "styled-components";
import { colors } from "../../../colors";
import { Stock } from '@styled-icons/remix-line/Stock';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${colors.white};
`;

export const Container = styled.header`
  display: flex;
  flex: 1; 
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

export const SearchContainer = styled.div`
  background-color: ${colors.blueRoyal};
  display: flex;
  flex-direction: ${(props) => (props.width > 1000 ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
`;

export const AppbarContainer = styled.div`
  position: static;
  background-color: ${colors.blueVideo};
  display: flex;
  flex: 1;
  flex-direction: ${(props) => (props.width > 1000 ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const StockIcon = styled(Stock)`
  width: 2em;
  height: 2em;
  margin-right: 16px;
  color: ${colors.white};
`;

export const StockContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.width > 1000 ? 'row' : 'column')};
  justify-content: flex-start;
  align-items: center;
`;