import FirstPageTwoToneIcon from '@mui/icons-material/FirstPageTwoTone';
import { Button, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Button
        startIcon={<FirstPageTwoToneIcon />}
        color="primary"
        variant="contained"
      >
        Button text
      </Button>
      <Button
        startIcon={<FirstPageTwoToneIcon />}
        color="secondary"
        variant="contained"
      >
        Button text
      </Button>
      <Button
        startIcon={<FirstPageTwoToneIcon />}
        color="primary"
        variant="outlined"
      >
        Button text
      </Button>
      <Button
        startIcon={<FirstPageTwoToneIcon />}
        color="secondary"
        variant="outlined"
      >
        Button text
      </Button>
    </Stack>
  );
};

export default Component;
