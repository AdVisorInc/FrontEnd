import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';

const CardHeaderActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1.5),
  top: theme.spacing(1.5),
  zIndex: 7,
}));

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
      username: 'Shanelle Wynn',
      jobTitle: t('UI Engineer, Apple Inc.'),
      avatar: '/avatars/1.png',
      value: 392,
    },
    {
      id: 2,
      username: 'Akeem Griffith',
      jobTitle: t('Manager, Google Inc.'),
      avatar: '/avatars/2.png',
      value: 584,
    },
    {
      id: 3,
      username: 'Abigayle Hicks',
      jobTitle: t('Project Manager, Spotify'),
      avatar: '/avatars/3.png',
      value: 695,
    },
    {
      id: 4,
      username: 'Reece Corbett',
      jobTitle: t('Senior Designer, Amazon Inc.'),
      avatar: '/avatars/4.png',
      value: 459,
    },
    {
      id: 5,
      username: 'Zain Baptista',
      jobTitle: t('Senior Accountant, Microsoft'),
      avatar: '/avatars/5.png',
      value: 396,
    },
  ];

  const xLabels = items.map((item) => item.username);
  const chartValues = items.map((item) => item.value);

  return (
    <Card
      sx={{
        position: 'relative',
      }}
    >
      <CardHeaderActions>
        <IconButton
          size="small"
          color="primary"
        >
          <MoreVertTwoToneIcon />
        </IconButton>
      </CardHeaderActions>
      <Box
        pt={3}
        px={3}
      >
        <Typography variant="h4">{t('Weekly Sales')}</Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          {t('Reports for what we sold this week')}.
        </Typography>
      </Box>
      <LineChart
        height={220}
        leftAxis={null}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        bottomAxis={null}
        slotProps={{ legend: { hidden: true } }}
        series={[
          {
            data: chartValues,
            label: 'Sales',
            area: true,
            color: theme.palette.primary.main,
            showMark: true,
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          '.MuiLineElement-root': {
            strokeWidth: 3,
          },
          '.MuiHighlightElement-root': {
            strokeWidth: 2,
            scale: '1.2',
            stroke: theme.palette.primary.main,
            fill: theme.palette.background.paper,
          },
          '.MuiAreaElement-root': {
            fill: "url('#primaryGradient')",
            fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
          },
        }}
      >
        <defs>
          <linearGradient
            id="primaryGradient"
            gradientTransform="rotate(90)"
          >
            <stop
              offset="0%"
              stopColor={theme.palette.primary.light}
            />
            <stop
              offset="100%"
              stopColor={theme.palette.background.paper}
            />
          </linearGradient>
        </defs>
      </LineChart>
      <Box
        sx={{
          height: 300,
        }}
      >
        <Scrollbar>
          <ListWrapper disablePadding>
            {items.map((item) => (
              <Fragment key={item.id}>
                <Divider />
                <ListItem
                  sx={{
                    py: { xs: 1, md: 2 },
                    px: { xs: 1.5, md: 2.5 },
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      mr: 0,
                    }}
                  >
                    <Avatar
                      alt={item.username}
                      src={item.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ pr: 1 }}
                    primary={item.username}
                    primaryTypographyProps={{
                      variant: 'h5',
                      noWrap: true,
                    }}
                    secondary={item.jobTitle}
                    secondaryTypographyProps={{
                      variant: 'subtitle2',
                      noWrap: true,
                    }}
                  />
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    {t('View')}
                  </Button>
                </ListItem>
              </Fragment>
            ))}
          </ListWrapper>
        </Scrollbar>
      </Box>
      <Divider />
      <CardActions
        sx={{
          justifyContent: 'center',
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowForwardTwoToneIcon />}
          size="small"
        >
          {t('View all employees')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Component;
