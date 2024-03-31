import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import AutoAwesomeMosaicTwoToneIcon from '@mui/icons-material/AutoAwesomeMosaicTwoTone';
import EvStationTwoToneIcon from '@mui/icons-material/EvStationTwoTone';
import FlightTwoToneIcon from '@mui/icons-material/FlightTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';
import LocalLibraryTwoToneIcon from '@mui/icons-material/LocalLibraryTwoTone';
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
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
    icon: <OndemandVideoTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Entertainment',
    secondaryTextKey: 'Explore the latest in movies, TV shows, and streaming services',
  },
  {
    icon: <AutoAwesomeMosaicTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Technology',
    secondaryTextKey: 'Stay updated with the newest tech trends and gadgets',
    labelKey: 'New',
    labelColor: 'info',
  },
  {
    icon: <EvStationTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Eco-Friendly',
    secondaryTextKey: 'Embrace sustainable living with green technology solutions',
    labelKey: 'Hot',
    labelColor: 'error',
  },
  {
    icon: <SportsEsportsTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Gaming',
    secondaryTextKey: 'Dive into immersive gaming experiences and latest releases',
    labelKey: 'Popular',
    labelColor: 'success',
  },
  {
    icon: <LocalLibraryTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Education',
    secondaryTextKey: 'Expand your knowledge with educational resources and courses',
    labelKey: 'Featured',
    labelColor: 'warning',
  },
  {
    icon: <FlightTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Travel',
    secondaryTextKey: 'Discover exciting travel destinations and hidden gems',
  },
  {
    icon: <LocalCafeTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Food & Drink',
    secondaryTextKey: 'Savor the taste of international cuisines and local delicacies',
    labelKey: 'Trending',
    labelColor: 'primary',
  },
  {
    icon: <MusicNoteTwoToneIcon fontSize="small" />,
    primaryTextKey: 'Music',
    secondaryTextKey: 'Groove to the latest hits and all-time favorite tunes',
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
              sx={{ display: 'flex', alignItems: 'center', pb: 0.3 }}
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
            >
              {t(secondaryTextKey)}
            </Typography>
          }
        />
        <Box>
          <ButtonIcon
            variant="contained"
            startIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
          />
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

function Component() {
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
          <Typography variant="h4">{t('Navigation Pills')}</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('This is yet another example for navigation')}
          </Typography>
        </Box>
        <InlineBadge>
          <PulseBadge
            variant="dot"
            color="warning"
            sx={{
              mr: 1,
            }}
          />
          <Typography
            variant="body2"
            color="warning.light"
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            Provisioning in progress...
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
      <Divider />
      <CardActions>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            width: { xs: '100%', md: 'auto' },
          }}
          endIcon={<KeyboardArrowRightTwoToneIcon />}
        >
          {t('View more items')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Component;
