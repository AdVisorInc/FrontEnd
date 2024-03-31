import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import DirectionsWalkTwoToneIcon from '@mui/icons-material/DirectionsWalkTwoTone';
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone';
import NightlightTwoToneIcon from '@mui/icons-material/NightlightTwoTone';
import {
  alpha,
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const IconWrapper = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.main,
  width: theme.spacing(8),
  height: theme.spacing(8),
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(1.5, 2, 1),
  position: 'relative',

  '&::after': {
    position: 'absolute',
    content: '" "',
    borderRadius: 55,
    border: theme.palette.divider,
    borderWidth: 1,
    borderStyle: 'solid',
    width: theme.spacing(10),
    height: theme.spacing(10),
    left: theme.spacing(-1),
    top: theme.spacing(-1),
  },

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: theme.shadows[1],

    '& + .MuiTypography-root': {
      color: 'text.primary',
    },

    '&::after': {
      borderColor: alpha(theme.palette.primary.light, 0.2),
    },
  },
}));

function Component() {
  const { t } = useTranslation();

  return (
    <>
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4">{t('Scenes')}</Typography>
        <Tooltip
          placement="top"
          title={t('Add new scene')}
          arrow
        >
          <ButtonIcon
            color="secondary"
            sx={{
              color: 'primary.main',
            }}
            variant="outlined"
            startIcon={<AddTwoToneIcon />}
          />
        </Tooltip>
      </Box>
      <Card>
        <CardContent sx={{ p: 1 }}>
          <Stack
            spacing={{ xs: 2, sm: 3 }}
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-evenly"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <IconWrapper>
                <MusicNoteTwoToneIcon fontSize="large" />
              </IconWrapper>
              <Typography
                variant="h5"
                sx={{ mt: 1 }}
                textAlign="center"
                color="text.secondary"
              >
                {t('Start music')}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <IconWrapper>
                <NightlightTwoToneIcon fontSize="large" />
              </IconWrapper>
              <Typography
                variant="h5"
                sx={{ mt: 1 }}
                textAlign="center"
                color="text.secondary"
              >
                {t('Going to sleep')}
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <IconWrapper>
                <DirectionsWalkTwoToneIcon fontSize="large" />
              </IconWrapper>
              <Typography
                variant="h5"
                sx={{ mt: 1 }}
                textAlign="center"
                color="text.secondary"
              >
                {t('Arriving home')}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default Component;
