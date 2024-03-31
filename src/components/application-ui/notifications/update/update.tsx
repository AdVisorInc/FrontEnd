import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone';
import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import toast from 'react-hot-toast';
import { AvatarState } from 'src/components/base/styles/avatar';

const Component = () => {
  const handleNotificationClick = () => {
    toast.custom(
      (t) => (
        <Card
          elevation={21}
          className={`${t.visible ? 'animate-enter' : 'animate-leave'}`}
        >
          <CardContent
            sx={{
              position: 'relative',
              minWidth: 300,
              maxWidth: 360,
              display: 'flex',
            }}
          >
            <AvatarState
              state="success"
              variant="rounded"
              useShadow
              sx={{
                width: 38,
                height: 38,
                mt: 0.4,
              }}
            >
              <NewReleasesTwoToneIcon fontSize="small" />
            </AvatarState>
            <Box ml={2}>
              <Typography
                gutterBottom
                variant="h6"
              >
                Update Completed Successfully
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                Please check the release notes for detailed information.
              </Typography>
            </Box>
            <IconButton
              sx={{
                ml: 2,
                p: 0.2,
                position: 'absolute',
                right: (theme) => theme.spacing(1),
                top: (theme) => theme.spacing(1),
              }}
              size="small"
              onClick={() => toast.dismiss(t.id)}
            >
              <CloseRoundedIcon fontSize="inherit" />
            </IconButton>
          </CardContent>
        </Card>
      ),
      {
        position: 'top-right',
      }
    );
  };

  return (
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
          onClick={handleNotificationClick}
        >
          Trigger Update
        </Button>
      </CardContent>
    </Card>
  );
};

export default Component;
