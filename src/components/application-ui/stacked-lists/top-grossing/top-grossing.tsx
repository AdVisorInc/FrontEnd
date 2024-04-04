import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CircularProgress,
  circularProgressClasses,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1.5),
  top: theme.spacing(1.5),
  zIndex: 7,
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      username: 'Shanelle Wynn',
      jobTitle: t('UI Engineer, Apple Inc.'),
      progress: 76,
      arrow: '',
      value: '1,285',
    },
    {
      id: 2,
      username: 'Akeem Griffith',
      jobTitle: t('Manager, Google Inc.'),
      progress: 48,
      arrow: 'up',
      value: '2,685',
    },
    {
      id: 3,
      username: 'Abigayle Hicks',
      jobTitle: t('Project Manager, Spotify'),
      progress: 38,
      arrow: '',
      value: '1,865',
    },
    {
      id: 4,
      username: 'Reece Corbett',
      jobTitle: t('Senior Designer, Amazon Inc.'),
      progress: 85,
      arrow: '',
      value: '2,548',
    },
    {
      id: 5,
      username: 'Zain Baptista',
      jobTitle: t('Senior Accountant, Microsoft'),
      progress: 29,
      arrow: 'up',
      value: '1,584',
    },
  ];

  const chartValues = items.map((item) => parseFloat(item.value.replace(/,/g, '')));
  const xLabels = items.map((item) => item.username);

  return (
    <Card
      sx={{
        position: 'relative',
      }}
    >
      <CardActions>
        <Tooltip
          arrow
          placement="top"
          title={t('Add new product')}
        >
          <ButtonIcon
            variant="contained"
            color="secondary"
          >
            <AddCircleTwoToneIcon fontSize="small" />
          </ButtonIcon>
        </Tooltip>
      </CardActions>
      <Box
        pt={3}
        pb={2}
        px={3}
      >
        <Typography
          variant="h4"
          sx={{
            pb: 3,
          }}
        >
          {t('Top Grossing Products')}
        </Typography>
        <Typography
          fontWeight={600}
          gutterBottom
          color="text.secondary"
          variant="h5"
        >
          {t('Monthly sales')}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
        >
          <FiberManualRecordTwoToneIcon
            sx={{
              color: 'warning.main',
            }}
          />
          <Typography
            sx={{
              px: 0.5,
            }}
            variant="h1"
          >
            $8,489
          </Typography>
          <Typography
            component="span"
            color="success.main"
            fontWeight={600}
          >
            +54
          </Typography>
        </Box>
      </Box>
      <LineChart
        height={175}
        leftAxis={null}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        bottomAxis={null}
        slotProps={{ legend: { hidden: true } }}
        series={[
          {
            data: chartValues,
            label: 'Sales',
            area: true,
            color: theme.palette.warning.main,
            showMark: false,
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
            stroke: theme.palette.warning.main,
            fill: theme.palette.background.paper,
          },
          '.MuiAreaElement-root': {
            fill: "url('#warningGradient')",
            fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
          },
        }}
      >
        <defs>
          <linearGradient
            id="warningGradient"
            gradientTransform="rotate(90)"
          >
            <stop
              offset="0%"
              stopColor={theme.palette.warning.light}
            />
            <stop
              offset="100%"
              stopColor={theme.palette.background.paper}
            />
          </linearGradient>
        </defs>
      </LineChart>
      <Typography
        fontWeight={700}
        sx={{
          py: 1,
          px: 2,
          fontSize: theme.typography.pxToRem(13),
        }}
        component="h6"
        variant="caption"
      >
        {t('Top Sellers')}
      </Typography>
      <Box
        sx={{
          height: 279,
        }}
      >
        <Scrollbar>
          <List disablePadding>
            {items.map((item) => (
              <Fragment key={item.id}>
                <Divider />
                <ListItem
                  sx={{
                    py: 2,
                    px: 2.5,
                  }}
                >
                  <ListItemAvatar
                    sx={{
                      display: 'flex',
                      mr: 0.5,
                    }}
                  >
                    <Box
                      display="inline-flex"
                      position="relative"
                    >
                      <CircularProgress
                        variant="determinate"
                        sx={{
                          color: (theme) => alpha(theme.palette.common.black, 0.1),
                        }}
                        size={46}
                        thickness={2}
                        value={100}
                      />
                      <CircularProgress
                        size={48}
                        sx={{
                          animationDuration: '550ms',
                          position: 'absolute',
                          left: -1,
                          top: -1,
                          [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                          },
                        }}
                        thickness={4}
                        variant="determinate"
                        value={item.progress}
                      />
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
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
                  <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    spacing={1}
                    alignItems={{ xs: 'flex-end', md: 'center' }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={500}
                    >
                      ${item.value}
                    </Typography>
                    {item.arrow ? (
                      <AvatarState
                        isSoft
                        state="error"
                        variant="rounded"
                        sx={{
                          width: 28,
                          height: 28,
                        }}
                      >
                        <KeyboardArrowDownTwoToneIcon />
                      </AvatarState>
                    ) : (
                      <AvatarState
                        isSoft
                        variant="rounded"
                        state="success"
                        sx={{
                          width: 28,
                          height: 28,
                        }}
                      >
                        <KeyboardArrowUpTwoToneIcon />
                      </AvatarState>
                    )}
                  </Stack>
                </ListItem>
              </Fragment>
            ))}
          </List>
        </Scrollbar>
      </Box>
      <Divider />
      <Box
        p={1.5}
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowForwardTwoToneIcon />}
        >
          {t('All products')}
        </Button>
      </Box>
    </Card>
  );
}

export default Component;
