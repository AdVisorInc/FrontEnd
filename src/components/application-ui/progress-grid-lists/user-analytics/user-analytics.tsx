import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      name: 'Munroe Dacks',
      jobTitle: t('Senior Cost Accountant'),
      company: 'Trudoo',
      avatar: '/avatars/1.png',
      value: 65,
    },
    {
      id: 2,
      name: 'Gunilla Canario',
      jobTitle: t('Associate Professor'),
      company: 'Buzzdog',
      avatar: '/avatars/2.png',
      value: 76,
    },
    {
      id: 3,
      name: 'Rowena Geistmann',
      jobTitle: t('Pharmacist'),
      company: 'Yozio',
      avatar: '/avatars/3.png',
      value: 54,
    },
    {
      id: 4,
      name: 'Ede Stoving',
      jobTitle: t('VP Product Management'),
      company: 'Cogibox',
      avatar: '/avatars/4.png',
      value: 23,
    },
    {
      id: 5,
      name: 'Crissy Spere',
      jobTitle: t('Social Worker'),
      company: 'Babbleblab',
      avatar: '/avatars/5.png',
      value: 16,
    },
    {
      id: 6,
      name: 'Dacks Rowena',
      jobTitle: t('Project Manager'),
      company: 'Buzzdog',
      avatar: '/avatars/1.png',
      value: 65,
    },
  ];

  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
        p={2}
      >
        <Box>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            {t('Progress')}
          </Typography>
          <Typography variant="h5">{t('Users Analytics')}</Typography>
        </Box>
        <Chip
          label={t('Pending')}
          variant="outlined"
          color="warning"
        />
      </Box>
      <List disablePadding>
        {items.map((item) => (
          <Fragment key={item.id}>
            <Divider />
            <ListItem
              sx={{
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', sm: 'row' },
                py: { xs: 1.5, sm: 2 },
                px: { xs: 2, sm: 2.5 },
              }}
            >
              <ListItemAvatar
                sx={{
                  minWidth: 'auto',
                  mr: 2,
                  mb: { xs: 1, sm: 0 },
                }}
              >
                <Avatar
                  sx={{
                    width: 42,
                    height: 42,
                  }}
                  alt={item.name}
                  src={item.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  flexGrow: 0,
                  maxWidth: { xs: '100%', sm: '65%' },
                  flexBasis: '65%',
                  width: '100%',
                }}
                disableTypography
                primary={
                  <Typography
                    noWrap
                    variant="h6"
                  >
                    {item.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      noWrap
                      variant="subtitle2"
                      color="text.secondary"
                    >
                      {item.jobTitle} {t('at')}{' '}
                      <Link
                        href=""
                        onClick={(e) => e.preventDefault()}
                        underline="hover"
                      >
                        <b>{item.company}</b>
                      </Link>
                    </Typography>
                  </>
                }
              />
              <Box
                width={'100%'}
                display="flex"
                flexGrow={1}
                alignItems="center"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  flex={1}
                  sx={{
                    width: '100%',
                    pr: { xs: 2, sm: 3 },
                  }}
                >
                  <LinearProgress
                    sx={{
                      minWidth: 65,
                      width: '100%',
                    }}
                    variant="determinate"
                    value={item.value}
                  />
                  <Typography
                    sx={{
                      pl: 1,
                    }}
                    fontWeight={500}
                    variant="body2"
                    textAlign="right"
                  >
                    +{item.value}%
                  </Typography>
                </Box>
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                >
                  {t('View')}
                </Button>
              </Box>
            </ListItem>
          </Fragment>
        ))}
      </List>
    </Card>
  );
}

export default Component;
