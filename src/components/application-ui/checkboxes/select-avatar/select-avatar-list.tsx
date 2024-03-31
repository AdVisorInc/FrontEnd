import {
  Avatar,
  Box,
  Checkbox,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Fragment, useState } from 'react';

interface Item {
  id: number;
  name: string;
  email: string;
  company: string;
  avatarSrc: string;
}

const generateEmail = (name: string, company: string) => {
  const domain = company.toLowerCase().replace(/\s+/g, '') + '.com';
  return `${name.split(' ')[0].toLowerCase()}.${name.split(' ')[1].toLowerCase()}@${domain}`;
};

const items: Item[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: generateEmail('Alex Johnson', 'Tech Solutions Ltd.'),
    company: 'Tech Solutions Ltd.',
    avatarSrc: '/avatars/1.png',
  },
  {
    id: 2,
    name: 'Marta Stewart',
    email: generateEmail('Marta Stewart', 'Innovatech Inc.'),
    company: 'Innovatech Inc.',
    avatarSrc: '/avatars/2.png',
  },
  {
    id: 3,
    name: 'Liu Wei',
    email: generateEmail('Liu Wei', 'Global Exports Co.'),
    company: 'Global Exports Co.',
    avatarSrc: '/avatars/3.png',
  },
  {
    id: 4,
    name: 'Raj Patel',
    email: generateEmail('Raj Patel', 'QuickFix IT Solutions'),
    company: 'QuickFix IT Solutions',
    avatarSrc: '/avatars/4.png',
  },
  {
    id: 5,
    name: 'Samantha Bloom',
    email: generateEmail('Samantha Bloom', 'Bloom Gardens'),
    company: 'Bloom Gardens',
    avatarSrc: '/avatars/5.png',
  },
];

const CheckboxSelectList = () => {
  const [selectedValues, setSelectedValues] = useState<number[]>([]);

  const handleChange = (id: number) => {
    const currentIndex = selectedValues.indexOf(id);
    const newChecked = [...selectedValues];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setSelectedValues(newChecked);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Typography variant="h5">Select manager</Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          <Typography
            variant="subtitle2"
            color="text.primary"
            component="span"
            fontWeight={500}
          >
            {selectedValues.length}
          </Typography>{' '}
          selected
        </Typography>
      </Box>
      <Divider />
      <List disablePadding>
        {items.map((item) => (
          <Fragment key={item.id}>
            <ListItemButton
              onClick={() => handleChange(item.id)}
              selected={selectedValues.includes(item.id)}
            >
              <ListItemAvatar
                sx={{
                  mr: 1.5,
                }}
              >
                <Avatar
                  sx={{
                    width: 58,
                    height: 58,
                  }}
                  variant="rounded"
                  src={item.avatarSrc}
                />
              </ListItemAvatar>
              <ListItemText
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
                  <>
                    <Typography
                      variant="body2"
                      noWrap
                      fontWeight={500}
                      sx={{
                        pb: 0.3,
                      }}
                    >
                      {item.company}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      noWrap
                      color="text.secondary"
                    >
                      {item.email}
                    </Typography>
                  </>
                }
                primaryTypographyProps={{ variant: 'h6' }}
              />
              <Checkbox
                edge="end"
                onChange={() => handleChange(item.id)}
                checked={selectedValues.includes(item.id)}
                inputProps={{
                  'aria-labelledby': `checkbox-list-label-${item.id}`,
                }}
              />
            </ListItemButton>
            <Divider />
          </Fragment>
        ))}
      </List>
    </>
  );
};

export default CheckboxSelectList;
