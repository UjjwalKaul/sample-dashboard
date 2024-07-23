import React from 'react';
import {
  Box,
  useTheme,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header';
import { tokens } from '../../theme';

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Important Question 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the detailed answer to the important question.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Important Question 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the detailed answer to the important question.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Important Question 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the detailed answer to the important question.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Important Question 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is the detailed answer to the important question.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
