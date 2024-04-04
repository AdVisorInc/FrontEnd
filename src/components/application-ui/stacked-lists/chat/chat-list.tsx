import {
  alpha,
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

const ChatList = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const items = [
    {
      id: 1,
      name: 'Munroe Dacks',
      jobTitle: t('Senior Cost Accountant'),
      company: 'Trudoo',
      avatar: '/avatars/1.png',
      value: 65,
    },
    {
      id: 2,
      name: 'Gunilla Canario',
      jobTitle: t('Associate Professor'),
      company: 'Buzzdog',
      avatar: '/avatars/2.png',
      value: 76,
    },
    {
      id: 3,
      name: 'Rowena Geistmann',
      jobTitle: t('Pharmacist'),
      company: 'Yozio',
      avatar: '/avatars/3.png',
      value: 54,
    },
    {
      id: 4,
      name: 'Ede Stoving',
      jobTitle: t('VP Product Management'),
      company: 'Cogibox',
      avatar: '/avatars/4.png',
      value: 23,
    },
    {
      id: 5,
      name: 'Crissy Spere',
      jobTitle: t('Social Worker'),
      company: 'Babbleblab',
      avatar: '/avatars/5.png',
      value: 16,
    },
  ];

  return (
    <List disablePadding>
      {items.map((item) => (
        <Fragment key={item.id}>
          <ListItem
            sx={{
              py: 1.5,
              '&:hover': {
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[800], 0.12)
                    : 'neutral.25',
              },
            }}
            secondaryAction={
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                sx={{
                  textTransform: 'uppercase',
                  fontSize: theme.typography.pxToRem(12),
                }}
              >
                {t('Chat')}
              </Button>
            }
          >
            <ListItemAvatar
              sx={{
                minWidth: 38,
                mr: 1,
              }}
            >
              <Avatar
                sx={{
                  width: 38,
                  height: 38,
                }}
                alt={item.name}
                src={item.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{
                flexGrow: 0,
                maxWidth: '50%',
                flexBasis: '50%',
              }}
              disableTypography
              primary={
                <Typography
                  variant="h6"
                  noWrap
                >
                  {item.name}
                </Typography>
              }
              secondary={
                <InlineBadge>
                  <PulseBadge
                    variant="dot"
                    color="success"
                    sx={{
                      mr: 1,
                    }}
                  />
                  <Typography
                    color="text.secondary"
                    fontWeight={500}
                  >
                    {t('Online')}
                  </Typography>
                </InlineBadge>
              }
            />
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default ChatList;
