import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import { Box, Button, Card, Divider, Stack, Typography, useTheme } from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const generateRandomData = (): number[] =>
  Array.from({ length: 8 }, () => Math.floor(Math.random() * 500));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Box p={{ xs: 2, sm: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="stretch"
          spacing={0}
        >
          <Box
            p={2}
            display="flex"
            alignItems="flex-start"
          >
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
                variant="subtitle2"
                color="text.secondary"
              >
                {t('total value')}
              </Typography>
            </Box>
          </Box>
          <Box
            p={2}
            display="flex"
            alignItems="flex-start"
          >
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
                variant="subtitle2"
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
        p={{ xs: 2, sm: 3 }}
        sx={{
          textAlign: 'center',
          background: theme.palette.background.default,
        }}
      >
        <Button
          variant="contained"
          color="success"
          endIcon={<ArrowForwardTwoToneIcon />}
        >
          {t('View recent sales')}
        </Button>
      </Box>
      <Divider />
      <SparkLineChart
        plotType="line"
        height={160}
        curve="stepAfter"
        colors={[theme.palette.primary.main]}
        margin={{ top: 12, bottom: 12, left: 12, right: 12 }}
        data={generateRandomData()}
        sx={{
          '.MuiLineElement-root': {
            strokeWidth: 4,
            strokeLinecap: 'round',
            stroke: "url('#successGradient')",
            fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
          },
        }}
      >
        <defs>
          <linearGradient id="successGradient">
            <stop
              offset="0%"
              stopColor={theme.palette.error.main}
            />
            <stop
              offset="35%"
              stopColor={theme.palette.warning.main}
            />
            <stop
              offset="70%"
              stopColor={theme.palette.info.main}
            />
            <stop
              offset="100%"
              stopColor={theme.palette.success.main}
            />
          </linearGradient>
        </defs>
      </SparkLineChart>
    </Card>
  );
}

export default Component;
