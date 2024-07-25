import { Box, colors } from '@mui/material';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';

export default function Geography() {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="8px">
        <GeographyChart />
      </Box>
    </Box>
  );
}
