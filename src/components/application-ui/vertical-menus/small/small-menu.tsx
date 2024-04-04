import AppSettingsAltTwoToneIcon from '@mui/icons-material/AppSettingsAltTwoTone';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Unstable_Grid2 as Grid,
  Link,
  List,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface LinkItem {
  textKey: string;
  href: string;
}

interface Category {
  icon: React.ReactElement;
  textKey: string;
  links: LinkItem[];
}

const categories: Category[] = [
  // Dashboards
  {
    icon: <DashboardTwoToneIcon sx={{ color: 'primary.main', mr: 1 }} />,
    textKey: 'Dashboards',
    links: [
      { textKey: 'Tasks for today', href: '#' },
      { textKey: 'Statistics dashboard', href: '#' },
      { textKey: 'Monitoring admin', href: '#' },
      { textKey: 'Banking interface', href: '#' },
    ],
  },
  // Management
  {
    icon: <AppSettingsAltTwoToneIcon sx={{ color: 'primary.main', mr: 1 }} />,
    textKey: 'Management',
    links: [
      { textKey: 'Calendar', href: '#' },
      { textKey: 'File manager', href: '#' },
      { textKey: 'Products list', href: '#' },
      { textKey: 'Recent orders', href: '#' },
    ],
  },
  // Analytics
  {
    icon: <BarChartIcon sx={{ color: 'primary.main', mr: 1 }} />,
    textKey: 'Analytics',
    links: [
      { textKey: 'Performance Metrics', href: '#' },
      { textKey: 'Sales Statistics', href: '#' },
      { textKey: 'Customer Insights', href: '#' },
      { textKey: 'Traffic Sources', href: '#' },
    ],
  },
  // Settings
  {
    icon: <SettingsIcon sx={{ color: 'primary.main', mr: 1 }} />,
    textKey: 'Settings',
    links: [
      { textKey: 'Profile Preferences', href: '#' },
      { textKey: 'Account Management', href: '#' },
      { textKey: 'Notification Settings', href: '#' },
      { textKey: 'Privacy Options', href: '#' },
    ],
  },
];

const SmallMenu = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        '.MuiLink-root': {
          display: 'flex',
          alignItems: 'center',
          lineHeight: 1,
          fontWeight: 500,

          '.MuiSvgIcon-root': {
            fontSize: 18,
            ml: 0.3,
            mt: '1px',
            transition: theme.transitions.create('margin', {
              duration: theme.transitions.duration.shortest,
            }),
          },

          '&:hover': {
            '.MuiSvgIcon-root': {
              ml: 0.8,
            },
          },
        },
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        {categories.map((category) => (
          <Grid
            xs={12}
            sm={6}
            key={category.textKey}
          >
            <Box
              display="flex"
              mb={1}
              alignItems="center"
            >
              {category.icon}
              <Typography fontWeight={600}>{t(category.textKey)}</Typography>
            </Box>
            <List disablePadding>
              {category.links.map((linkItem) => (
                <ListItem
                  sx={{ pl: 3 }}
                  disableGutters
                  key={linkItem.textKey}
                >
                  <Link
                    href={linkItem.href}
                    onClick={(e) => e.preventDefault()}
                    color="primary"
                  >
                    {t(linkItem.textKey)}
                    <KeyboardArrowRightRoundedIcon />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SmallMenu;
