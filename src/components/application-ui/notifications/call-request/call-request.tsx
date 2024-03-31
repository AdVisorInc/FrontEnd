import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import PhoneCallbackTwoToneIcon from '@mui/icons-material/PhoneCallbackTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import toast from 'react-hot-toast';
import { AvatarState } from 'src/components/base/styles/avatar';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const handleNotificationClick = () => {
    toast.custom(
      (t) => (
        <Container maxWidth="lg">
          <Card
            elevation={21}
            className={`${t.visible ? 'animate-enter' : 'animate-leave'}`}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              p={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction={{ xs: 'column', sm: 'row' }}
                alignItems="center"
                justifyContent={{ xs: 'space-evenly', md: 'flex-start' }}
                width="100%"
                divider={
                  <Divider
                    variant="middle"
                    orientation={smUp ? 'vertical' : 'horizontal'}
                    flexItem
                  />
                }
              >
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <AvatarState
                    useShadow
                    state="success"
                    sx={{
                      width: 48,
                      height: 48,
                    }}
                  >
                    <PhoneCallbackTwoToneIcon fontSize="small" />
                  </AvatarState>
                  <Box ml={1.5}>
                    <Typography
                      variant="h5"
                      noWrap
                    >
                      + (555) 123-4567
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                    >
                      <Avatar
                        alt="..."
                        sx={{
                          width: 20,
                          height: 20,
                          mr: 0.5,
                        }}
                        src="/avatars/3.png"
                      />
                      <Link
                        href=""
                        onClick={(e) => e.preventDefault()}
                        variant="h6"
                        noWrap
                      >
                        Alex T.
                      </Link>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    color="text.secondary"
                    variant="body1"
                  >
                    Queing:
                  </Typography>
                  <Typography variant="h6">Factoring</Typography>
                </Box>
                <Box>
                  <Typography
                    color="text.secondary"
                    variant="body1"
                  >
                    Wait:
                  </Typography>
                  <Typography variant="h6">00:56</Typography>
                </Box>
              </Stack>
              <Divider flexItem />
              <Stack
                direction="row"
                spacing={2}
                width={{ xs: '100%', sm: 'auto' }}
              >
                <Button
                  sx={{
                    width: { xs: '100%', sm: 'auto' },
                  }}
                  variant="contained"
                  color="success"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Accept
                </Button>
                <Button
                  sx={{
                    width: { xs: '100%', sm: 'auto' },
                  }}
                  variant="outlined"
                  color="error"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Ignore
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Container>
      ),
      {
        position: 'top-center',
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
          Trigger call request
        </Button>
      </CardContent>
    </Card>
  );
};

export default Component;
