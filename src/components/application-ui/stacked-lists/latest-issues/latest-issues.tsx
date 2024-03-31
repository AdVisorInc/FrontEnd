import AutoAwesomeMosaicTwoToneIcon from '@mui/icons-material/AutoAwesomeMosaicTwoTone';
import CardTravelTwoToneIcon from '@mui/icons-material/CardTravelTwoTone';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import EvStationTwoToneIcon from '@mui/icons-material/EvStationTwoTone';
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
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

type ListItemData = {
  icon: React.ReactElement;
  iconColor: string;
  primaryText: string;
  secondaryText: string;
  numberText: string;
  numberColor: string;
};

type CustomListItemProps = ListItemData;

const CustomListItem: React.FC<CustomListItemProps> = ({
  icon,
  iconColor,
  primaryText,
  secondaryText,
  numberText,
  numberColor,
}) => {
  return (
    <>
      <ListItem
        sx={{
          alignItems: 'flex-start',
          p: 2,
        }}
      >
        <ListItemAvatar
          sx={{
            mr: 2,
            display: 'flex',
            alignItems: 'center',
            minWidth: 0,
          }}
        >
          {React.cloneElement(icon, {
            sx: {
              color: iconColor,
            },
          })}
        </ListItemAvatar>
        <ListItemText
          sx={{ mt: 0 }}
          primary={<Typography variant="h5">{primaryText}</Typography>}
          secondary={
            <Typography
              noWrap
              variant="subtitle2"
              color="text.secondary"
            >
              {secondaryText}
            </Typography>
          }
        />
        <Box alignSelf="center">
          <Typography
            variant="h5"
            color={numberColor}
          >
            {numberText}
          </Typography>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const listItemData: ListItemData[] = [
    {
      icon: <ContactPhoneTwoToneIcon />,
      iconColor: theme.palette.warning.main,
      primaryText: t('Reports'),
      secondaryText: t('Monthly sales reports'),
      numberText: '29.544',
      numberColor: 'error.main',
    },
    {
      icon: <EvStationTwoToneIcon />,
      iconColor: theme.palette.info.main,
      primaryText: t('User'),
      secondaryText: t('Visitors last week'),
      numberText: '684',
      numberColor: 'success.main',
    },
    {
      icon: <AutoAwesomeMosaicTwoToneIcon />,
      iconColor: theme.palette.success.main,
      primaryText: t('Sales'),
      secondaryText: t('Total average weekly report'),
      numberText: '$1,24M',
      numberColor: 'warning.main',
    },
    {
      icon: <CardTravelTwoToneIcon />,
      iconColor: theme.palette.primary.main,
      primaryText: t('Stats'),
      secondaryText: t('Last month targets'),
      numberText: '786',
      numberColor: 'info.main',
    },
  ];

  return (
    <Card>
      <CardHeader title={t('Latest issues')} />
      <Divider />
      <List
        sx={{
          py: 0,
        }}
      >
        {listItemData.map((item, index) => (
          <CustomListItem
            key={index}
            {...item}
          />
        ))}
      </List>
    </Card>
  );
}

export default Component;
