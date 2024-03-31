import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import toast from 'react-hot-toast';

const Component = () => {
  const handleNotificationClickAlt = () => {
    toast.custom(
      (t) => (
        <Card
          elevation={21}
          className={`${t.visible ? 'animate-enter' : 'animate-leave'}`}
        >
          <Box
            sx={{
              minWidth: 300,
              maxWidth: 360,
            }}
          >
            <Stack
              p={1.5}
              overflow="hidden"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1.5}
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                  variant="middle"
                />
              }
            >
              <Box
                overflow="hidden"
                display="flex"
                alignItems="center"
              >
                <Avatar
                  sx={{
                    width: 38,
                    height: 38,
                  }}
                  src="/avatars/4.png"
                />
                <Box
                  ml={1.5}
                  overflow="hidden"
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                  >
                    Alexandra Thompson
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    noWrap
                    color="text.secondary"
                  >
                    Sure, let's get together soon, I'll email you the details later on today
                  </Typography>
                </Box>
              </Box>
              <Link
                href=""
                variant="body1"
                fontWeight={500}
                onClick={(e) => {
                  e.preventDefault();
                  toast.dismiss(t.id);
                }}
              >
                Reply
              </Link>
            </Stack>
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
          onClick={handleNotificationClickAlt}
        >
          Trigger message
        </Button>
      </CardContent>
    </Card>
  );
};

export default Component;
