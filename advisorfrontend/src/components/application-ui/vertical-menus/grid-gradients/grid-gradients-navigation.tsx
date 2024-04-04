import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import { alpha, Card, CardActionArea, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

type DashboardItem = {
  label: string;
  icon: JSX.Element;
  color: string;
};

const DASHBOARD_ITEMS: DashboardItem[] = [
  {
    label: 'Projects',
    icon: <AccountTreeTwoToneIcon />,
    color: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important',
  },
  {
    label: 'Helpdesk',
    icon: <ContactSupportTwoToneIcon />,
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important',
  },
  {
    label: 'Dashboard',
    icon: <DashboardCustomizeTwoToneIcon />,
    color: 'linear-gradient(60deg, #29323c 0%, #485563 100%) !important',
  },
  {
    label: 'Customers',
    icon: <PeopleOutlineTwoToneIcon />,
    color: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
  },
];

const GridGradientsNavigation: FC = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={2}
    >
      {DASHBOARD_ITEMS.map((item) => (
        <Grid
          key={item.label}
          xs={12}
          sm={6}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{
              border: 0,
              background: item.color,
              '&:hover': {
                boxShadow: (theme) => theme.shadows[15],
              },
            }}
          >
            <CardActionArea
              sx={{
                p: 2,
                textAlign: 'center',
                '&:hover': {
                  backgroundColor: (theme) => alpha(theme.palette.common.white, 0.08),
                },
              }}
            >
              {React.cloneElement(item.icon, {
                sx: {
                  mb: 0.5,
                  color: 'common.white',
                },
              })}
              <Typography
                color="common.white"
                variant="h6"
              >
                {t(item.label)}
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridGradientsNavigation;
