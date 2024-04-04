import LoadingButton from '@mui/lab/LoadingButton';
import { Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <LoadingButton
        size="small"
        loading
        color="secondary"
        variant="contained"
      >
        Loading
      </LoadingButton>
      <LoadingButton
        loading
        color="secondary"
        variant="contained"
      >
        Loading
      </LoadingButton>
      <LoadingButton
        loading
        size="large"
        color="primary"
        variant="outlined"
      >
        Loading
      </LoadingButton>
    </Stack>
  );
};

export default Component;
