import styled from "styled-components";
import { Search } from '@styled-icons/bootstrap/Search'
import { colors } from "../../../colors";
import { Github } from '@styled-icons/feather/Github';
import { Linkedin } from '@styled-icons/feather/Linkedin';

export const Container = styled.div`
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  color: black;
  font-size: 1em;
  margin: 8px;
  padding: 0.25em 1em;
  border: ${(props) => props.border ? `1px solid ${props.border}` : 'none'};
  border-radius: 8px;
`;

export const GitIcon = styled(Github)`
  width: 1.5em;
  height: 1.5em;
  color: ${colors.white};
`;

export const LinkedinIcon = styled(Linkedin)`
  width: 1.5em;
  height: 1.5em;
  color: ${colors.white};
`;

export const SearchIcon = styled(Search)`
  color: ${colors.white};
  width: 1.5em;
  height: 1.5em;
`
