import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import AvTimerTwoToneIcon from '@mui/icons-material/AvTimerTwoTone';
import LoopTwoToneIcon from '@mui/icons-material/LoopTwoTone';
import RemoveTwoToneIcon from '@mui/icons-material/RemoveTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  Stack,
  styled,
  Switch,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useTranslation } from 'react-i18next';

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.neutral[600], 0.2)
      : alpha(theme.palette.neutral[300], 0.2),
  color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
  padding: theme.spacing(2, 5),
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const AvatarPrimary = styled(Avatar)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: theme.spacing(6),
  height: theme.spacing(6),
}));

const BoxButtons = styled(Box)({
  position: 'absolute',
  width: '100%',
  left: 0,
  bottom: '20px',
  display: 'flex',
  justifyContent: 'center',
});

const BoxDegrees = styled(Box)({
  position: 'absolute',
  width: 270,
  bottom: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  zIndex: 4,

  sup: {
    margin: '2px 0 0 -3px',
  },
});

const IconButtonIncrement = styled(IconButton)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.neutral[800], 0.5)
      : theme.palette.background.default,
  color: theme.palette.mode === 'dark' ? theme.palette.neutral[400] : theme.palette.neutral[700],
  width: theme.spacing(5),
  height: theme.spacing(5),
  borderRadius: '50px',
  boxShadow: `0px 1px 3px ${alpha(theme.palette.common.black, 0.3)}, 0px 3px 8px 1px ${alpha(
    theme.palette.common.black,
    0.1
  )}`,
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(0, 15, 0),
  justifyContent: 'center',
  transition: theme.transitions.create(['all']),
  zIndex: 5,

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: `0px 1px 4px ${alpha(theme.palette.primary.main, 0.25)}, 0px 3px 12px 2px ${alpha(
      theme.palette.primary.main,
      0.35
    )}`,
  },
}));

function Thermostat() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [gauge, setGauge] = useState(70);

  const handleGaugeIncrease = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setGauge((gauge) => gauge + 2);
  };

  const handleGaugeDecrease = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setGauge((gauge) => gauge - 2);
  };

  return (
    <Card>
      <Box
        display="flex"
        justifyContent="space-between"
        p={{ xs: 2, sm: 3, md: 4 }}
        mb={2}
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <AvatarPrimary>
            <AcUnitTwoToneIcon />
          </AvatarPrimary>
          <Box pl={1.5}>
            <Typography variant="h5">{t('Thermostat')}</Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight={400}
            >
              {t('Set to auto-cooling')}
            </Typography>
          </Box>
        </Box>
        <Switch defaultChecked />
      </Box>
      <Box
        display="flex"
        position="relative"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Box width={260}>
          <CircularProgressbarWithChildren
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2.2 + 1 / 5.85,
              trailColor: alpha(theme.palette.common.white, 0.15),
              pathColor: theme.palette.common.white,
              strokeLinecap: 'round',
            })}
            strokeWidth={6}
            value={gauge}
          >
            <Box
              sx={{
                mt: '-30px',
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: theme.typography.pxToRem(13),
                  fontWeight: 700,
                }}
                variant="caption"
                color="text.secondary"
              >
                Cooling
              </Typography>
              <Typography
                sx={{
                  mt: '-8px',
                  fontSize: theme.typography.pxToRem(40),
                }}
                variant="h1"
                fontWeight={700}
              >
                24.5<sup>°</sup>
              </Typography>
              <Typography
                sx={{
                  fontSize: theme.typography.pxToRem(13),
                }}
                variant="caption"
                color="text.secondary"
              >
                under 5 minutes
              </Typography>
            </Box>
          </CircularProgressbarWithChildren>
        </Box>
        <BoxButtons>
          <IconButtonIncrement onClick={handleGaugeDecrease}>
            <RemoveTwoToneIcon />
          </IconButtonIncrement>
          <IconButtonIncrement onClick={handleGaugeIncrease}>
            <AddTwoToneIcon />
          </IconButtonIncrement>
          <BoxDegrees mx={-2}>
            <Typography
              variant="subtitle2"
              color="text.primary"
              fontWeight={700}
            >
              14 <sup>°</sup>
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.primary"
              fontWeight={700}
            >
              30 <sup>°</sup>
            </Typography>
          </BoxDegrees>
        </BoxButtons>
      </Box>
      <Stack
        my={{ xs: 2, sm: 3, md: 4 }}
        spacing={{ xs: 2, sm: 3 }}
        direction="row"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        divider={
          <Divider
            sx={{
              background: 'transparent',
            }}
            orientation="vertical"
            flexItem
          />
        }
      >
        <Box>
          <AvatarWrapper>
            <AirTwoToneIcon />
          </AvatarWrapper>
          <Typography
            variant="h5"
            noWrap
          >
            Fan Speed
          </Typography>
          <Typography
            variant="subtitle2"
            textAlign="center"
            noWrap
          >
            Off
          </Typography>
        </Box>
        <Box>
          <AvatarWrapper>
            <AvTimerTwoToneIcon />
          </AvatarWrapper>
          <Typography
            variant="h5"
            noWrap
          >
            Timer
          </Typography>
          <Typography
            variant="subtitle2"
            textAlign="center"
            noWrap
          >
            4 hours
          </Typography>
        </Box>
        <Box>
          <AvatarWrapper>
            <LoopTwoToneIcon />
          </AvatarWrapper>
          <Typography
            variant="h5"
            noWrap
          >
            Auto mode
          </Typography>
          <Typography
            variant="subtitle2"
            textAlign="center"
            noWrap
          >
            On
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default Thermostat;
