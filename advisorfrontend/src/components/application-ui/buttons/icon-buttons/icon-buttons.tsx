import AddToQueueTwoToneIcon from '@mui/icons-material/AddToQueueTwoTone';
import { Button, Divider, Stack } from '@mui/material';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const Component = () => {
  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <ButtonIcon
          startIcon={<AddToQueueTwoToneIcon />}
          color="primary"
          variant="contained"
        />
        <ButtonIcon
          startIcon={<AddToQueueTwoToneIcon />}
          color="secondary"
          variant="contained"
        />
        <ButtonIcon
          startIcon={<AddToQueueTwoToneIcon />}
          color="primary"
          variant="outlined"
        />
        <ButtonIcon
          startIcon={<AddToQueueTwoToneIcon />}
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <ButtonIcon
          size="small"
          startIcon={<AddToQueueTwoToneIcon />}
          color="primary"
          variant="contained"
        />
        <ButtonIcon
          size="small"
          startIcon={<AddToQueueTwoToneIcon />}
          color="secondary"
          variant="contained"
        />
        <ButtonIcon
          size="small"
          color="secondary"
          variant="contained"
          startIcon={<AddToQueueTwoToneIcon />}
        />
        <ButtonIcon
          size="small"
          startIcon={<AddToQueueTwoToneIcon />}
          color="primary"
          variant="outlined"
        />
        <ButtonIcon
          size="small"
          startIcon={<AddToQueueTwoToneIcon />}
          color="secondary"
          variant="outlined"
        />
      </Stack>
    </>
  );
};

export default Component;
