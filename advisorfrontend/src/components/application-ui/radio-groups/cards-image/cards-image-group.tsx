import {
  alpha,
  Avatar,
  Box,
  Card,
  Unstable_Grid2 as Grid,
  Link,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Radio,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PlaceholderBox from 'src/components/base/placeholder-box';

interface Item {
  id: number;
  title: string;
}

const RadioCardsImageGroup = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const items: Item[] = [
    {
      id: 1,
      title: t('Default theme'),
    },
    {
      id: 2,
      title: t('Dark scheme'),
    },
    {
      id: 3,
      title: t('High contrast'),
    },
  ];

  const [selectedValue, setSelectedValue] = useState<number>(items[0].id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(parseInt(event.target.value));
  };

  return (
    <>
      <Box pb={2}>
        <Typography variant="h5">Select theme</Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          Customize your workspace, make it more enjoyable and comfortable to work!{' '}
          <Link
            href=""
            onClick={(e) => e.preventDefault()}
            underline="hover"
          >
            Create custom theme
          </Link>
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
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
                  p: '1px',
                  flexDirection: 'column',
                  borderRadius: 'inherit',
                  boxShadow: `0 0 0 1px ${theme.palette.divider} inset`,

                  '&:hover': {
                    backgroundColor: 'background.paper',
                    boxShadow: `0 0 0 1px ${theme.palette.primary.main} inset`,
                  },

                  '&.Mui-selected': {
                    backgroundColor: 'background.paper',
                    boxShadow: `0 0 0 1px ${theme.palette.primary.main} inset`,

                    '&:hover': {
                      backgroundColor: 'background.paper',
                    },
                  },
                }}
                selected={selectedValue === item.id}
                onClick={() => setSelectedValue(item.id)}
              >
                <ListItemAvatar
                  sx={{
                    width: '100%',
                  }}
                >
                  <Avatar
                    variant="rounded"
                    sx={{
                      borderBottomRightRadius: 0,
                      borderBottomLeftRadius: 0,
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.neutral[100], 0.06)
                          : 'neutral.100',
                      width: '100%',
                      minHeight: 184,
                      p: 2,

                      '& div, img': {
                        width: '100%',
                        borderRadius: theme.shape.borderRadius + 'px',
                      },
                    }}
                  >
                    <PlaceholderBox flex={1} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    width: '100%',
                  }}
                  disableTypography
                  primary={
                    <Stack
                      direction="row"
                      alignItems="center"
                      width="100%"
                      px={2}
                      py={1}
                    >
                      <Radio
                        checked={selectedValue === item.id}
                        onChange={handleChange}
                        value={item.id}
                        size="small"
                        edge="start"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': item.title }}
                        color="primary"
                      />
                      <Typography
                        variant="h6"
                        noWrap
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                  }
                />
              </ListItemButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default RadioCardsImageGroup;
