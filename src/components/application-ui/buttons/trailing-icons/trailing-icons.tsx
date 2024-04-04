import LastPageTwoToneIcon from '@mui/icons-material/LastPageTwoTone';
import { Button, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      py={2}
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Button
        endIcon={<LastPageTwoToneIcon />}
        color="primary"
        variant="contained"
      >
        Button text
      </Button>
      <Button
        endIcon={<LastPageTwoToneIcon />}
        color="secondary"
        variant="contained"
      >
        Button text
      </Button>
      <Button
        endIcon={<LastPageTwoToneIcon />}
        color="primary"
        variant="outlined"
      >
        Button text
      </Button>
      <Button
        endIcon={<LastPageTwoToneIcon />}
        color="secondary"
        variant="outlined"
      >
        Button text
      </Button>
    </Stack>
  );
};

export default Component;
