import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { Fragment, useState } from 'react';

const items = [
  {
    id: 1,
    name: 'Munroe Dacks',
    email: 'munroe.dacks@trudoomail.com',
    company: 'Trudoo',
    avatar: '/avatars/1.png',
    value: 65,
  },
  {
    id: 2,
    name: 'Gunilla Canario',
    email: 'gunilla.canario@buzzdogonline.com',
    company: 'Buzzdog',
    avatar: '/avatars/2.png',
    value: 76,
  },
  {
    id: 3,
    name: 'Rowena Geistmann',
    email: 'rowena.geistmann@yozioconnect.com',
    company: 'Yozio',
    avatar: '/avatars/3.png',
    value: 54,
  },
  {
    id: 4,
    name: 'Ede Stoving',
    email: 'ede.stoving@cogiboxmail.com',
    company: 'Cogibox',
    avatar: '/avatars/4.png',
    value: 23,
  },
  {
    id: 5,
    name: 'Crissy Spere',
    email: 'crissy.spere@babbleblabchat.com',
    company: 'Babbleblab',
    avatar: '/avatars/5.png',
    value: 16,
  },
];

const MembersSelect = () => {
  const [actions, setActions] = useState({});

  const handleChange = (itemId) => (event) => {
    setActions((prevActions) => ({
      ...prevActions,
      [itemId]: event.target.value,
    }));
  };

  return (
    <List disablePadding>
      {items.map((item) => (
        <Fragment key={item.id}>
          <ListItem
            disableGutters
            secondaryAction={
              <Select
                size="small"
                labelId={`actions-select-label-${item.id}`}
                id={`actions-select-${item.id}`}
                value={actions[item.id] || ''}
                displayEmpty
                onChange={handleChange(item.id)}
              >
                <MenuItem value="">Can edit</MenuItem>
                <MenuItem value={10}>Can view</MenuItem>
                <MenuItem value={20}>Can delete</MenuItem>
              </Select>
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
                <Typography
                  variant="subtitle2"
                  noWrap
                >
                  {item.email}
                </Typography>
              }
            />
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default MembersSelect;
