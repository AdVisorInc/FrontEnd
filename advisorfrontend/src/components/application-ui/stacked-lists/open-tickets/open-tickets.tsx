import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { formatDistance, subMinutes } from 'date-fns';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';

interface IssueData {
  title: string;
  avatarSrc: string;
  userName: string;
  minutesAgo: number;
  status: 'Rejected' | 'Completed' | 'On hold' | 'Pending' | 'Failed';
}

const statusToColorMap = {
  Rejected: 'error',
  Completed: 'success',
  'On hold': 'info',
  Pending: 'warning',
  Failed: 'error',
};

const issues: IssueData[] = [
  {
    title: 'Unresponsive checkout button',
    avatarSrc: '/avatars/4.png',
    userName: 'Isha Rollins',
    minutesAgo: 22,
    status: 'On hold',
  },
  {
    title: 'Admin dashboard access issue',
    avatarSrc: '/avatars/5.png',
    userName: 'Liana Dixon',
    minutesAgo: 110,
    status: 'Pending',
  },
  {
    title: 'Unable to update user profile',
    avatarSrc: '/avatars/4.png',
    userName: 'Kush Malone',
    minutesAgo: 15,
    status: 'Failed',
  },
  {
    title: 'Database connection errors',
    avatarSrc: '/avatars/3.png',
    userName: 'Rebecca Martin',
    minutesAgo: 190,
    status: 'Rejected',
  },
  {
    title: 'Slower page loads after the update',
    avatarSrc: '/avatars/2.png',
    userName: 'Devon Lane',
    minutesAgo: 67,
    status: 'Completed',
  },
  {
    title: 'API rate limits exceeded',
    avatarSrc: '/avatars/5.png',
    userName: 'Harrison Rhodes',
    minutesAgo: 32,
    status: 'On hold',
  },
  {
    title: 'Subscription billing errors',
    avatarSrc: '/avatars/1.png',
    userName: 'Angela Palmer',
    minutesAgo: 120,
    status: 'Pending',
  },
];

interface IssueItemProps extends IssueData {}

const IssueItem: React.FC<IssueItemProps> = ({
  title,
  avatarSrc,
  userName,
  minutesAgo,
  status,
}) => {
  const { t } = useTranslation();

  const color = statusToColorMap[status];

  return (
    <>
      <ListItem sx={{ p: 2 }}>
        <ListItemText
          disableTypography
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
          primary={
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              color="text.primary"
              variant="h5"
              gutterBottom
              noWrap
              underline="hover"
            >
              {title}
            </Link>
          }
          secondary={
            <Box
              mt={0.7}
              display="flex"
              alignItems="center"
            >
              <Avatar
                sx={{ mr: 1, width: 28, height: 28 }}
                src={avatarSrc}
              />
              <Link
                underline="hover"
                href=""
                onClick={(e) => e.preventDefault()}
                variant="subtitle1"
                fontWeight={500}
              >
                {userName}
              </Link>
              <Typography
                sx={{ pl: 1, display: { xs: 'none', md: 'block' } }}
                variant="subtitle2"
                color="text.secondary"
              >
                {t('opened')}{' '}
                {formatDistance(subMinutes(new Date(), minutesAgo), new Date(), {
                  addSuffix: true,
                })}
              </Typography>
            </Box>
          }
        />
        <Box ml={1}>
          <Chip
            variant="filled"
            //@ts-ignore
            color={color}
            label={t(status)}
          />
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

function Component() {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        position: 'relative',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
      }}
    >
      <CardHeader
        sx={{
          p: 2,
          '& .MuiCardHeader-action': {
            position: 'absolute',
            right: (theme) => theme.spacing(2),
            top: (theme) => theme.spacing(1.5),
            mt: 0,
          },
        }}
        action={
          <IconButton
            size="small"
            color="secondary"
          >
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={t('Open tickets')}
      />
      <Box
        sx={{
          mx: 2,
          mb: 2,
          p: 0,
          height: 370,
          backgroundColor: 'background.paper',
          borderRadius: 'inherit',
        }}
      >
        <Scrollbar>
          <List disablePadding>
            {issues.map((issue, index) => (
              <IssueItem
                key={index}
                {...issue}
              />
            ))}
          </List>
        </Scrollbar>
      </Box>
    </Card>
  );
}

export default Component;
