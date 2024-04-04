import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import MicNoneTwoToneIcon from '@mui/icons-material/MicNoneTwoTone';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TooltipLight } from 'src/components/base/styles/tooltips';

const CardCamera = styled(Card)({
  position: 'relative',

  '& > img': {
    width: '100%',
    height: '380px',
    display: 'block',
    position: 'relative',
    zIndex: 4,
  },
});

const CameraActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 5,
  padding: theme.spacing(3),
  background: `linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 95%,rgba(0,0,0,0.65) 100%)`,
}));

const TalkButton = styled(Button)({
  '.MuiButton-startIcon': {
    marginRight: 0,
    marginLeft: '-5px',
  },
});

const ButtonDark = styled(Button)(({ theme }) => ({
  background: 'rgba(0,0,0,.6)',
  color: theme.palette.common.white,
  fontSize: theme.typography.pxToRem(12),
  fontWeight: 'normal',
  whiteSpace: 'nowrap',
  height: '32px',
  padding: theme.spacing(0, 3),
  margin: theme.spacing(0, 1, 1, 0),

  '&:hover': {
    background: 'rgba(0,0,0,.75)',
  },
}));

const TypographyMain = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const TypographyShade = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.7),
}));

const Dot = styled(Box)(({ theme }) => ({
  background: theme.palette.error.main,
  borderRadius: '20px',
  width: '6px',
  height: '6px',
}));

const IconButtonDark = styled(IconButton)(({ theme }) => ({
  background: 'rgba(0,0,0,.6)',
  color: theme.palette.common.white,
  borderRadius: '50px',
  padding: theme.spacing(2),

  '&:hover': {
    background: 'rgba(0,0,0,.75)',
  },
}));

const CameraImage = styled('img')(({ theme }) => ({
  background: theme.palette.common.white,
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  height: 'auto',
  width: '160px',
  display: 'block',
}));

function VideoCameras() {
  const { t } = useTranslation();

  const locations = [
    {
      value: 'garden_camera',
      text: t('Garden camera'),
    },
    {
      value: 'gate_camera',
      text: t('Gate camera'),
    },
    {
      value: 'terrace_camera',
      text: t('Terrace camera'),
    },
  ];

  const [location, setLocation] = useState<string>(locations[0].text);
  const actionRef = useRef<any>(null);
  const [openLocation, setOpenMenuLocation] = useState<boolean>(false);

  return (
    <>
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <Typography variant="h4">{location}</Typography>
        </Box>
        <Button
          size="small"
          endIcon={<UnfoldMoreTwoToneIcon />}
          ref={actionRef}
          onClick={() => setOpenMenuLocation(true)}
          variant="contained"
        >
          {t('Select camera')}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={actionRef.current}
          onClose={() => setOpenMenuLocation(false)}
          open={openLocation}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
        >
          {locations.map((_location) => (
            <MenuItem
              key={_location.value}
              onClick={() => {
                setLocation(_location.text);
                setOpenMenuLocation(false);
              }}
            >
              {_location.text}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <CardCamera>
        <CameraActions
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            justifyContent="space-between"
          >
            <Box>
              <ButtonDark
                startIcon={<Dot />}
                size="small"
              >
                {t('LIVE')}
              </ButtonDark>
              <ButtonDark size="small">
                {t('Effects')}: {t('On')}
              </ButtonDark>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              sx={{
                maxWidth: 170,
              }}
            >
              <TypographyMain
                gutterBottom
                fontWeight={700}
                textAlign="center"
              >
                2249 Armory Road
              </TypographyMain>
              <TypographyShade
                sx={{
                  mb: 2,
                }}
                textAlign="center"
              >
                Mike Dwyer is ringing the doorbell
              </TypographyShade>
              <TooltipLight
                arrow
                placement="top"
                title={t('Unlock front door')}
              >
                <IconButtonDark>
                  <LockOpenTwoToneIcon />
                </IconButtonDark>
              </TooltipLight>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
            }}
            display="flex"
            alignSelf="flex-end"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <Box>
              <TalkButton
                variant="contained"
                size="small"
                color="warning"
                startIcon={<MicNoneTwoToneIcon />}
              >
                {t('Talk')}
              </TalkButton>
            </Box>
            <Box>
              <CameraImage src="/placeholders/fitness/3.png" />
            </Box>
          </Box>
        </CameraActions>
        <img
          src="/placeholders/covers/garden_camera.jpg"
          alt="..."
        />
      </CardCamera>
    </>
  );
}

export default VideoCameras;
