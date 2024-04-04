import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';

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
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setSelectedValues([]);
        setOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [open]);

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
      <Card
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CardContent>
          <Button
            endIcon={<ArrowRightAltTwoToneIcon />}
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            Open Alert
          </Button>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        fullScreen={fullScreen}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="basic-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">Members</Typography>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Chip
                size="small"
                label={selectedValues.length}
              />
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                selected
              </Typography>
            </Stack>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
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
        </DialogContent>
        <DialogActions
          sx={{
            flexDirection: { xs: 'column-reverse', sm: 'row' },

            '& > :not(:first-of-type)': {
              marginLeft: { xs: 0, sm: theme.spacing(1) },
              marginBottom: { xs: theme.spacing(1), sm: 0 },
            },
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            autoFocus
            sx={{
              width: { xs: '100%', sm: 'auto' },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClose}
            autoFocus
            disabled={!selectedValues.length}
            sx={{
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Assign selected ({selectedValues.length})
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Component;
