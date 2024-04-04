import {
  alpha,
  Box,
  Card,
  Checkbox,
  Unstable_Grid2 as Grid,
  ListItem,
  ListItemText,
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

const CheckboxCardsGroupRight = () => {
  const theme = useTheme();
  const [selectedValues, setSelectedValues] = useState<number[]>([]);
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    if (event.target.checked) {
      setSelectedValues([...selectedValues, id]);
    } else {
      setSelectedValues(selectedValues.filter((value) => value !== id));
    }
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
              <ListItem
                component="label"
                htmlFor={`checkbox-${item.id}`}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 'inherit',
                  boxShadow: `0 0 0 1px ${theme.palette.divider} inset`,
                  '&.Mui-selected': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    boxShadow: `0 0 0 2px ${theme.palette.primary.main} inset`,
                  },
                }}
                selected={selectedValues.includes(item.id)}
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
                  secondary={<Typography color="text.secondary">{item.description}</Typography>}
                />
                <Checkbox
                  edge="end"
                  checked={selectedValues.includes(item.id)}
                  onChange={(e) => handleChange(e, item.id)}
                  value={item.id}
                  name="checkbox-buttons"
                  id={`checkbox-${item.id}`}
                  inputProps={{ 'aria-label': item.title }}
                  color="primary"
                />
              </ListItem>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CheckboxCardsGroupRight;
