import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import {
  alpha,
  Box,
  Card,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

const ListWrapper = styled(List)(() => ({
  '.MuiDivider-root:first-of-type': {
    display: 'none',
  },
}));

function Component() {
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      username: 'Shanelle Wynn',
      orders: 65,
      progress: 76,
      arrow: '',
      sales: '685',
    },
    {
      id: 2,
      username: 'Akeem Griffith',
      orders: 436,
      progress: 48,
      arrow: 'up',
      sales: '3,685',
    },
    {
      id: 3,
      username: 'Abigayle Hicks',
      orders: 734,
      progress: 38,
      arrow: '',
      sales: '765',
    },
    {
      id: 4,
      username: 'Reece Corbett',
      orders: 654,
      progress: 85,
      arrow: '',
      sales: '43,548',
    },
    {
      id: 5,
      username: 'Zain Baptista',
      orders: 764,
      progress: 29,
      arrow: 'up',
      sales: '1,584',
    },
    {
      id: 6,
      username: 'Julie Prosser',
      orders: 274,
      progress: 43,
      arrow: 'up',
      sales: '1,584',
    },
  ];

  return (
    <Card>
      <CardHeader
        title={t('Premium Sellers')}
        subheader={t('Earnings split based on customers')}
        titleTypographyProps={{ variant: 'h5', fontWeight: 600, noWrap: true }}
        subheaderTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
      />
      <Divider />
      <Box
        sx={{
          height: 360,
          overflowY: 'auto',
        }}
      >
        <ListWrapper disablePadding>
          {items.map((item) => (
            <Fragment key={item.id}>
              <Divider />
              <ListItem
                sx={{
                  p: { xs: 1.5, sm: 2 },
                }}
              >
                <ListItemAvatar
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mr: 1.5,
                  }}
                >
                  <Box
                    display="inline-flex"
                    position="relative"
                  >
                    <Box
                      sx={{
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: (theme) =>
                            item.arrow ? theme.palette.error.main : theme.palette.success.main,
                        }}
                      >
                        {item.progress}%
                      </Typography>
                    </Box>
                    <CircularProgress
                      variant="determinate"
                      sx={{
                        color: (theme) => alpha(theme.palette.neutral[300], 0.3),
                      }}
                      size={56}
                      thickness={2}
                      value={100}
                    />
                    <CircularProgress
                      size={58}
                      sx={{
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: -1,
                        color: (theme) =>
                          item.arrow ? theme.palette.error.main : theme.palette.success.main,
                        top: -1,
                      }}
                      thickness={4}
                      variant="determinate"
                      value={item.progress}
                    />
                  </Box>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  disableTypography
                  primary={
                    <Link
                      href=""
                      onClick={(e) => e.preventDefault()}
                      underline="hover"
                      variant="h5"
                      noWrap
                    >
                      {item.username}
                    </Link>
                  }
                  secondary={
                    <>
                      <Box mt={0.6}>
                        <Chip
                          size="small"
                          variant="outlined"
                          sx={{
                            '.MuiChip-label': {
                              fontWeight: 600,
                            },
                          }}
                          label={item.orders}
                        />{' '}
                        {t('total orders')}
                      </Box>
                    </>
                  }
                  secondaryTypographyProps={{
                    variant: 'subtitle2',
                    noWrap: true,
                  }}
                />
                <Box
                  display="flex"
                  alignItems={{ xs: 'flex-end', sm: 'center' }}
                  justifyContent="center"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                >
                  <Typography variant="h5">${item.sales}</Typography>
                  {item.arrow ? (
                    <AvatarState
                      isSoft
                      state="error"
                      variant="rounded"
                      sx={{
                        ml: 1,
                        mt: { xs: 0.5, sm: 0 },
                        width: 28,
                        height: 28,
                      }}
                    >
                      <KeyboardArrowDownTwoToneIcon />
                    </AvatarState>
                  ) : (
                    <AvatarState
                      isSoft
                      state="success"
                      variant="rounded"
                      sx={{
                        ml: 1,
                        mt: { xs: 0.5, sm: 0 },
                        width: 28,
                        height: 28,
                      }}
                    >
                      <KeyboardArrowUpTwoToneIcon />
                    </AvatarState>
                  )}
                </Box>
              </ListItem>
            </Fragment>
          ))}
        </ListWrapper>
      </Box>
    </Card>
  );
}

export default Component;
