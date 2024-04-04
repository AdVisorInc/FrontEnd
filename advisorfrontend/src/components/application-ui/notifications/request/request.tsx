import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
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
              position: 'relative',
              minWidth: 300,
              maxWidth: 320,
            }}
          >
            <IconButton
              color="primary"
              sx={{
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
            <Box
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
                    width: 38,
                    height: 38,
                  }}
                  src="/avatars/1.png"
                />
              </PulseBadge>
              <Box
                ml={1.5}
                flex={1}
                overflow="hidden"
              >
                <Link
                  href=""
                  onClick={(e) => e.preventDefault()}
                  variant="subtitle1"
                  fontWeight={600}
                  color="text.primary"
                  underline="hover"
                >
                  John Martinez
                </Link>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  noWrap
                >
                  Sent you a friend request.
                </Typography>
                <Stack
                  mt={1.5}
                  mb={0.5}
                  spacing={1}
                  direction="row"
                >
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    Decline
                  </Button>
                </Stack>
              </Box>
            </Box>
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
          Trigger request
        </Button>
      </CardContent>
    </Card>
  );
};

export default Component;
