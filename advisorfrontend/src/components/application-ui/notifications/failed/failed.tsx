import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';
import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material';
import toast from 'react-hot-toast';
import { AvatarState } from 'src/components/base/styles/avatar';

const Component = () => {
  const handleNotificationClickAlt = () => {
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
              state="error"
              variant="rounded"
              useShadow
              sx={{
                width: 38,
                height: 38,
                mt: 0.4,
              }}
            >
              <ReportTwoToneIcon fontSize="small" />
            </AvatarState>
            <Box ml={2}>
              <Typography
                gutterBottom
                variant="h6"
                fontWeight={400}
              >
                Failed:{' '}
                <Typography
                  fontWeight={600}
                  component="span"
                  variant="h6"
                >
                  Server Error
                </Typography>
              </Typography>

              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                We encountered an error during the latest update process.
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={500}
              >
                Feature upgrades are temporarily on hold.
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
          onClick={handleNotificationClickAlt}
        >
          Trigger Failed
        </Button>
      </CardContent>
    </Card>
  );
};

export default Component;
