import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  List,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { ListItemButtonWrapper } from 'src/components/base/styles/list-item-button';

function Component() {
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      title: t('Build React Interface'),
      category: 'Development',
      logo: '/placeholders/logo/discord-icon.svg',
      value: '4,685',
    },
    {
      id: 2,
      title: t('Create Ads Campaigns'),
      category: 'Marketing',
      logo: '/placeholders/logo/google-icon.svg',
      value: '8,434',
      budget: 'over',
    },
    {
      id: 3,
      title: t('Resolve Github issues'),
      category: 'Bugfixes',
      logo: '/placeholders/logo/spotify-icon.svg',
      value: '5,167',
      budget: '',
    },
    {
      id: 4,
      title: t('Build UI for Angular'),
      category: 'Development',
      logo: '/placeholders/logo/slack-icon.svg',
      value: '43,584',
      budget: '',
    },
    {
      id: 5,
      title: t('Create User Workflows'),
      category: 'Marketing',
      logo: '/placeholders/logo/pinterest-icon.svg',
      value: '5,978',
      budget: 'over',
    },
  ];

  return (
    <Card
      sx={{
        overflow: 'visible',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
        p={2}
      >
        <Typography
          variant="caption"
          color="text.secondary"
        >
          {t('Estimates')}
        </Typography>
        <Typography variant="h5">{t('Products Roadmap')}</Typography>
      </Box>
      <List disablePadding>
        {items.map((item) => (
          <Fragment key={item.id}>
            <Divider />
            <ListItemButtonWrapper
              sx={{
                display: { xs: 'block', sm: 'flex' },
                py: 2,
                px: 2.5,
              }}
            >
              <ListItemAvatar
                sx={{
                  minWidth: 'auto',
                  mr: 2,
                  mb: { xs: 2, sm: 0 },
                }}
              >
                <Avatar
                  variant="square"
                  sx={{
                    background: 'transparent',
                    width: 42,
                    height: 42,
                    img: {
                      width: '100%',
                      height: 'auto',
                    },
                  }}
                  alt={item.title}
                  src={item.logo}
                />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    color="text.primary"
                    variant="h5"
                  >
                    {item.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      noWrap
                      variant="subtitle2"
                      color="text.secondary"
                    >
                      {item.category}
                    </Typography>
                  </>
                }
              />

              <Chip
                sx={{
                  mt: { xs: 1, sm: 0 },
                }}
                label={`$${item.value}`}
                color={item.budget === 'over' ? 'error' : 'success'}
              />
            </ListItemButtonWrapper>
          </Fragment>
        ))}
      </List>
    </Card>
  );
}

export default Component;
