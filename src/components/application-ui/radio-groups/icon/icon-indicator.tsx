import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import {
  alpha,
  Box,
  Card,
  Unstable_Grid2 as Grid,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import { VisuallyHiddenRadio } from 'src/components/base/styles/visually-hidden';

interface Item {
  id: number;
  title: string;
  description: string;
  descriptionAlt: string;
}

const RadioIconIndicator = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const items: Item[] = [
    {
      id: 1,
      title: t('Everything'),
      description: 'All account activity',
      descriptionAlt: '82 reports',
    },
    {
      id: 2,
      title: t('Only mentions'),
      description: 'New mentions & replies',
      descriptionAlt: '43 mentions',
    },
  ];

  const [selectedValue, setSelectedValue] = useState<number>(items[0].id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(parseInt(event.target.value));
  };

  return (
    <>
      <Box pb={2}>
        <Typography variant="h5">Activity tab</Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          Configure what information is shown in the activity tab:
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
            md={6}
          >
            <Card
              elevation={0}
              sx={{
                border: 0,
                position: 'relative',
              }}
            >
              {selectedValue === item.id && (
                <AvatarState
                  sx={{
                    width: 20,
                    height: 20,
                    position: 'absolute',
                    right: theme.spacing(1),
                    top: theme.spacing(1),
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

              <ListItemButton
                sx={{
                  px: 2.5,
                  py: 1.5,
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
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RadioIconIndicator;
