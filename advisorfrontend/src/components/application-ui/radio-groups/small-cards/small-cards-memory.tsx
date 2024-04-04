import {
  alpha,
  Box,
  Card,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { VisuallyHiddenRadio } from 'src/components/base/styles/visually-hidden';

interface Item {
  id: number;
  title: string;
}

const RadioSmallCardsMemory = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const items: Item[] = [
    {
      id: 1,
      title: t('32GB'),
    },
    {
      id: 2,
      title: t('64GB'),
    },
    {
      id: 3,
      title: t('128GB'),
    },
  ];

  const [selectedValue, setSelectedValue] = useState<number>(items[0].id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(parseInt(event.target.value));
  };

  return (
    <Box>
      <Box pb={2}>
        <Typography variant="h5">Memory Card Size</Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          Choose your preferred storage capacity:
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        m={-0.5}
      >
        {items.map((item) => (
          <Card
            key={item.id}
            elevation={0}
            sx={{
              m: 0.5,
              border: 0,
            }}
          >
            <ListItemButton
              sx={{
                px: 2.5,
                py: 1.5,
                borderRadius: 'inherit',
                transition: 'none',
                boxShadow: `0 0 0 1px ${theme.palette.divider} inset`,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.divider, 0.2),
                  boxShadow: `0 0 0 1px ${theme.palette.primary.main} inset`,
                },
                '&.Mui-selected': {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  boxShadow: `0 0 0 2px ${theme.palette.primary.main} inset`,
                  '&:hover': {
                    color: theme.palette.primary.contrastText,
                    backgroundColor: theme.palette.primary.main,
                  },
                },
              }}
              selected={selectedValue === item.id}
              onClick={() => setSelectedValue(item.id)}
            >
              <ListItemText
                disableTypography
                primary={
                  <>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                    >
                      {item.title}
                    </Typography>
                  </>
                }
              />
              <VisuallyHiddenRadio
                checked={selectedValue === item.id}
                onChange={handleChange}
                value={item.id}
                name="radio-buttons"
                inputProps={{ 'aria-label': item.title }}
                color="primary"
              />
            </ListItemButton>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default RadioSmallCardsMemory;
