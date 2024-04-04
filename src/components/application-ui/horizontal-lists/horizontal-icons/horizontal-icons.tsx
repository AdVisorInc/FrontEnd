import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import MoneyTwoToneIcon from '@mui/icons-material/MoneyTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { Box, Card, CardContent, Unstable_Grid2 as Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

type GridItem = {
  icon: React.ReactNode;
  titleKey: string;
  value: string | React.ReactNode;
  color?: string;
};

function Component() {
  const { t } = useTranslation();

  const gridItems: GridItem[] = [
    {
      icon: <AccountBalanceWalletTwoToneIcon sx={{ fontSize: 48 }} />,
      titleKey: 'Expenses',
      value: '$14,264',
      color: 'error.main',
    },
    {
      icon: <MonetizationOnTwoToneIcon sx={{ fontSize: 48 }} />,
      titleKey: 'Revenue',
      value: '$14,264',
      color: 'primary.main',
    },
    {
      icon: <PersonTwoToneIcon sx={{ fontSize: 48 }} />,
      titleKey: 'Users',
      value: '$14,264',
    },
    {
      icon: <StorefrontTwoToneIcon sx={{ fontSize: 48 }} />,
      titleKey: 'Sales',
      value: '$1.2M',
    },
    {
      icon: <MoneyTwoToneIcon sx={{ fontSize: 48 }} />,
      titleKey: 'Income',
      value: (
        <CountUp
          start={0}
          end={458.695}
          duration={4}
          separator=""
          delay={1}
          decimals={3}
          decimal=","
          prefix="$"
          suffix=""
        />
      ),
      color: 'success.main',
    },
  ];

  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          columns={20}
        >
          {gridItems.map((item, index) => (
            <Grid
              key={index}
              xs={20}
              sm={10}
              md={4}
            >
              <Stack
                justifyContent={{ xs: 'flex-start', md: 'center' }}
                spacing={1}
                direction="row"
                alignItems="center"
              >
                <Box sx={{ color: 'text.secondary', opacity: 0.6 }}>{item.icon}</Box>
                <Box>
                  <Typography
                    noWrap
                    variant="h5"
                    fontWeight={500}
                    color="text.secondary"
                  >
                    {t(item.titleKey)}
                  </Typography>
                  <Typography
                    color={item.color || 'text.primary'}
                    variant="h3"
                    sx={{ minWidth: 120 }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Component;
