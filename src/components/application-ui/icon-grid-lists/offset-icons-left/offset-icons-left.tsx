import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import LocalConvenienceStoreTwoToneIcon from '@mui/icons-material/LocalConvenienceStoreTwoTone';
import SportsBasketballTwoToneIcon from '@mui/icons-material/SportsBasketballTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

const ButtonWrapper = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 3.5),
  display: 'flex',
  justifyContent: 'space-between',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,

  '&:hover': {
    background:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.neutral[25], 0.02)
        : theme.palette.neutral[25],
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[400] : theme.palette.neutral[800],
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            pt: 3.5,
            mt: 4,
          }}
        >
          <AvatarState
            useShadow
            state="success"
            variant="rounded"
            sx={{
              width: theme.spacing(8),
              height: theme.spacing(8),
              position: 'absolute',
              top: theme.spacing(-4),
              left: theme.spacing(3.5),
            }}
          >
            <AssessmentTwoToneIcon fontSize="large" />
          </AvatarState>
          <Box p={3.5}>
            <Typography
              variant="h4"
              sx={{
                mb: 1,
              }}
            >
              Lightweight
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
            >
              You can build unlimited layout styles using any of the 500+ included components and
              elements...
            </Typography>
          </Box>
          <Divider />
          <ButtonWrapper
            color="success"
            variant="text"
            fullWidth
            endIcon={<ChevronRightTwoToneIcon />}
          >
            {t('Manage my account')}
          </ButtonWrapper>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            pt: 3.5,
            mt: 4,
          }}
        >
          <AvatarState
            useShadow
            state="info"
            variant="rounded"
            sx={{
              width: theme.spacing(8),
              height: theme.spacing(8),
              position: 'absolute',
              top: theme.spacing(-4),
              left: theme.spacing(3.5),
            }}
          >
            <SportsBasketballTwoToneIcon fontSize="large" />
          </AvatarState>
          <Box p={3.5}>
            <Typography
              variant="h4"
              sx={{
                mb: 1,
              }}
            >
              Starter templates
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
            >
              You can build unlimited layout styles using any of the 500+ included components and
              elements...
            </Typography>
          </Box>
          <Divider />
          <ButtonWrapper
            color="info"
            variant="text"
            fullWidth
            endIcon={<ChevronRightTwoToneIcon />}
          >
            {t('Create sales reports')}
          </ButtonWrapper>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            overflow: 'visible',
            position: 'relative',
            pt: 3.5,
            mt: 4,
          }}
        >
          <AvatarState
            useShadow
            state="primary"
            variant="rounded"
            sx={{
              width: theme.spacing(8),
              height: theme.spacing(8),
              position: 'absolute',
              top: theme.spacing(-4),
              left: theme.spacing(3.5),
              background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
            }}
          >
            <LocalConvenienceStoreTwoToneIcon fontSize="large" />
          </AvatarState>
          <Box p={3.5}>
            <Typography
              variant="h4"
              sx={{
                mb: 1,
              }}
            >
              Simple to use
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
            >
              You can build unlimited layout styles using any of the 500+ included components and
              elements...
            </Typography>
          </Box>
          <Divider />
          <ButtonWrapper
            color="primary"
            variant="text"
            fullWidth
            endIcon={<ChevronRightTwoToneIcon />}
          >
            {t('View all profiles')}
          </ButtonWrapper>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
