import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import BackupTwoToneIcon from '@mui/icons-material/BackupTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
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
            <Box
              p={1.5}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                mr={1}
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    variant="middle"
                  />
                }
              >
                <BackupTwoToneIcon
                  sx={{
                    color: 'primary.main',
                  }}
                />
                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={500}
                  >
                    Backup completed successfully!
                  </Typography>
                  <Link
                    href=""
                    onClick={(e) => e.preventDefault()}
                    underline="hover"
                    variant="body1"
                    fontWeight={500}
                  >
                    View details
                  </Link>
                </Box>
              </Stack>

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
          Trigger backup
        </Button>
      </CardContent>
    </Card>
  );
};

export default Component;
