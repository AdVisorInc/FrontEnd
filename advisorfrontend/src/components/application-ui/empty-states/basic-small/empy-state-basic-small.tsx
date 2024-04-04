import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';

const EmptyStateBasicSmall = () => {
  return (
    <Stack
      spacing={0.5}
      justifyContent="center"
      direction="column"
      alignItems="center"
      py={1}
    >
      <SearchOffRoundedIcon
        sx={{ color: 'neutral.500' }}
        fontSize="large"
      />
      <Box textAlign="center">
        <Typography
          variant="h5"
          color="text.primary"
        >
          No devices
        </Typography>
        <Typography
          color="text.secondary"
          fontWeight={400}
        >
          Create a new device to get started
        </Typography>
      </Box>
      <Box width="100%">
        <Divider
          flexItem
          sx={{ my: 1, mx: 'auto', width: '55%' }}
        />
      </Box>
      <Button
        startIcon={<AddRoundedIcon />}
        variant="outlined"
        color="secondary"
        size="small"
      >
        Add device
      </Button>
    </Stack>
  );
};

export default EmptyStateBasicSmall;
