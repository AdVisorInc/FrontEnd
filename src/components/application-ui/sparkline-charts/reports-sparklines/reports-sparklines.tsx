import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import PieChartTwoToneIcon from '@mui/icons-material/PieChartTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Divider,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const generateRandomData = (): number[] =>
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Card>
      <Box>
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
            <MonetizationOnTwoToneIcon
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
      </Box>
      <Divider />
      <Box
        p={2}
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          variant="outlined"
          startIcon={<PieChartTwoToneIcon />}
        >
          {t('Generate reports')}
        </Button>
      </Box>
      <Divider />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <SparkLineChart
          data={generateRandomData()}
          height={120}
          showTooltip
          curve="linear"
          margin={{ top: 12, bottom: 12, left: 0, right: 0 }}
          xAxis={{
            scaleType: 'band',
            data: [
              new Date(2013, 0, 1),
              new Date(2014, 0, 1),
              new Date(2015, 0, 1),
              new Date(2016, 0, 1),
              new Date(2017, 0, 1),
              new Date(2018, 0, 1),
              new Date(2019, 0, 1),
              new Date(2020, 0, 1),
              new Date(2021, 0, 1),
              new Date(2022, 0, 1),
              new Date(2023, 0, 1),
              new Date(2024, 0, 1),
            ],
            valueFormatter: (value) => value.getFullYear(),
          }}
          colors={[theme.palette.info.main]}
          sx={{ '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' } }}
        />
      </Box>
    </Card>
  );
}

export default Component;
