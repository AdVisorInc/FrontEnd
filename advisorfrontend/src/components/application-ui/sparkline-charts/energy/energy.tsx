import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { alpha, Box, Card, IconButton, styled, Tooltip, Typography, useTheme } from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const EnergyBox = styled(Box)(() => ({
  height: 120,
  position: 'relative',

  img: {
    position: 'absolute',
    width: '110px',
    height: '110px',
    left: '50%',
    top: '50%',
    margin: '-100px 0 0 -55px',
    zIndex: 5,
  },
}));

const generateRandomData = (): number[] =>
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 500));

function EnergySaving() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Box
        mb={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4">{t('Energy')}</Typography>
        <Tooltip
          placement="top"
          title={t('Add new scene')}
          arrow
        >
          <ButtonIcon
            size="small"
            variant="outlined"
            color="secondary"
          >
            <KeyboardArrowRightTwoToneIcon fontSize="small" />
          </ButtonIcon>
        </Tooltip>
      </Box>
      <Card
        sx={{
          overflow: 'visible',
          background: `linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)`,
          color: 'common.white',
          position: 'relative',
        }}
      >
        <IconButton
          size="small"
          sx={{
            color: 'common.white',
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(1),
          }}
        >
          <MoreHorizTwoToneIcon />
        </IconButton>
        <Box
          sx={{
            px: { xs: 2, sm: 3 },
            pt: { xs: 2, sm: 3 },
          }}
        >
          <Typography variant="h5">{t('2022 Energy Status')}</Typography>
          <Typography
            noWrap
            variant="h1"
          >
            87.4 <small>kW h</small>
          </Typography>
        </Box>
        <EnergyBox>
          <Box
            sx={{
              position: 'relative',
              zIndex: 7,
            }}
          >
            <SparkLineChart
              plotType="line"
              height={120}
              colors={[alpha(theme.palette.common.white, 0.6)]}
              showHighlight
              margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
              data={generateRandomData()}
              area
              sx={{
                '.MuiLineElement-root': {
                  strokeWidth: 1,
                },

                '.MuiAreaElement-root': {
                  fill: "url('#alphaWhiteGradient')",
                  fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                },
              }}
            >
              <defs>
                <linearGradient
                  id="alphaWhiteGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop
                    offset="0%"
                    stopColor={alpha(theme.palette.common.white, 0.4)}
                  />
                  <stop
                    offset="100%"
                    stopColor={alpha(theme.palette.common.white, 0.01)}
                  />
                </linearGradient>
              </defs>
            </SparkLineChart>
          </Box>
          <img
            src="/placeholders/illustrations/pressure-high.svg"
            alt="Partly cloudy"
          />
        </EnergyBox>
      </Card>
    </>
  );
}

export default EnergySaving;
