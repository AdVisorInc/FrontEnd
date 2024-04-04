import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import {
  alpha,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
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

const Component = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item>(items[0]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (item: Item) => {
    setSelectedItem(item);
    handleClose();
  };

  return (
    <>
      <Card
        sx={{
          width: '100%',
        }}
      >
        <CardHeader
          title="Account manager"
          titleTypographyProps={{ pb: 0.2 }}
          subheader="Click below to change to a different account manager"
        />
        <CardContent
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
        >
          <Card
            elevation={0}
            variant="outlined"
          >
            <List disablePadding>
              <ListItemButton onClick={handleClickOpen}>
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
                    src={selectedItem.avatarSrc}
                  />
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      variant="h6"
                      noWrap
                    >
                      {selectedItem.name}
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
                        {selectedItem.company}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        noWrap
                        color="text.secondary"
                      >
                        {selectedItem.email}
                      </Typography>
                    </>
                  }
                  primaryTypographyProps={{ variant: 'h6' }}
                />
                <ChevronRightTwoToneIcon
                  sx={{
                    opacity: 0.5,
                  }}
                />
              </ListItemButton>
            </List>
          </Card>
        </CardContent>
      </Card>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-dialog-title"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle id="basic-dialog-title">Select account manager</DialogTitle>
        <List disablePadding>
          {items.map((item) => (
            <Fragment key={item.id}>
              <ListItemButton
                selected={selectedItem === item}
                onClick={() => selectedItem != item && handleListItemClick(item)}
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
      </Dialog>
    </>
  );
};

export default Component;
