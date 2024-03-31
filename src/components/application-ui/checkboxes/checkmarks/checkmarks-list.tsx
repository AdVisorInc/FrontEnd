import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import {
  Card,
  Unstable_Grid2 as Grid,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import { VisuallyHiddenCheckbox } from 'src/components/base/styles/visually-hidden';

interface Item {
  id: number;
  title: string;
  description: string;
  descriptionAlt: string;
}

const CheckmarksList = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  const items: Item[] = [
    {
      id: 1,
      title: t('Mentions'),
      description: 'All account mentions',
      descriptionAlt: '82 mentions',
    },
    {
      id: 2,
      title: t('Replies'),
      description: 'New replies & messages',
      descriptionAlt: '43 mentions',
    },
  ];

  const [selectedValues, setSelectedValues] = useState<number[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, itemId: number) => {
    if (event.target.checked) {
      setSelectedValues((prevSelected) => [...prevSelected, itemId]);
    } else {
      setSelectedValues((prevSelected) => prevSelected.filter((id) => id !== itemId));
    }
  };

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 2 }}
    >
      {items.map((item) => (
        <Grid
          key={item.id}
          xs={12}
          md={6}
        >
          <Card
            elevation={0}
            sx={{
              border: 0,
              position: 'relative',
            }}
          >
            {selectedValues.includes(item.id) && (
              <AvatarState
                variant="rounded"
                sx={{
                  width: 20,
                  height: 20,
                  position: 'absolute',
                  right: theme.spacing(1.5),
                  top: theme.spacing(1.5),
                }}
                state="primary"
              >
                <CheckTwoToneIcon
                  sx={{
                    fontSize: 14,
                  }}
                />
              </AvatarState>
            )}

            <ListItem
              component="label"
              htmlFor={`checkbox-${item.id}`}
              sx={{
                px: 2.5,
                py: 1.5,
                borderRadius: 'inherit',
                boxShadow: `0 0 0 1px ${theme.palette.divider} inset`,
                '&:hover': {
                  boxShadow: `0 0 0 1px ${theme.palette.primary.main} inset`,
                  cursor: 'pointer',
                },

                '&.Mui-selected': {
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
                secondary={
                  <>
                    <Typography
                      sx={{ pb: 1.5 }}
                      color="text.secondary"
                    >
                      {item.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      noWrap
                    >
                      {item.descriptionAlt}
                    </Typography>
                  </>
                }
              />
              <VisuallyHiddenCheckbox
                checked={selectedValues.includes(item.id)}
                onChange={(event) => handleChange(event, item.id)}
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
  );
};

export default CheckmarksList;
