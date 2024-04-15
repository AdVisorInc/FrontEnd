import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbar } from 'src/components/base/scrollbar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

interface ListItemData {
  icon: React.ReactElement;
  primaryTextKey: string;
  secondaryTextKey: string;
  labelKey?: string;
  labelColor?: 'info' | 'error' | 'warning' | 'success' | 'primary';
}

const listData: ListItemData[] = [
  {
    icon: <HelpOutlineTwoToneIcon fontSize="small" />,
    primaryTextKey: 'FAQ',
    secondaryTextKey: 'Find answers to frequently asked questions',
    labelKey: 'In Development',
    labelColor: 'warning',
  },
  {
    icon: <MenuBookTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Documentation',
    secondaryTextKey: 'Explore our comprehensive documentation and guides',
    labelKey: 'In Development',
    labelColor: 'warning',
  },
  {
    icon: <MonetizationOnTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Pricing',
    secondaryTextKey: 'Choose the right plan for your needs and budget',
    labelKey: 'In Development',
    labelColor: 'warning',
  },
  {
    icon: <PeopleOutlineTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Team',
    secondaryTextKey: 'Meet our talented team behind the product',
    labelKey: 'In Development',
    labelColor: 'warning',
  },
  {
    icon: <VerifiedUserTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Security',
    secondaryTextKey: 'Learn about our robust security measures',
    labelKey: 'In Development',
    labelColor: 'warning',
  },
  {
    icon: <SupportAgentTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Support',
    secondaryTextKey: 'Get in touch with our dedicated support team',
    labelKey: 'In Development',
    labelColor: 'warning',
  },
];


interface CustomListItemProps extends ListItemData {}

const CustomListItem: React.FC<CustomListItemProps> = ({
                                                         icon,
                                                         primaryTextKey,
                                                         secondaryTextKey,
                                                         labelKey,
                                                         labelColor,
                                                       }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <ListItem sx={{ p: { xs: 1.5, md: 2.5 } }}>
        <ListItemAvatar
          sx={{ mr: 1.5, display: { xs: 'none', md: 'flex' }, alignItems: 'center', minWidth: 0 }}
        >
          <Avatar
            sx={{
              background: 'transparent',
              color: theme.palette.primary.main,
              border: `${theme.palette.primary.main} solid 2px`,
              width: 54,
              height: 54,
            }}
          >
            {icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              variant="h5"
              sx={{ display: 'flex', alignItems: 'center', pb: 0.3, pr: { xs: 4, md: 0 }, }}
            >
              {t(primaryTextKey)}
              {labelKey && labelColor && (
                <Chip
                  size="small"
                  color={labelColor}
                  variant="outlined"
                  label={t(labelKey)}
                  sx={{
                    ml: 1,
                  }}
                />
              )}
            </Typography>
          }
          secondary={
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                pr: { xs: 4, md: 0 },
              }}
            >
              {t(secondaryTextKey)}
            </Typography>
          }
        />
        <Box>
          <ButtonIcon
            variant="contained"
            disabled
            startIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
          />
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

function NavigationPillsOverview() {
  const { t } = useTranslation();

  return (
    <Card>
      <Box
        p={2.5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h4">{t('More')}</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Explore important resources and information')}
          </Typography>
        </Box>
        <InlineBadge>
          <Typography
            variant="body2"
            color="warning.light"
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            Latest updates available
          </Typography>
        </InlineBadge>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 350,
        }}
      >
        <Scrollbar>
          <List disablePadding>
            {listData.map((item, index) => (
              <CustomListItem
                key={index}
                {...item}
              />
            ))}
          </List>
        </Scrollbar>
      </Box>

    </Card>
  );
}

export default NavigationPillsOverview;
