import styled from "styled-components";
import { Search } from '@styled-icons/bootstrap/Search'
import { colors } from "../../../colors";

export const Container = styled.div`
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  color: black;
  font-size: 1em;
  margin: 8px;
  padding: 0.25em 1em;
  border: none;
  border-radius: 4px;
`;

export const SearchIcon = styled(Search)`
  color: ${colors.white};
  width: 24px;
  height: 24px;
`
