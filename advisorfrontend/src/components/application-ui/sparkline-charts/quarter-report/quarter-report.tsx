import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const generateRandomData = (): number[] =>
  Array.from({ length: 8 }, () => Math.floor(Math.random() * 500));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            gutterBottom
            variant="caption"
            fontWeight={600}
            color="text.secondary"
          >
            {t('Statistics')}
          </Typography>
          <Typography variant="h5">{t('Last quarter report')}</Typography>
        </Box>
        <IconButton size="small">
          <MoreHorizTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Stack
        sx={{
          mt: 3,
        }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        spacing={0}
      >
        <Box
          py={1}
          px={4}
          sx={{
            textAlign: 'center',
          }}
        >
          <MonetizationOnTwoToneIcon
            sx={{
              color: 'info.main',
            }}
            fontSize="large"
          />
          <Typography variant="h3">$9,658</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('revenue')}
          </Typography>
        </Box>
        <Box
          py={1}
          px={4}
          sx={{
            textAlign: 'center',
          }}
        >
          <PersonTwoToneIcon
            sx={{
              color: 'error.main',
            }}
            fontSize="large"
          />
          <Typography variant="h3">23,594</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('users')}
          </Typography>
        </Box>
      </Stack>
      <SparkLineChart
        plotType="line"
        height={160}
        curve="step"
        showHighlight
        showTooltip
        colors={[theme.palette.warning.main]}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        data={generateRandomData()}
        area
        sx={{
          '.MuiLineElement-root': {
            strokeWidth: 3,
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
              stopColor={alpha(theme.palette.warning.main, 0.8)}
            />
            <stop
              offset="20%"
              stopColor={alpha(theme.palette.warning.main, 0.4)}
            />
            <stop
              offset="100%"
              stopColor={alpha(theme.palette.warning.main, 0)}
            />
          </linearGradient>
        </defs>
      </SparkLineChart>
      <Box
        sx={{
          textAlign: 'center',
          pb: 2,
          pt: 1,
        }}
      >
        <Button
          variant="outlined"
          color="warning"
          sx={{
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
          }}
          endIcon={<ChevronRightTwoToneIcon />}
        >
          {t('View complete report')}
        </Button>
      </Box>
    </Card>
  );
}

export default Component;
