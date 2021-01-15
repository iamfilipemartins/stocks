import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import styled from "styled-components";
import { colors } from "../../../colors";
import { ExpandMore } from '@styled-icons/material/ExpandMore';

export const Container = styled.div`
  flex: 1;
  display: flex;
`;

export const ExpandMoreIcon = styled(ExpandMore)`
  width: 1em;
  height: 1em;
  color: ${colors.greyInfo};
`;

export const AccordionContainer = styled(Accordion)`
  width: 100%;
`;

export const AccordionSummaryContainer = styled(AccordionSummary)`
`;

export const AccordionDetailsContainer = styled(AccordionDetails)`
  display: flex;
  flex: 1;
  background-color: ${colors.greyBackground};
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${colors.greyInfo};
`;

export const Text = styled.p`
  font-size: 1em;
  text-align: center;
  color: ${colors.greyInfo};
`;

