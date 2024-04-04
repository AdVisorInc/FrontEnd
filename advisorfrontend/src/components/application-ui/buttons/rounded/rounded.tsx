import { Stack } from '@mui/material';
import { ButtonRounded } from 'src/components/base/styles/button-rounded';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <ButtonRounded variant="contained">Button text</ButtonRounded>
      <ButtonRounded variant="outlined">Button text</ButtonRounded>
      <ButtonRounded
        color="secondary"
        variant="contained"
      >
        Button text
      </ButtonRounded>
      <ButtonRounded
        color="secondary"
        variant="outlined"
      >
        Button text
      </ButtonRounded>
    </Stack>
  );
};

export default Component;
