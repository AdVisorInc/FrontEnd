import { Stack } from '@mui/material';
import { ButtonSoft } from 'src/components/base/styles/button-soft';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <ButtonSoft size="small">Button text</ButtonSoft>
      <ButtonSoft>Button text</ButtonSoft>
      <ButtonSoft disabled>Disabled button</ButtonSoft>
      <ButtonSoft size="large">Button text</ButtonSoft>
    </Stack>
  );
};

export default Component;
