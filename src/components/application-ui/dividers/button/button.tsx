import { Button, Divider, Stack } from '@mui/material';
import { ButtonRounded } from 'src/components/base/styles/button-rounded';

const Component = () => {
  return (
    <Stack spacing={4}>
      <Divider>
        <Button>Text button</Button>
      </Divider>
      <Divider>
        <ButtonRounded variant="contained">Round button</ButtonRounded>
      </Divider>
      <Divider sx={{ '.MuiDivider-wrapper': { p: 0 } }}>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
        >
          Outlined, small button
        </Button>
      </Divider>
    </Stack>
  );
};

export default Component;
