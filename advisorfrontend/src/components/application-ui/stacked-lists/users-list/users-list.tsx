import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface UserListItemData {
  avatarSrc: string;
  primaryTextKey: string;
  secondaryTextKey: string;
  value: string | number;
  valueColor: 'error.main' | 'success.main' | 'warning.main' | 'info.main';
  arrowIcon: 'up' | 'down';
}

const usersData: UserListItemData[] = [
  {
    avatarSrc: '/avatars/1.png',
    primaryTextKey: 'Isaiah Ruiz',
    secondaryTextKey: 'Senior Web Developer',
    value: '29.544',
    valueColor: 'error.main',
    arrowIcon: 'up',
  },
  {
    avatarSrc: '/avatars/2.png',
    primaryTextKey: 'Inez Conley',
    secondaryTextKey: 'Project Manager',
    value: 684,
    valueColor: 'success.main',
    arrowIcon: 'up',
  },
  {
    avatarSrc: '/avatars/3.png',
    primaryTextKey: 'Adyan Sosa',
    secondaryTextKey: 'User Experience Designer',
    value: '$1,24M',
    valueColor: 'warning.main',
    arrowIcon: 'down',
  },
  {
    avatarSrc: '/avatars/4.png',
    primaryTextKey: 'Beck Simpson',
    secondaryTextKey: 'Senior Consultant',
    value: 786,
    valueColor: 'info.main',
    arrowIcon: 'up',
  },
];

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        sx={{
          p: 2.5,
        }}
        title={t('Users list')}
        action={
          <Button
            size="small"
            variant="outlined"
            endIcon={<ExpandMoreTwoToneIcon />}
            color="secondary"
          >
            {t('Export')}
          </Button>
        }
      />
      <Divider />
      <List sx={{ py: 0 }}>
        {usersData.map((user, index) => (
          <React.Fragment key={index}>
            <ListItem sx={{ px: 2, py: 1.6 }}>
              <ListItemAvatar sx={{ mr: 2, minWidth: 0 }}>
                <Avatar src={user.avatarSrc} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link
                    href=""
                    onClick={(e) => e.preventDefault()}
                    color="text.primary"
                    variant="h5"
                  >
                    {t(user.primaryTextKey)}
                  </Link>
                }
                secondary={
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    noWrap
                  >
                    {t(user.secondaryTextKey)}
                  </Typography>
                }
              />
              <Box
                display="flex"
                alignItems="center"
              >
                <Typography
                  sx={{ pr: 1 }}
                  variant="h4"
                  color={user.valueColor}
                >
                  {user.value}
                </Typography>
                {user.arrowIcon === 'up' ? (
                  <ArrowUpwardTwoToneIcon
                    fontSize="small"
                    sx={{ color: theme.palette.success.main }}
                  />
                ) : (
                  <ArrowDownwardTwoToneIcon
                    fontSize="small"
                    sx={{ color: theme.palette.error.main }}
                  />
                )}
              </Box>
            </ListItem>
            {index !== usersData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}

export default Component;
