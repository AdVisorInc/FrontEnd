import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Unstable_Grid2 as Grid,
  ListItemButton,
  Radio,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { CardAddActionDashed } from 'src/components/base/styles/card';

interface Item {
  id: number;
  image: string;
  cc: string;
  expires: string;
  title: string;
}

const MyCardsSelect = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const items: Item[] = [
    {
      id: 1,
      image: '/placeholders/logo/visa.png',
      cc: '6979',
      expires: '12/25',
      title: t('Visa'),
    },
    {
      id: 2,
      image: '/placeholders/logo/mastercard.png',
      cc: '5724',
      expires: '06/26',
      title: t('Mastercard'),
    },
  ];

  const [selectedValue, setSelectedValue] = useState<number>(items[0].id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(parseInt(event.target.value));
  };

  const handleDelete = () => {
    toast.success('The card has been removed successfully!');
  };

  return (
    <Grid
      container
      columns={24}
      spacing={2}
    >
      {items.map((item) => (
        <Grid
          key={item.id}
          xs={24}
          md={12}
          lg={9}
        >
          <Card
            elevation={0}
            sx={{
              border: 0,
              position: 'relative',
            }}
          >
            <ListItemButton
              sx={{
                p: '1px',
                flexDirection: 'column',
                borderRadius: 'inherit',
                boxShadow: `0 0 0 1px ${theme.palette.divider} inset`,
                background:
                  theme.palette.mode === 'dark'
                    ? theme.palette.neutral[900]
                    : theme.palette.neutral[50],

                '&:hover': {
                  backgroundColor: 'background.paper',
                  boxShadow: `0 0 0 1px ${theme.palette.primary.main} inset`,
                },

                '&.Mui-selected': {
                  backgroundColor: 'background.paper',
                  boxShadow: `0 0 0 2px ${theme.palette.primary.main} inset`,

                  '&:hover': {
                    backgroundColor: 'background.paper',
                  },
                },
              }}
              selected={selectedValue === item.id}
              onClick={() => setSelectedValue(item.id)}
            >
              <Box
                display="flex"
                alignItems="center"
                width="100%"
                px={2}
                pt={2}
                pb={1}
              >
                <Card
                  elevation={8}
                  sx={{
                    display: 'flex',
                    px: item.id === 2 ? 2 : 1,
                    mr: 2,
                    py: 1.5,
                    img: {
                      width: 'auto',
                      height: 28,
                    },
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </Card>
                <Box flex={1}>
                  <Typography
                    variant="h4"
                    fontWeight={500}
                    lineHeight={1}
                    gutterBottom
                  >
                    •••• {item.cc}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    color="text.secondary"
                  >
                    {t('Expires')}:{' '}
                    <Typography
                      component="span"
                      variant="h6"
                      color="text.primary"
                    >
                      {item.expires}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
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
                  inputProps={{ 'aria-label': 'Set' + item.title + 'as primary card' }}
                  color="primary"
                />
                <Typography
                  variant="h6"
                  noWrap
                >
                  {t('Primary')}
                </Typography>
              </Stack>
              <Tooltip
                arrow
                title={t('Remove this card')}
              >
                <ButtonIcon
                  sx={{
                    position: 'absolute',
                    top: theme.spacing(1),
                    right: theme.spacing(1),
                  }}
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={() => handleDelete()}
                >
                  <DeleteTwoToneIcon fontSize="small" />
                </ButtonIcon>
              </Tooltip>
            </ListItemButton>
          </Card>
        </Grid>
      ))}
      <Grid
        xs={24}
        lg={6}
      >
        <CardAddActionDashed
          variant="outlined"
          elevation={0}
          sx={{ minWidth: 160, flex: 1 }}
        >
          <CardActionArea>
            <CardContent>
              <Stack
                spacing={0.5}
                justifyContent="center"
                direction="column"
                alignItems="center"
              >
                <AddRoundedIcon
                  sx={{
                    color: 'primary.main',
                  }}
                />
                <Box>
                  <Typography
                    textAlign="center"
                    variant="h5"
                  >
                    Add new card
                  </Typography>
                  <Typography
                    textAlign="center"
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    Click to add a new card
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </CardActionArea>
        </CardAddActionDashed>
      </Grid>
    </Grid>
  );
};

export default MyCardsSelect;
