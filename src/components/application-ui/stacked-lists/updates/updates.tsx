import AutoAwesomeMosaicTwoToneIcon from '@mui/icons-material/AutoAwesomeMosaicTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import EvStationTwoToneIcon from '@mui/icons-material/EvStationTwoTone';
import {
  alpha,
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ListItemData {
  icon: React.ElementType;
  titleKey: string;
  number: string | number;
  value: number;
  color: 'error.main' | 'success.main' | 'warning.main' | 'info.main';
}

const itemsData: ListItemData[] = [
  {
    icon: ContactPhoneTwoToneIcon,
    titleKey: 'Reports',
    number: '29.544',
    value: 476,
    color: 'error.main',
  },
  {
    icon: EvStationTwoToneIcon,
    titleKey: 'User',
    number: 684,
    value: 684,
    color: 'success.main',
  },
  {
    icon: AutoAwesomeMosaicTwoToneIcon,
    titleKey: 'Sales',
    number: '$1,24M',
    value: 653,
    color: 'warning.main',
  },
  {
    icon: CardTravelTwoToneIcon,
    titleKey: 'Stats',
    number: 786,
    value: 723,
    color: 'info.main',
  },
];

const chartValues = itemsData.map((item) => item.value);
const xLabels = itemsData.map((item) => item.titleKey);

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        sx={{
          p: 2,
        }}
        title={t('Updates')}
      />
      <Divider />
      <List disablePadding>
        {itemsData.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              sx={{
                px: 2,
                py: 1.5,
              }}
            >
              <ListItemAvatar
                sx={{
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: 0,
                  opacity: 0.3,
                }}
              >
                <item.icon
                  sx={{
                    fontSize: theme.typography.pxToRem(28),
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={<Typography variant="h5">{t(item.titleKey)}</Typography>}
              />
              <Box>
                <Typography
                  variant="h4"
                  color={item.color}
                >
                  {item.number}
                </Typography>
              </Box>
            </ListItem>
            {index !== itemsData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Box p={2}>
          <Typography variant="h4">Sales</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            Sales statistics from last 7 days
          </Typography>
        </Box>
        <LineChart
          height={168}
          leftAxis={null}
          margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
          bottomAxis={null}
          slotProps={{ legend: { hidden: true } }}
          series={[
            {
              data: chartValues,
              label: 'Products sold',
              area: true,
              color: theme.palette.success.main,
              showMark: false,
            },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          sx={{
            '.MuiLineElement-root': {
              strokeWidth: 2,
            },
            '.MuiHighlightElement-root': {
              strokeWidth: 2,
              scale: '1.2',
              stroke: theme.palette.success.main,
              fill: theme.palette.background.paper,
            },
            '.MuiAreaElement-root': {
              fill: alpha(theme.palette.success.main, 0.12),
            },
          }}
        />
      </Box>
    </Card>
  );
}

export default Component;
