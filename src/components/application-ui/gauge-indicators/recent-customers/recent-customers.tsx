import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import {
  alpha,
  Box,
  Card,
  CardHeader,
  CircularProgress,
  circularProgressClasses,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';

const ListWrapper = styled(List)(() => ({
  '.MuiDivider-root:first-of-type': {
    display: 'none',
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      username: 'Lilly-Mae White',
      jobTitle: t('UI Engineer, Apple Inc.'),
      progress: 46,
      arrow: '',
      sales: '685',
    },
    {
      id: 2,
      username: 'Latisha Allison',
      jobTitle: t('Frontend Engineer'),
      progress: 59,
      arrow: 'up',
      sales: '3,685',
    },
    {
      id: 3,
      username: 'Shanelle Wynn',
      jobTitle: t('UX Designer'),
      progress: 87,
      arrow: '',
      sales: '765',
    },
    {
      id: 4,
      username: 'Julie Prosser',
      jobTitle: t('Frontend Engineer'),
      progress: 34,
      arrow: '',
      sales: '43,548',
    },
    {
      id: 5,
      username: 'Amin Hamer',
      jobTitle: t('Senior Project Manager'),
      progress: 20,
      arrow: 'up',
      sales: '1,584',
    },
    {
      id: 6,
      username: 'Julie Prosser',
      jobTitle: 274,
      progress: 64,
      arrow: 'up',
      sales: '1,584',
    },
  ];

  return (
    <Card>
      <CardHeader
        title={t('Employees')}
        subheader={t('These are the latest employees that have been added to the system')}
        titleTypographyProps={{
          variant: 'h5',
          fontWeight: 600,
          noWrap: true,
        }}
      />
      <Divider />
      <Box
        sx={{
          height: 410,
        }}
      >
        <Scrollbar>
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
                      mr: 1,
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
                          }}
                          variant="body2"
                          color="primary.main"
                        >
                          {item.progress}%
                        </Typography>
                      </Box>
                      <CircularProgress
                        variant="determinate"
                        sx={{
                          color: (theme) => alpha(theme.palette.neutral[500], 0.3),
                        }}
                        size={56}
                        thickness={2}
                        value={100}
                      />
                      <CircularProgress
                        size={56}
                        sx={{
                          animationDuration: '550ms',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                          },
                        }}
                        thickness={2}
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
                    primary={
                      <Link
                        href=""
                        onClick={(e) => e.preventDefault()}
                        color="text.primary"
                        underline="none"
                        noWrap
                        sx={{
                          '&:hover': {
                            color: theme.palette.primary.main,
                          },
                        }}
                        variant="subtitle1"
                        fontWeight={600}
                      >
                        {item.username}
                      </Link>
                    }
                    secondary={
                      <>
                        <Typography
                          noWrap
                          variant="subtitle2"
                        >
                          {item.jobTitle}
                        </Typography>
                      </>
                    }
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      noWrap: true,
                    }}
                  />
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <Typography
                      sx={{ display: { xs: 'none', sm: 'flex' } }}
                      variant="h5"
                    >
                      ${item.sales}
                    </Typography>
                    {item.arrow ? (
                      <Typography
                        sx={{
                          display: 'flex',
                          ml: 0.2,
                          color: theme.palette.error.main,
                        }}
                      >
                        <KeyboardArrowDownTwoToneIcon />
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          display: 'flex',
                          ml: 0.2,
                          color: theme.palette.success.main,
                        }}
                      >
                        <KeyboardArrowUpTwoToneIcon />
                      </Typography>
                    )}
                  </Box>
                </ListItem>
              </Fragment>
            ))}
          </ListWrapper>
        </Scrollbar>
      </Box>
    </Card>
  );
}

export default Component;
