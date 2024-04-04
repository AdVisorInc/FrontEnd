import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import {
  alpha,
  Box,
  Divider,
  Link,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function ListWithActions() {
  const { t } = useTranslation();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="space-evenly"
      alignItems="stretch"
      divider={
        <Divider
          orientation={smUp ? 'vertical' : 'horizontal'}
          flexItem
        />
      }
      spacing={0}
    >
      <Box
        href=""
        onClick={(e) => e.preventDefault()}
        component={Link}
        flex={1}
        sx={{
          position: 'relative',
          '&:hover': {
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          },
          color: 'text.primary',
        }}
        py={4}
        px={2}
        display="flex"
        alignItems="flex-start"
      >
        <ArrowOutwardRoundedIcon
          sx={{
            color: 'primary.main',
            position: 'absolute',
            top: theme.spacing(2),
            right: theme.spacing(2),
          }}
        />
        <MonetizationOnTwoToneIcon
          sx={{
            color: 'primary.main',
          }}
          fontSize="large"
        />
        <Box ml={1}>
          <Typography variant="h3">$14,264</Typography>
          <Typography
            noWrap
            variant="subtitle1"
          >
            {t('total value')}
          </Typography>
        </Box>
      </Box>
      <Box
        href=""
        onClick={(e) => e.preventDefault()}
        component={Link}
        flex={1}
        sx={{
          position: 'relative',
          '&:hover': {
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          },
          color: 'text.primary',
        }}
        py={4}
        px={2}
        display="flex"
        alignItems="flex-start"
      >
        <ArrowOutwardRoundedIcon
          sx={{
            color: 'primary.main',
            position: 'absolute',
            top: theme.spacing(2),
            right: theme.spacing(2),
          }}
        />
        <PersonTwoToneIcon
          sx={{
            color: 'error.main',
          }}
          fontSize="large"
        />
        <Box ml={1}>
          <Typography variant="h3">6,598</Typography>
          <Typography
            noWrap
            variant="subtitle1"
            color="text.secondary"
          >
            {t('new members')}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default ListWithActions;
