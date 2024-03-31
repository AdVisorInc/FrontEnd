import {
  alpha,
  Avatar,
  Card,
  CardHeader,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function PopularTags() {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        height: '100%',
      }}
    >
      <CardHeader title={t('Popular Tags')} />
      <Divider />
      <List
        sx={{
          '.MuiListItem-root': {
            borderRadius: 0,
          },
        }}
        disablePadding
      >
        <ListItemButton>
          <ListItemText primary="#HTML" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="#software_development" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="#TrendingInfuencers" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="#investorsWatch2022" />
        </ListItemButton>
        <Divider />
        <ListSubheader
          sx={{
            py: 0.5,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
        >
          {t('Groups')}
        </ListSubheader>
        <Divider />
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                backgroundColor: 'info.main',
                color: 'info.contrastText',
              }}
            >
              DL
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5',
              fontWeight: 500,
            }}
            primary="Web Designers Lounge"
          />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                backgroundColor: 'error.main',
                color: 'error.contrastText',
              }}
            >
              DD
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5',
              fontWeight: 500,
            }}
            primary="Writer's Digest Daily"
          />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
              }}
              src="/placeholders/logo/google-icon.svg"
            />
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5',
              fontWeight: 500,
            }}
            primary="Google Developers"
          />
        </ListItemButton>
      </List>
    </Card>
  );
}

export default PopularTags;
