import { Box, CardContent, Stack } from '@mui/material';
import SelectedAccentDropdown from './selected-accent-dropdown';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Box
        sx={{
          borderRadius: (theme) => theme.shape.borderRadius + 'px',
          width: '100%',
          backgroundColor: 'neutral.900',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
          }}
        >
          <SelectedAccentDropdown />
        </CardContent>
      </Box>
    </Stack>
  );
};

export default Component;
