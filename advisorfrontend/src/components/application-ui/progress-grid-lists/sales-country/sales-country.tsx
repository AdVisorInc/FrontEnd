import {
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { LinearProgressAlternate } from 'src/components/base/styles/progress-bar';

interface SaleData {
  countryCode: string;
  countryName: string;
  orders: number;
  total: string;
  progress: number;
}

const salesData: SaleData[] = [
  { countryCode: 'US', countryName: 'USA', orders: 8, total: '$5,493.22', progress: 57 },
  { countryCode: 'ES', countryName: 'Spain', orders: 41, total: '$7,489.00', progress: 23 },
  { countryCode: 'DE', countryName: 'Germany', orders: 12, total: '$3,589.33', progress: 34 },
];

function SalesByCountry() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader title={t('Sales by Country')} />
      <Divider />
      <List
        disablePadding
        component="div"
      >
        {salesData.map((sale) => (
          <React.Fragment key={sale.countryCode}>
            <ListItem
              component="div"
              sx={{
                py: 2,
                flexDirection: 'column',
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                width="100%"
              >
                <ListItemAvatar
                  sx={{
                    minWidth: '36px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <ReactCountryFlag
                    style={{
                      width: '2em',
                      height: '2em',
                    }}
                    countryCode={sale.countryCode}
                    svg
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={sale.countryName}
                  primaryTypographyProps={{
                    variant: 'h5',
                    noWrap: true,
                  }}
                />

                <Box
                  display="flex"
                  alignItems="center"
                >
                  <Box sx={{ mr: 3 }}>
                    <Typography
                      align="center"
                      variant="subtitle2"
                      noWrap
                      color="text.secondary"
                      gutterBottom
                    >
                      {t('Orders')}
                    </Typography>
                    <Typography
                      align="center"
                      variant="h5"
                    >
                      {sale.orders}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      align="right"
                      variant="subtitle2"
                      noWrap
                      color="text.secondary"
                      gutterBottom
                    >
                      {t('Total')}
                    </Typography>
                    <Typography
                      align="right"
                      variant="h5"
                    >
                      {sale.total}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                display="block"
                width="100%"
                sx={{
                  mt: 2,
                }}
              >
                <LinearProgressAlternate
                  sx={{ flex: 1 }}
                  value={sale.progress}
                  color="primary"
                  variant="determinate"
                />
              </Box>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}

export default SalesByCountry;
