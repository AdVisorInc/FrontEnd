import {
  alpha,
  Box,
  Card,
  Unstable_Grid2 as Grid,
  ListItemButton,
  ListItemText,
  Radio,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Item {
  id: number;
  title: string;
  description: string;
}

const RadioCardsGroupRight = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const items: Item[] = [
    {
      id: 1,
      title: t('All activity'),
      description: 'New messages, reactions and all mentions',
    },
    {
      id: 2,
      title: t('Mentions & reactions'),
      description: 'Personal mentions and replies to your messages',
    },
    {
      id: 3,
      title: t('Custom'),
      description: 'Choose what you get notified for and how',
    },
  ];

  const [selectedValue, setSelectedValue] = useState<number>(items[0].id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(parseInt(event.target.value));
  };

  return (
    <>
      <Box pb={2}>
        <Typography variant="h5">Teams and channels</Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          You will get desktop and activity notifications for:
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
      >
        {items.map((item) => (
          <Grid
            key={item.id}
            xs={12}
            md={4}
          >
            <Card
              elevation={0}
              sx={{
                border: 0,
              }}
            >
              <ListItemButton
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 'inherit',
                  boxShadow: `0 0 0 1px ${theme.palette.divider} inset`,
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.divider, 0.2),
                  },

                  '&.Mui-selected': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    boxShadow: `0 0 0 2px ${theme.palette.primary.main} inset`,

                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    },
                  },
                }}
                selected={selectedValue === item.id}
                onClick={() => setSelectedValue(item.id)}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      variant="h6"
                      noWrap
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography color="text.secondary">{item.description}</Typography>
                    </>
                  }
                />
                <Radio
                  edge="end"
                  checked={selectedValue === item.id}
                  onChange={handleChange}
                  value={item.id}
                  name="radio-buttons"
                  inputProps={{ 'aria-label': item.title }}
                  color="primary"
                />
              </ListItemButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RadioCardsGroupRight;
