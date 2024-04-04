import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { formatDistance, subHours, subMinutes } from 'date-fns';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: theme.spacing(2),
  width: theme.spacing(2),
  height: theme.spacing(2),
  display: 'inline-block',
  border: `${theme.palette.background.paper} solid 2px`,
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
}));

type StatusType = 'online' | 'offline' | 'idle' | 'none';

interface ListItemData {
  avatarSrc: string;
  status: StatusType;
  timeAgo?: number;
  name: string;
  position: string;
  rating: number;
}

const listItems: ListItemData[] = [
  {
    avatarSrc: '/avatars/1.png',
    status: 'online',
    timeAgo: 12,
    name: 'Allison Torff',
    position: 'React Front End Developer',
    rating: 4.8,
  },
  {
    avatarSrc: '/avatars/3.png',
    status: 'offline',
    timeAgo: 12,
    name: 'Brandon Jonas',
    position: 'Lead UX Designer',
    rating: 4.5,
  },
  {
    avatarSrc: '/avatars/4.png',
    status: 'none',
    name: 'Ellesse Pena',
    position: 'Expert Accountant',
    rating: 4.7,
  },
  {
    avatarSrc: '/avatars/5.png',
    status: 'none',
    name: 'Dora Alvarez',
    position: 'UX Designer',
    rating: 5.0,
  },
  {
    avatarSrc: '/avatars/2.png',
    status: 'idle',
    timeAgo: 9,
    name: 'Jaydon Madsen',
    position: 'Senior Project Manager',
    rating: 5.0,
  },
];

function TopTrainers() {
  const { t } = useTranslation();
  const theme = useTheme();

  const getBadgeContent = (status: StatusType, timeAgo?: number) => {
    let background;
    let title;

    switch (status) {
      case 'online':
        background = theme.palette.success.main;
        title = t('Online since') + ' ';
        break;
      case 'offline':
        background = theme.palette.error.main;
        title = t('Offline since') + ' ';
        break;
      case 'idle':
        background = theme.palette.warning.main;
        title = t('Idle for') + ' ';
        break;
      default:
        return null;
    }

    if (timeAgo !== undefined) {
      title += formatDistance(
        status === 'idle' ? subHours(new Date(), timeAgo) : subMinutes(new Date(), timeAgo),
        new Date(),
        {
          addSuffix: true,
        }
      );
    }

    return (
      <Tooltip
        arrow
        placement="top"
        title={title}
      >
        <DotLegend style={{ background }} />
      </Tooltip>
    );
  };

  return (
    <Card>
      <CardHeader
        action={
          <IconButton color="secondary">
            <SearchTwoToneIcon fontSize="small" />
          </IconButton>
        }
        title={t('Top Trainers')}
      />
      <Divider />
      <Box
        sx={{
          height: 235,
        }}
      >
        <Scrollbar>
          <List disablePadding>
            {listItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  sx={{
                    py: 2.7,
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      mr: 1,
                    }}
                  >
                    {item.status !== 'none' ? (
                      <Badge
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        overlap="rectangular"
                        badgeContent={getBadgeContent(item.status, item.timeAgo)}
                      >
                        <AvatarWrapper
                          variant="rounded"
                          src={item.avatarSrc}
                        />
                      </Badge>
                    ) : (
                      <AvatarWrapper
                        variant="rounded"
                        src={item.avatarSrc}
                      />
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                    secondary={t(item.position)}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      noWrap: true,
                    }}
                  />
                  <Box
                    sx={{
                      lineHeight: 0.8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      mr: 2,
                    }}
                  >
                    <StarTwoToneIcon
                      sx={{
                        color: 'warning.main',
                      }}
                    />
                    <Typography variant="h5">{item.rating}</Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                    >
                      {t('Profile')}
                    </Button>
                  </Box>
                </ListItem>
                {index !== listItems.length - 1 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Scrollbar>
      </Box>
      <Divider />
      <CardActions
        disableSpacing
        sx={{ p: 1.5 }}
      >
        <Button
          variant="outlined"
          size="small"
        >
          {t('View all trainers')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default TopTrainers;
