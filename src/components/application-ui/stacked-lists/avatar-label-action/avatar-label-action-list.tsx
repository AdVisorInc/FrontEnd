import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { Avatar, Divider, List, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { deepPurple, green, lightBlue, orange, pink } from '@mui/material/colors';
import { Fragment } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
  avatar: JSX.Element;
}

const items: Item[] = [
  {
    id: 1,
    name: 'Social Media Strategy',
    description: 'Engage your audience, grow your reach.',
    avatar: <Avatar sx={{ bgcolor: pink[500], color: 'common.white' }}>SM</Avatar>,
  },
  {
    id: 2,
    name: 'Website Redesign',
    description: 'Modernize your site, enhance user experience.',
    avatar: <Avatar sx={{ bgcolor: deepPurple[500], color: 'common.white' }}>WR</Avatar>,
  },
  {
    id: 3,
    name: 'Feedback Collection',
    description: 'Gather customer insights to improve products.',
    avatar: <Avatar sx={{ bgcolor: lightBlue[500], color: 'common.white' }}>CF</Avatar>,
  },
  {
    id: 4,
    name: 'Annual Report',
    description: 'Document yearly achievements and milestones.',
    avatar: <Avatar sx={{ bgcolor: green[500], color: 'common.white' }}>AR</Avatar>,
  },
  {
    id: 5,
    name: 'Team Building',
    description: 'Boost team spirit and collaboration.',
    avatar: <Avatar sx={{ bgcolor: orange[500], color: 'common.white' }}>TB</Avatar>,
  },
];

const AvatarLabelActionList = () => {
  return (
    <List disablePadding>
      {items.map((item) => (
        <Fragment key={item.id}>
          <ListItemButton>
            <ListItemAvatar
              sx={{
                minWidth: 38,
                mr: 1,
              }}
            >
              {item.avatar}
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={item.description}
              primaryTypographyProps={{ variant: 'h6' }}
              secondaryTypographyProps={{ variant: 'subtitle2' }}
            />
            <ChevronRightTwoToneIcon
              sx={{
                opacity: 0.5,
              }}
            />
          </ListItemButton>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default AvatarLabelActionList;
