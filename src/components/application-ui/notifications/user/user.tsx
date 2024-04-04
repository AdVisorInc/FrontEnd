import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { formatDistance, subMinutes } from 'date-fns';
import toast from 'react-hot-toast';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

const Component = () => {
  const handleNotificationClick = () => {
    toast.custom(
      (t) => (
        <Card
          elevation={21}
          className={`${t.visible ? 'animate-enter' : 'animate-leave'}`}
        >
          <Box
            sx={{
              minWidth: 300,
              maxWidth: 320,
            }}
          >
            <Box
              px={2}
              pt={2}
              pb={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">New notification</Typography>
              <IconButton
                sx={{
                  p: 0.2,
                }}
                size="small"
                onClick={() => toast.dismiss(t.id)}
              >
                <CloseRoundedIcon fontSize="inherit" />
              </IconButton>
            </Box>
            <CardActionArea
              sx={{
                px: 2,
                py: 1.5,
                display: 'flex',
                transition: 'none',
                alignItems: 'flex-start',
                '&:hover': {
                  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.01),
                },
              }}
            >
              <PulseBadge
                color="success"
                variant="dot"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent=" "
                overlap="circular"
              >
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                  }}
                  src="/avatars/5.png"
                />
              </PulseBadge>
              <Box
                ml={1.5}
                flex={1}
                overflow="hidden"
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="div"
                >
                  Jessica D.
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  noWrap
                  gutterBottom
                >
                  commented on your photo
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.main"
                  noWrap
                  fontWeight={500}
                >
                  {formatDistance(subMinutes(new Date(), 32), new Date(), { addSuffix: true })}
                </Typography>
              </Box>
            </CardActionArea>
          </Box>
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
          Trigger notification
        </Button>
      </CardContent>
    </Card>
  );
};

export default Component;
