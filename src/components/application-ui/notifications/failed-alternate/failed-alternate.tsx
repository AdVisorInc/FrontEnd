import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';
import { Box, Button, Card, CardContent, Divider, IconButton, Typography } from '@mui/material';
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
              flexDirection: 'column',
            }}
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <AvatarState
                state="error"
                sx={{
                  width: 44,
                  height: 44,
                }}
              >
                <ReportTwoToneIcon fontSize="small" />
              </AvatarState>
              <Box ml={1.5}>
                <Typography
                  gutterBottom
                  variant="caption"
                  fontWeight={600}
                  lineHeight={1}
                  color="text.secondary"
                >
                  Failed
                </Typography>
                <Typography
                  variant="h6"
                  color="text.primary"
                >
                  Server Error
                </Typography>
              </Box>
            </Box>
            <Box mt={2}>
              <Typography
                variant="subtitle1"
                fontWeight={500}
                gutterBottom
              >
                Feature upgrades are temporarily on hold.
              </Typography>
              <Divider sx={{ my: 1.5 }} />
              <Typography
                variant="subtitle2"
                color="error.main"
              >
                We encountered an error during the latest update process.
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
          Trigger Failed Alternate
        </Button>
      </CardContent>
    </Card>
  );
};

export default Component;
