import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import { Card, CardActionArea, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

type DashboardItem = {
  label: string;
  icon: JSX.Element;
  color: string;
  description: string;
};

const DASHBOARD_ITEMS: DashboardItem[] = [
  {
    label: 'Projects',
    icon: <AccountTreeTwoToneIcon fontSize="large" />,
    color: 'primary.main',
    description: 'Manage all your projects',
  },
  {
    label: 'Helpdesk',
    icon: <ContactSupportTwoToneIcon fontSize="large" />,
    color: 'primary.main',
    description: 'Get support and help',
  },
  {
    label: 'Dashboard',
    icon: <DashboardCustomizeTwoToneIcon fontSize="large" />,
    color: 'primary.main',
    description: 'Overview of activities',
  },
  {
    label: 'Customers',
    icon: <PeopleOutlineTwoToneIcon fontSize="large" />,
    color: 'primary.main',
    description: 'Manage customer profiles',
  },
];

const GridNavigationDescription: FC = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={0}
      sx={{
        '--Grid-borderWidth': '1px',
        borderTop: 'var(--Grid-borderWidth) solid',
        borderLeft: 'var(--Grid-borderWidth) solid',
        borderColor: 'divider',
        '& > div': {
          borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
        },
      }}
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
              borderWidth: 0,
              borderRadius: 0,
            }}
          >
            <CardActionArea
              sx={{
                p: 2,
                transition: 'none',
                '&:hover': {
                  backgroundColor: '(theme) => alpha(theme.palette.primary.main, 0.01)',

                  '& > .MuiTypography-subtitle1': {
                    color: 'text.primary',
                  },
                },
              }}
            >
              {React.cloneElement(item.icon, {
                sx: {
                  mb: 1,
                  color: item.color,
                },
              })}
              <Typography variant="h5">{t(item.label)}</Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                noWrap
              >
                {t(item.description)}
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridNavigationDescription;
