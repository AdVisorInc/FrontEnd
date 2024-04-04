import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import { Button, Card, CardContent, Unstable_Grid2 as Grid } from '@mui/material';
import toast from 'react-hot-toast';

const Component = () => {
  const handleSuccessClick = () => {
    toast.success('This is a success message!', { position: 'top-right' });
  };

  const handleErrorClick = () => {
    toast.error('This is an error message.', { position: 'top-right' });
  };

  const handlePromiseClick = () => {
    const examplePromise = () =>
      new Promise<string>((resolve, reject) => {
        // Simulate an async operation using setTimeout
        setTimeout(() => {
          const success = true;
          if (success) {
            resolve('Promise resolved!');
          } else {
            reject(new Error('Promise rejected.'));
          }
        }, 2000);
      });

    toast.promise(
      examplePromise(),
      {
        loading: 'Promise is pending...',
        success: 'Promise resolved!',
        error: 'Promise rejected.',
      },
      { position: 'top-right' }
    );
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        xs={12}
        sm={4}
      >
        <Card
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CardContent>
            <Button
              endIcon={<ArrowRightAltTwoToneIcon />}
              variant="outlined"
              color="success"
              onClick={handleSuccessClick}
            >
              Trigger Success
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={4}
      >
        <Card
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CardContent>
            <Button
              endIcon={<ArrowRightAltTwoToneIcon />}
              variant="outlined"
              color="error"
              onClick={handleErrorClick}
            >
              Trigger Error
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={4}
      >
        <Card
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CardContent>
            <Button
              endIcon={<ArrowRightAltTwoToneIcon />}
              variant="outlined"
              color="primary"
              onClick={handlePromiseClick}
            >
              Trigger Promise
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Component;
