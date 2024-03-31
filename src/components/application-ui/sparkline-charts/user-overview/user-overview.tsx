import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';
import { alpha, Avatar, Box, Card, Divider, IconButton, Typography, useTheme } from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const generateRandomData = (): number[] =>
  Array.from({ length: 8 }, () => Math.floor(Math.random() * 500));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        overflow: 'visible',
      }}
    >
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
          <Typography variant="h5">{t('Users overview')}</Typography>
        </Box>
        <IconButton
          size="small"
          color="primary"
        >
          <AddTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        px={{ xs: 2, sm: 3 }}
        pt={{ xs: 2, sm: 3 }}
        pb={1}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            fontWeight={500}
            color="text.secondary"
            variant="subtitle1"
          >
            {t('New accounts')}
          </Typography>
          <Typography
            sx={{
              py: 0.5,
            }}
            variant="h2"
            fontWeight={600}
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
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          <EmojiObjectsTwoToneIcon />
        </Avatar>
      </Box>
      <SparkLineChart
        plotType="line"
        height={220}
        curve="natural"
        colors={[theme.palette.success.main]}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        data={generateRandomData()}
        area
        sx={{
          '.MuiLineElement-root': {
            strokeWidth: 2,
          },

          '.MuiAreaElement-root': {
            fill: "url('#successGradient')",
            fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
          },
        }}
      >
        <defs>
          <linearGradient
            id="successGradient"
            gradientTransform="rotate(90)"
          >
            <stop
              offset="0%"
              stopColor={alpha(theme.palette.success.main, 0.4)}
            />
            <stop
              offset="100%"
              stopColor={alpha(theme.palette.success.main, 0.01)}
            />
          </linearGradient>
        </defs>
      </SparkLineChart>
    </Card>
  );
}

export default Component;
