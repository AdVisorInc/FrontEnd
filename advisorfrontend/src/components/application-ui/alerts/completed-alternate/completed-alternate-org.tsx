import { Stack } from '@mui/material';
import AlertCompletedAlternateOrg from "./alert-completed-alternet-org";

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <AlertCompletedAlternateOrg />
    </Stack>
  );
};

export default Component;
