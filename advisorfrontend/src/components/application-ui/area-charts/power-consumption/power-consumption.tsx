import ElectricalServicesTwoToneIcon from '@mui/icons-material/ElectricalServicesTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  Box,
  Button,
  Card,
  Container,
  Menu,
  MenuItem,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyStateImageTitle from 'src/components/application-ui/empty-states/image-title/image-title';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const timeData = [
  new Date(2023, 7, 31),
  new Date(2023, 7, 31, 12),
  new Date(2023, 8, 1),
  new Date(2023, 8, 1, 12),
  new Date(2023, 8, 2),
  new Date(2023, 8, 2, 12),
  new Date(2023, 8, 3),
  new Date(2023, 8, 3, 12),
  new Date(2023, 8, 4),
];

const y1 = [5, 5, 10, 90, 85, 70, 30, 25, 25];
const y2 = [90, 85, 70, 25, 23, 40, 45, 40, 50];

const valueFormatter = (date: Date) =>
  date.getHours() === 0
    ? date.toLocaleDateString('fr-FR', {
        month: '2-digit',
        day: '2-digit',
      })
    : date.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
      });

const xAxisCommon = {
  data: timeData,
  scaleType: 'time',
  valueFormatter,
} as const;

const ElectricalServicesTwoToneIconWrapper = styled(ElectricalServicesTwoToneIcon)(({ theme }) => ({
  color: theme.palette.warning.main,
  marginRight: theme.spacing(1),
}));

function PowerConsumption() {
  const { t } = useTranslation();
  const theme = useTheme();

  const config = {
    series: [
      {
        data: y2,
        stack: 'total',
        color: theme.palette.primary.main,
        showMark: false,
        area: true,
      },
      {
        data: y1,

        color: theme.palette.primary.light,
        showMark: false,
        area: true,
        stack: 'total',
      },
    ],
    height: 341,
    topAxis: 'half days',
    leftAxis: null,
    sx: {
      '.MuiLineElement-root': {
        strokeWidth: 3,
        strokeOpacity: theme.palette.mode === 'dark' ? 0.8 : 1,

        '&:nth-of-type(1)': {
          stroke: theme.palette.primary.dark,
        },
        '&:nth-of-type(2)': {
          stroke: theme.palette.primary.main,
        },
      },
      '.MuiAreaElement-root': {
        fillOpacity: theme.palette.mode === 'dark' ? 0.1 : 1,
      },
    },

    margin: { top: 24, bottom: 36, left: 24, right: 24 },
  };

  const locations = [
    {
      value: 'daily',
      text: t('Daily'),
    },
    {
      value: 'weekly',
      text: t('Weekly'),
    },
    {
      value: 'monthly',
      text: t('Monthly'),
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
        <Typography variant="h4">{t('Power consumption')}</Typography>
        <Box>
          <Button
            color="secondary"
            size="small"
            variant="outlined"
            ref={actionRef}
            onClick={() => setOpenMenuLocation(true)}
            endIcon={<ExpandMoreTwoToneIcon />}
          >
            {location}
          </Button>
          <Tooltip
            title={t('Advanced statistics')}
            arrow
          >
            <ButtonIcon
              size="small"
              sx={{
                ml: 1,
              }}
              color="secondary"
              variant="contained"
              startIcon={<KeyboardArrowRightTwoToneIcon />}
            />
          </Tooltip>
        </Box>
        <Menu
          disableScrollLock
          anchorEl={actionRef.current}
          onClose={() => setOpenMenuLocation(false)}
          open={openLocation}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
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
      <Card>
        <Box
          display="flex"
          justifyContent="space-between"
          p={{ xs: 2, sm: 3 }}
          alignItems="center"
        >
          <Box
            display="flex"
            alignItems="center"
          >
            <ElectricalServicesTwoToneIconWrapper />
            <Typography variant="h5">{t('Total energy saving')}</Typography>
          </Box>
          <Typography fontWeight={700}>{t('65% capacity')}</Typography>
        </Box>
        {location === 'Daily' && (
          <Box
            px={{ xs: 2, sm: 3 }}
            pb={{ xs: 2, sm: 3 }}
          >
            <LineChart
              xAxis={[
                {
                  ...xAxisCommon,
                  tickMinStep: 3600 * 1000 * 24,
                },
                {
                  ...xAxisCommon,
                  id: 'half days',
                  tickMinStep: 3600 * 1000 * 12,
                },
              ]}
              {...config}
            />
          </Box>
        )}
        {location === 'Weekly' && (
          <Container maxWidth="xs">
            <Box p={{ xs: 2, sm: 3 }}>
              <EmptyStateImageTitle />
            </Box>
          </Container>
        )}
        {location === 'Monthly' && (
          <Container maxWidth="xs">
            <Box p={{ xs: 2, sm: 3 }}>
              <EmptyStateImageTitle />
            </Box>
          </Container>
        )}
      </Card>
    </>
  );
}

export default PowerConsumption;
