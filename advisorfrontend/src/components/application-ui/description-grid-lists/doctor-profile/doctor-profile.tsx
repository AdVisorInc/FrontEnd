import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Rating,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const theme = useTheme();
  const user = {
    avatar: '/avatars/3.png',
    name: 'Ethan Donovan',
    jobTitle: 'Principal Engineer',
  };

  return (
    <Card
      sx={{ p: 2 }}
      variant="outlined"
      elevation={0}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Avatar
          sx={{
            mx: 'auto',
            mb: 2,
            mt: 4,
            width: theme.spacing(10),
            height: theme.spacing(10),
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
        <Typography
          variant="h4"
          noWrap
          lineHeight={1.2}
        >
          {user.name}
        </Typography>
        <Typography
          variant="subtitle1"
          noWrap
          color="text.secondary"
        >
          {t('Neurosurgeon')}
        </Typography>
      </Box>
      <Divider
        sx={{
          mt: 3,
        }}
      />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-evenly"
        divider={
          <Divider
            flexItem
            orientation={smUp ? 'vertical' : 'horizontal'}
          />
        }
      >
        <Box p={2}>
          <Typography
            variant="h5"
            noWrap
          >
            {t('Overall Rating')}
          </Typography>
          <Typography
            variant="h2"
            noWrap
          >
            4.9
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
        </Box>
        <Box p={2}>
          <Typography
            variant="h5"
            noWrap
          >
            {t('Total Patients')}
          </Typography>
          <Typography
            variant="h2"
            noWrap
            gutterBottom
          >
            275
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ mb: 2 }} />
      <Button
        variant="contained"
        fullWidth
        endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
      >
        {t('View profile details')}
      </Button>
    </Card>
  );
}

export default Component;
