import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import LoopTwoToneIcon from '@mui/icons-material/LoopTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import PointOfSaleTwoToneIcon from '@mui/icons-material/PointOfSaleTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const generateRandomData = (): number[] =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000));
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  return (
    <Card
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
      }}
    >
      <Box pt={{ xs: 2, sm: 3 }}>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            textTransform: 'uppercase',
          }}
        >
          {t('Inventory')}
        </Typography>
      </Box>
      <Card
        variant="outlined"
        elevation={0}
        sx={{
          textAlign: 'center',
          m: { xs: 2, sm: 3 },
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-evenly"
          alignItems="stretch"
          divider={
            <Divider
              orientation={smUp ? 'vertical' : 'horizontal'}
              flexItem
            />
          }
          spacing={0}
        >
          <Box
            href=""
            onClick={(e) => e.preventDefault()}
            component={Link}
            flex={1}
            sx={{
              position: 'relative',
              '&:hover': {
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[25], 0.02)
                    : 'neutral.25',
              },
              color: 'text.primary',
            }}
            py={4}
            px={2}
            display="flex"
            alignItems="flex-start"
          >
            <ArrowOutwardRoundedIcon
              sx={{
                color: 'primary.main',
                position: 'absolute',
                top: theme.spacing(2),
                right: theme.spacing(2),
              }}
            />
            <PointOfSaleTwoToneIcon
              sx={{
                color: 'primary.main',
              }}
              fontSize="large"
            />
            <Box ml={1}>
              <Typography variant="h3">$14,264</Typography>
              <Typography
                noWrap
                variant="subtitle1"
              >
                {t('total value')}
              </Typography>
            </Box>
          </Box>
          <Box
            href=""
            onClick={(e) => e.preventDefault()}
            component={Link}
            flex={1}
            sx={{
              position: 'relative',
              '&:hover': {
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[25], 0.02)
                    : 'neutral.25',
              },
              color: 'text.primary',
            }}
            py={4}
            px={2}
            display="flex"
            alignItems="flex-start"
          >
            <ArrowOutwardRoundedIcon
              sx={{
                color: 'primary.main',
                position: 'absolute',
                top: theme.spacing(2),
                right: theme.spacing(2),
              }}
            />
            <PersonTwoToneIcon
              sx={{
                color: 'error.main',
              }}
              fontSize="large"
            />
            <Box ml={1}>
              <Typography variant="h3">6,598</Typography>
              <Typography
                noWrap
                variant="subtitle1"
                color="text.secondary"
              >
                {t('new members')}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Card>
      <Box>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            textTransform: 'uppercase',
          }}
        >
          {t('Activity')}
        </Typography>
      </Box>
      <Box
        py={1.5}
        px={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
      >
        <Box>
          <Tooltip
            arrow
            title="Remy Sharp"
          >
            <Avatar
              sx={{
                width: 46,
                height: 46,
              }}
              component={Link}
              href=""
              onClick={(e) => e.preventDefault()}
              alt="Remy Sharp"
              src="/avatars/1.png"
            />
          </Tooltip>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 2,
          }}
        >
          <LinearProgressSlim
            color="error"
            variant="determinate"
            value={34}
          />
        </Box>
        <Box>
          <Typography
            variant="h4"
            color="error.main"
          >
            $2,835
          </Typography>
        </Box>
      </Box>
      <Box
        py={1.5}
        px={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
      >
        <Box>
          <Tooltip
            arrow
            title="Cindy Baker"
          >
            <Avatar
              component={Link}
              sx={{
                width: 46,
                height: 46,
              }}
              href=""
              onClick={(e) => e.preventDefault()}
              alt="Cindy Baker"
              src="/avatars/3.png"
            />
          </Tooltip>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 2,
          }}
        >
          <LinearProgressSlim
            color="success"
            variant="determinate"
            value={34}
          />
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.success.main,
            }}
          >
            $5,542
          </Typography>
        </Box>
      </Box>
      <Box
        py={1.5}
        px={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
      >
        <Box>
          <Tooltip
            arrow
            title="Travis Howard"
          >
            <Avatar
              sx={{
                width: 46,
                height: 46,
              }}
              component={Link}
              href=""
              onClick={(e) => e.preventDefault()}
              alt="Travis Howard"
              src="/avatars/2.png"
            />
          </Tooltip>
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 2,
          }}
        >
          <LinearProgressSlim
            color="info"
            variant="determinate"
            value={72}
          />
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.info.main,
            }}
          >
            $1,375
          </Typography>
        </Box>
      </Box>
      <LineChart
        height={230}
        leftAxis={null}
        margin={{ top: 6, bottom: 0, left: 0, right: 0 }}
        bottomAxis={null}
        slotProps={{ legend: { hidden: true } }}
        series={[
          {
            data: generateRandomData(),
            label: 'Total sales',
            area: true,
            color: theme.palette.primary.main,
            showMark: false,
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          '.MuiLineElement-root': {
            strokeWidth: 3,
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
              stopColor={
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.primary.main, 0.2)
                  : alpha(theme.palette.primary.main, 0.5)
              }
            />
            <stop
              offset="100%"
              stopColor={
                theme.palette.mode === 'dark'
                  ? theme.palette.neutral[900]
                  : theme.palette.neutral[25]
              }
            />
          </linearGradient>
        </defs>
      </LineChart>
      <Box
        p={1}
        sx={{
          textAlign: 'center',
        }}
      >
        <Tooltip
          placement="top"
          arrow
          title={t('Refresh view')}
        >
          <IconButton color="error">
            <LoopTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
}

export default Component;
