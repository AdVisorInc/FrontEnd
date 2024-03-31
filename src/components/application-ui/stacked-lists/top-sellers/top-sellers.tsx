import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  CircularProgress,
  circularProgressClasses,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      username: 'Shanelle Wynn',
      sales: '87',
      progress: 76,
      arrow: '',
      value: '685',
    },
    {
      id: 2,
      username: 'Akeem Griffith',
      sales: '36',
      progress: 48,
      arrow: 'up',
      value: '3,685',
    },
    {
      id: 3,
      username: 'Abigayle Hicks',
      sales: '23',
      progress: 38,
      arrow: '',
      value: '765',
    },
    {
      id: 4,
      username: 'Reece Corbett',
      sales: '76',
      progress: 85,
      arrow: '',
      value: '43,548',
    },
    {
      id: 5,
      username: 'Zain Baptista',
      sales: '38',
      progress: 29,
      arrow: 'up',
      value: '1,584',
    },
  ];

  const xLabels = items.map((item) => item.username);
  const salesData = items.map((item) => parseInt(item.sales));
  const progressData = items.map((item) => item.progress);
  const formatTooltip = (value) => `${value}%`;

  return (
    <Card>
      <CardHeader
        sx={{
          p: 2,
        }}
        action={
          <Button
            size="small"
            variant="text"
          >
            {'View all'}
          </Button>
        }
        title={t('Top sellers')}
      />
      <Divider />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Box
          p={{ xs: 2, sm: 3 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              fontWeight={600}
              variant="caption"
            >
              {t('New accounts')}
            </Typography>
            <Typography
              variant="h2"
              fontWeight={700}
            >
              $8,489
            </Typography>
            <Box
              display="flex"
              alignItems="center"
            >
              <ArrowUpwardTwoToneIcon
                sx={{
                  color: 'error.main',
                }}
                fontSize="small"
              />
              <Typography
                sx={{
                  pl: 0.2,
                }}
                variant="subtitle2"
                color="text.secondary"
              >
                <Typography
                  component="span"
                  color="success.main"
                >
                  15.4%
                </Typography>{' '}
                {t('increase this month')}
              </Typography>
            </Box>
          </Box>
          <Avatar
            sx={{
              width: 54,
              height: 54,
              background: theme.palette.common.white,
              color: theme.palette.primary.main,
            }}
          >
            <EmojiObjectsTwoToneIcon />
          </Avatar>
        </Box>
        <Box px={2}>
          <BarChart
            height={160}
            leftAxis={null}
            slotProps={{ legend: { hidden: true } }}
            bottomAxis={null}
            margin={{ top: 0, bottom: 12, left: 0, right: 0 }}
            xAxis={[
              {
                scaleType: 'band',
                data: xLabels,
              },
            ]}
            series={[
              {
                data: salesData,
                label: 'Total sales',
                color: theme.palette.primary.main,
              },
              {
                data: progressData,
                color: theme.palette.primary.light,
                label: 'Sales target',
                valueFormatter: formatTooltip,
              },
            ]}
            sx={{
              '.MuiBarElement-root': {
                fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                rx: theme.shape.borderRadius,
              },
            }}
          />
        </Box>
      </Box>
      <Divider />
      <Typography
        sx={{
          px: 2,
          pt: 2,
          pb: 1,
        }}
        component="div"
        fontWeight={700}
        variant="caption"
      >
        {t('Top Sellers')}
      </Typography>
      <Box
        sx={{
          height: 270,
          overflowY: 'auto',
        }}
      >
        <List disablePadding>
          {items.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                py: 1.5,
                px: 2,
              }}
            >
              <ListItemAvatar
                sx={{
                  display: { xs: 'none', md: 'flex' },
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
                      left: 11,
                      top: 11,
                    }}
                  >
                    {item.arrow ? (
                      <Avatar
                        sx={{
                          width: 34,
                          height: 34,
                          p: 0,
                          background: alpha(theme.palette.error.main, 0.1),
                          color: theme.palette.error.main,
                        }}
                      >
                        <ArrowDownwardTwoToneIcon fontSize="small" />
                      </Avatar>
                    ) : (
                      <Avatar
                        sx={{
                          width: 34,
                          height: 34,
                          p: 0,
                          background: alpha(theme.palette.success.main, 0.1),
                          color: theme.palette.success.main,
                        }}
                      >
                        <ArrowUpwardTwoToneIcon fontSize="small" />
                      </Avatar>
                    )}
                  </Box>
                  <CircularProgress
                    variant="determinate"
                    sx={{
                      color: (theme) =>
                        item.arrow
                          ? alpha(theme.palette.error.main, 0.1)
                          : alpha(theme.palette.success.main, 0.2),
                    }}
                    size={56}
                    thickness={3}
                    value={100}
                  />
                  <CircularProgress
                    size={56}
                    sx={{
                      animationDuration: '550ms',
                      position: 'absolute',
                      left: 0,
                      color: (theme) =>
                        item.arrow ? theme.palette.error.main : theme.palette.success.main,
                      top: 0,
                      [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                      },
                    }}
                    thickness={3}
                    variant="determinate"
                    value={item.progress}
                  />
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link
                    color="inherit"
                    href=""
                    onClick={(e) => e.preventDefault()}
                    variant="h5"
                  >
                    {item.username}
                  </Link>
                }
                primaryTypographyProps={{
                  variant: 'h6',
                  noWrap: true,
                }}
                secondary={
                  <>
                    <Box mt={0.5}>
                      <Chip
                        size="small"
                        label={item.sales}
                        color="secondary"
                      />{' '}
                      {t('confirmed sales')}
                    </Box>
                  </>
                }
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  noWrap: true,
                }}
              />
              <Typography variant="h5">${item.value}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
}

export default Component;
