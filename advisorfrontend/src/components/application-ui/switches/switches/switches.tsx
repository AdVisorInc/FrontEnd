import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';
import RouterTwoToneIcon from '@mui/icons-material/RouterTwoTone';
import SmartButtonTwoToneIcon from '@mui/icons-material/SmartButtonTwoTone';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import WashTwoToneIcon from '@mui/icons-material/WashTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Unstable_Grid2 as Grid,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'src/hooks/use-auth';

const CardAddAction = styled(Card)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: '100%',

  '.MuiCardActionArea-root': {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 'inherit',
    border: `${theme.palette.primary.main} dashed 2px`,

    '&:hover': {
      borderColor: theme.palette.primary.dark,
    },
  },

  '.MuiTouchRipple-root': {
    opacity: 0.1,
  },
}));

const AvatarAddWrapper = styled(Avatar)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.primary.main,
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

const CardDevice = styled(Card)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: '100%',

  '&.Mui-active': {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: `0px 1px 4px ${alpha(theme.palette.primary.main, 0.25)}, 0px 3px 12px 2px ${alpha(
      theme.palette.primary.main,
      0.35
    )}`,

    '.MuiCardActionArea-root': {
      '.MuiSvgIcon-root, .MuiSwitch-root .MuiSwitch-switchBase.Mui-checked, .MuiTypography-root, .MuiTypography-caption':
        {
          color: theme.palette.common.white,
        },

      '.MuiSwitch-root .MuiSwitch-switchBase': {
        '.MuiSwitch-thumb': {
          backgroundColor: theme.palette.common.white,
        },

        '& + .MuiSwitch-track': {
          backgroundColor: alpha(theme.palette.common.white, 0.3),
        },
      },
    },
  },

  '.MuiCardActionArea-root': {
    padding: theme.spacing(2, 3),
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    border: 'transparent solid 1px',
    borderRadius: 'inherit',

    '.MuiTypography-root': {
      color: alpha(theme.palette.text.primary, 0.5),
    },

    '.MuiTypography-caption': {
      color: theme.palette.text.primary,
    },

    '.MuiSwitch-root': {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(2),
    },

    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
  },

  '.MuiTouchRipple-root': {
    opacity: 0.1,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  color: theme.palette.primary.main,
  marginLeft: '-7px',
}));

interface Device {
  id: string;
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
}

function Component() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const actionRef = useRef<any>(null);

  const [openLocation, setOpenMenuLocation] = useState<boolean>(false);
  const [selectedDevices, setSelectedDevices] = useState<Set<string>>(new Set());

  const devices: Device[] = [
    {
      id: 'lightbulb',
      name: t('Main lights'),
      icon: <LightbulbTwoToneIcon fontSize="large" />,
      isActive: false,
    },
    {
      id: 'kitchen',
      name: t('Refrigerator'),
      icon: <KitchenIcon fontSize="large" />,
      isActive: true,
    },
    {
      id: 'router',
      name: t('Router'),
      icon: <RouterTwoToneIcon fontSize="large" />,
      isActive: false,
    },
    {
      id: 'washing',
      name: t('LG Washing'),
      icon: <WashTwoToneIcon fontSize="large" />,
      isActive: false,
    },
    {
      id: 'ac',
      name: t('Samsung AC'),
      icon: <SmartButtonTwoToneIcon fontSize="large" />,
      isActive: false,
    },
  ];

  const handleDeviceClick = (id: string) => {
    setSelectedDevices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const locations = [
    {
      value: 'all',
      text: user ? user.name + t("'s Home") : t('Home'),
    },
    {
      value: 'living_room',
      text: t('Living room'),
    },
    {
      value: 'garden_shed',
      text: t('Garden shed'),
    },
    {
      value: 'master_bedroom',
      text: t('Master bedroom'),
    },
  ];
  const [location, setLocation] = useState<string>(locations[0].text);

  return (
    <Box>
      <Box
        mb={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <Typography variant="h4">{location}</Typography>
          <IconButton
            size="small"
            sx={{
              ml: 1,
            }}
            color="primary"
            ref={actionRef}
            onClick={() => setOpenMenuLocation(true)}
          >
            <UnfoldMoreTwoToneIcon />
          </IconButton>
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
        <Button
          size="small"
          variant="contained"
        >
          {t('Add room')}
        </Button>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        {devices.map((device) => (
          <Grid
            key={device.id}
            xs={12}
            xl={3}
            md={4}
            sm={6}
          >
            <CardDevice className={selectedDevices.has(device.id) ? 'Mui-active' : ''}>
              <CardActionArea onClick={() => handleDeviceClick(device.id)}>
                <Switch
                  edge="end"
                  checked={selectedDevices.has(device.id)}
                  color="primary"
                />
                <Typography
                  fontWeight={700}
                  variant="caption"
                  color="primary"
                >
                  {selectedDevices.has(device.id) ? t('on') : t('off')}
                </Typography>
                <IconWrapper>{device.icon}</IconWrapper>
                <Typography
                  variant="h5"
                  noWrap
                >
                  {device.name}
                </Typography>
              </CardActionArea>
            </CardDevice>
          </Grid>
        ))}
        <Grid
          xs={12}
          xl={3}
          md={4}
          sm={6}
        >
          <Tooltip
            placement="right"
            arrow
            title={t('Pair new device')}
          >
            <CardAddAction>
              <CardActionArea
                sx={{
                  px: 1,
                }}
              >
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Component;
