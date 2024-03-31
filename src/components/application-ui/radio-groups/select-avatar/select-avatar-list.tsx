import {
  Avatar,
  CardHeader,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Radio,
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

const RadioSelectList = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(parseInt(event.target.value));
  };

  return (
    <>
      <CardHeader title="Select manager" />
      <Divider />
      <List disablePadding>
        {items.map((item) => (
          <Fragment key={item.id}>
            <ListItemButton
              selected={selectedValue === item.id}
              onClick={() => setSelectedValue(item.id)}
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
              <Radio
                checked={selectedValue === item.id}
                onChange={handleChange}
                value={item.id}
                name="radio-buttons"
                inputProps={{ 'aria-label': item.name }}
                color="primary"
              />
            </ListItemButton>
            <Divider />
          </Fragment>
        ))}
      </List>
    </>
  );
};

export default RadioSelectList;
