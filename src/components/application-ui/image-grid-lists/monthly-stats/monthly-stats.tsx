import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { format, subDays, subHours } from 'date-fns';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';

const LinkHover = styled('a')(({ theme }) => ({
  transition: theme.transitions.create(['transform', 'opacity', 'box-shadow']),
  transform: 'translateY(0px)',
  display: 'block',
  opacity: 1,
  borderRadius: theme.shape.borderRadius,

  '&:hover': {
    opacity: 0.9,
    boxShadow: `
      0 0.56875rem 3.3rem ${theme.palette.background.default},
      0 0.9975rem 2.4rem ${alpha(theme.palette.common.black, 0.07)},
      0 0.35rem 1rem ${alpha(theme.palette.common.black, 0.1)},
      0 0.225rem 0.8rem ${alpha(theme.palette.common.black, 0.15)}`,
    transform: 'translateY(-4px)',
  },
}));

function Component() {
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      title: t('Apple MacBook PRO 14"'),
      excerpt:
        'Acccess this page in order to manage and customize all aspects of your profile data and accounts.',
      image: '/placeholders/covers/landscape1.png',
      info_value: '12.589',
      info_title: t('visits'),
      date: format(subHours(new Date(), 5), 'MMMM dd yyyy'),
    },
    {
      id: 2,
      title: t('iPhone 15 Pro'),
      excerpt:
        'Control everything related to your profile and trading accounts as shown in this page.',
      image: '/placeholders/covers/landscape2.png',
      info_value: '345',
      info_title: t('reports'),
      date: format(subDays(new Date(), 8), 'MMMM dd yyyy'),
    },
    {
      id: 3,
      title: t('Apple Watch 12'),
      excerpt:
        'Complete your profile verifications to take full advantage of your account right away.',
      image: '/placeholders/covers/landscape3.png',
      info_value: '$68,593',
      info_title: t('sales'),
      date: format(subDays(new Date(), 12), 'MMMM dd yyyy'),
    },
    {
      id: 4,
      title: t('Xiaomi Headphones 3'),
      excerpt:
        'You can view, manage and customize your wallets and balances from this wallets page.',
      image: '/placeholders/covers/landscape4.png',
      info_value: '65',
      info_title: t('orders'),
      date: format(subDays(new Date(), 13), 'MMMM dd yyyy'),
    },
  ];

  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={2}
        pl={2.5}
        pr={2}
      >
        <Box>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            {t('Targets')}
          </Typography>
          <Typography variant="h5">{t('Monthly Stats')}</Typography>
        </Box>
        <Button
          variant="outlined"
          color="secondary"
        >
          {t('View all')}
        </Button>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 380,
        }}
      >
        <Scrollbar>
          <List disablePadding>
            {items.map((item) => (
              <Fragment key={item.id}>
                <ListItem
                  sx={{
                    display: { xs: 'block', md: 'flex' },
                    py: 2,
                    px: 2.5,
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      mr: { xs: 0, md: 2 },
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    <LinkHover
                      href=""
                      onClick={(e) => e.preventDefault()}
                    >
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 'auto',
                          height: { xs: '100%', md: 100 },
                        }}
                        alt={item.title}
                        src={item.image}
                      />
                    </LinkHover>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography
                    primary={
                      <Link
                        variant="h4"
                        href=""
                        onClick={(e) => e.preventDefault()}
                      >
                        {item.title}
                      </Link>
                    }
                    secondary={
                      <>
                        <Typography
                          sx={{
                            pt: 1,
                          }}
                          variant="subtitle2"
                          color="text.secondary"
                        >
                          {item.excerpt}
                        </Typography>
                      </>
                    }
                  />
                  <Box
                    component="span"
                    sx={{
                      display: { xs: 'none', md: 'inline-block' },
                    }}
                  >
                    <Box
                      ml={3}
                      textAlign="right"
                    >
                      <Typography
                        variant="h4"
                        lineHeight={1}
                      >
                        {item.info_value}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                      >
                        {item.info_title}
                      </Typography>
                    </Box>
                  </Box>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </List>
        </Scrollbar>
      </Box>
      <Box
        p={{ xs: 2, sm: 3 }}
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowForwardTwoToneIcon />}
          size="small"
        >
          {t('View all employees')}
        </Button>
      </Box>
    </Card>
  );
}

export default Component;
