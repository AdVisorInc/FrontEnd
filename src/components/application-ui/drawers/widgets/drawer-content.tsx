import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import BackupTwoToneIcon from '@mui/icons-material/BackupTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  CardActionArea,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { formatDistance, subMinutes } from 'date-fns';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';
import WeatherWeekly from './weather-weekly';
import WeatherWidgets from './weather-widgets';

const Component = () => {
  return (
    <Stack spacing={{ xs: 2, md: 3 }}>
      <Card elevation={23}>
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
        </Box>
      </Card>
      <WeatherWidgets />
      <Card elevation={23}>
        <WeatherWeekly />
      </Card>
      <Card elevation={23}>
        <Box
          px={2}
          pt={2}
          pb={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">New friend request</Typography>
          <IconButton
            sx={{
              p: 0.2,
            }}
            size="small"
          >
            <ArrowOutwardRoundedIcon fontSize="small" />
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
              sent you a friend request
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
      </Card>
    </Stack>
  );
};

export default Component;
