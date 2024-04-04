import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

type ListItemData = {
  avatarNumber: number;
  urlPath: string;
  impressionsCount: string;
  impressionsPercentage: string;
  clicksCount: string;
  clicksPercentage: string;
};

const AvatarLight = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightBold,
}));

const items: ListItemData[] = [
  {
    avatarNumber: 1,
    urlPath: '/templates/react/react-free/',
    impressionsCount: '84.873',
    impressionsPercentage: '34.76%',
    clicksCount: '15.594',
    clicksPercentage: '28.75%',
  },
  {
    avatarNumber: 2,
    urlPath: '/templates/angular/angular-pro/',
    impressionsCount: '74.152',
    impressionsPercentage: '30.50%',
    clicksCount: '12.483',
    clicksPercentage: '27.45%',
  },
  {
    avatarNumber: 3,
    urlPath: '/templates/vue/vue-essential/',
    impressionsCount: '64.283',
    impressionsPercentage: '29.75%',
    clicksCount: '11.892',
    clicksPercentage: '26.68%',
  },
  {
    avatarNumber: 4,
    urlPath: '/templates/svelte/svelte-basic/',
    impressionsCount: '59.873',
    impressionsPercentage: '28.30%',
    clicksCount: '10.234',
    clicksPercentage: '25.50%',
  },
];

function TopLandingPages() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader title={t('Top Landing Pages')} />
      <Divider />
      <CardContent>
        <List
          component="div"
          disablePadding
        >
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  display: { xs: 'block', sm: 'flex' },
                }}
                disableGutters
                alignItems="flex-start"
                component="div"
              >
                <ListItemAvatar>
                  <AvatarLight>{item.avatarNumber}</AvatarLight>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link
                      href=""
                      onClick={(e) => e.preventDefault()}
                      underline="hover"
                      variant="subtitle1"
                      fontWeight={500}
                    >
                      {item.urlPath}
                    </Link>
                  }
                  disableTypography
                  secondary={
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={{ xs: 2, sm: 4 }}
                      mt={1}
                    >
                      <Box>
                        <Typography
                          component="div"
                          variant="body1"
                          gutterBottom
                          color="text.secondary"
                        >
                          {t('Impressions')}
                        </Typography>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Typography
                            component="div"
                            variant="h3"
                            color="text.primary"
                            sx={{ mr: 1 }}
                          >
                            {item.impressionsCount}
                          </Typography>
                          <Chip
                            label={item.impressionsPercentage}
                            color="success"
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          component="div"
                          variant="body1"
                          gutterBottom
                          color="text.secondary"
                        >
                          {t('Clicks')}
                        </Typography>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Typography
                            component="div"
                            variant="h3"
                            color="text.primary"
                            sx={{ mr: 1 }}
                          >
                            {item.clicksCount}
                          </Typography>
                          <Chip
                            label={item.clicksPercentage}
                            color="success"
                          />
                        </Box>
                      </Box>
                    </Stack>
                  }
                />
                <Box
                  sx={{
                    mt: { xs: 2, sm: 0 },
                  }}
                  alignSelf="center"
                >
                  <Button
                    color="secondary"
                    variant="outlined"
                    size="small"
                  >
                    {t('Visit URL')}
                  </Button>
                </Box>
              </ListItem>
              <Divider
                sx={{
                  my: 1,
                }}
              />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          justifyContent: 'center',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
        >
          {t('Advanced View')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default TopLandingPages;
