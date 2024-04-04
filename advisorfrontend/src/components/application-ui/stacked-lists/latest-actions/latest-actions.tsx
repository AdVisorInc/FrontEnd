import AutoAwesomeMosaicTwoToneIcon from '@mui/icons-material/AutoAwesomeMosaicTwoTone';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import EvStationTwoToneIcon from '@mui/icons-material/EvStationTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  alpha,
  Avatar,
  Button,
  Card,
  CardHeader,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

type CardListItemData = {
  icon: React.ReactNode;
  primaryTextKey: string;
  secondaryTextKey: string;
  avatarBgAlpha: number;
};

const cardListItems: CardListItemData[] = [
  {
    icon: <ContactPhoneTwoToneIcon />,
    primaryTextKey: 'Customers',
    secondaryTextKey: 'On the other hand, we denounce with righteous indignation',
    avatarBgAlpha: 0.4,
  },
  {
    icon: <EvStationTwoToneIcon />,
    primaryTextKey: 'New articles',
    secondaryTextKey: 'Dislike men who are so beguiled and demoralized by the charms',
    avatarBgAlpha: 0.4,
  },
  {
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    primaryTextKey: 'Blog posts',
    secondaryTextKey: 'Pleasure of the moment, so blinded by desire, that they foresee',
    avatarBgAlpha: 0.4,
  },
];

const CardListItem: React.FC<CardListItemData> = ({
  icon,
  primaryTextKey,
  secondaryTextKey,
  avatarBgAlpha,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <ListItemButton
        sx={{
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
          <Avatar
            variant="rounded"
            sx={{
              background:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[800], avatarBgAlpha)
                  : alpha(theme.palette.neutral[300], avatarBgAlpha),
              color: theme.palette.primary.main,
              width: 48,
              height: 48,
            }}
          >
            {icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          disableTypography
          primary={<Typography variant="h5">{t(primaryTextKey)}</Typography>}
          secondary={
            <Typography
              variant="subtitle2"
              color="text.secondary"
              noWrap
            >
              {t(secondaryTextKey)}.
            </Typography>
          }
        />
      </ListItemButton>
      <Divider />
    </>
  );
};

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        sx={{
          p: 2,
          background: theme.palette.background.default,
        }}
        title={t('Latest actions')}
        action={
          <Button
            variant="outlined"
            size="small"
            endIcon={<ExpandMoreTwoToneIcon />}
            color="secondary"
          >
            {t('Export')}
          </Button>
        }
      />
      <Divider />
      <List disablePadding>
        {cardListItems.map((item, index) => (
          <CardListItem
            key={index}
            {...item}
          />
        ))}
      </List>
    </Card>
  );
}

export default Component;
