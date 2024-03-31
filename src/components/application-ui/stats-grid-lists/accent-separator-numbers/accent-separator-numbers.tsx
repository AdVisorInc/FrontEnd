import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import {
  alpha,
  Box,
  Card,
  CardActionArea,
  Divider,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const DividerPrimary = styled(Divider)(({ theme }) => ({
  width: '50px',
  background: theme.palette.primary.main,
  height: '6px',
  borderRadius: '50px',
}));

const DividerWarning = styled(Divider)(({ theme }) => ({
  width: '50px',
  background: theme.palette.warning.main,
  height: '6px',
  borderRadius: '50px',
}));

const DividerSuccess = styled(Divider)(({ theme }) => ({
  width: '50px',
  background: theme.palette.success.main,
  height: '6px',
  borderRadius: '50px',
}));

const DividerError = styled(Divider)(({ theme }) => ({
  width: '50px',
  background: theme.palette.error.main,
  height: '6px',
  borderRadius: '50px',
}));

const CardWrapper = styled(Card)(({ theme }) => ({
  transition: theme.transitions.create(['transform', 'box-shadow']),
  transform: 'scale(1)',
  position: 'relative',
  zIndex: 5,

  '&:hover': {
    zIndex: 6,
    boxShadow: `${theme.palette.background.default} 0 0.56875rem 3.3rem,
                ${alpha(theme.palette.common.black, 0.07)} 0 0.9975rem 2.4rem,
                ${alpha(theme.palette.common.black, 0.1)} 0 0.35rem 1rem,
                ${alpha(theme.palette.common.black, 0.15)} 0 0.225rem 0.8rem`,
    transform: 'scale(1.01)',
  },
}));

const CardActionAreaWrapper = styled(CardActionArea)(() => ({
  '.MuiCardActionArea-focusHighlight': {
    background: 'transparent',
  },

  '&:hover': {
    '.MuiCardActionArea-focusHighlight': {
      opacity: 0,
    },
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
        sm={6}
        md={3}
      >
        <CardWrapper>
          <CardActionAreaWrapper
            sx={{
              p: { xs: 2, sm: 3 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="h1">31</Typography>
              <DividerPrimary
                sx={{
                  my: 2,
                }}
              />
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{
                  fontSize: theme.typography.pxToRem(14),
                  textTransform: 'uppercase',
                }}
              >
                {t('Completed tasks')}
              </Typography>
            </Box>
            <ChevronRightTwoToneIcon />
          </CardActionAreaWrapper>
        </CardWrapper>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={3}
      >
        <CardWrapper>
          <CardActionAreaWrapper
            sx={{
              p: { xs: 2, sm: 3 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography variant="h1">18</Typography>
              <DividerError
                sx={{
                  my: 2,
                }}
              />
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{
                  fontSize: theme.typography.pxToRem(14),
                  textTransform: 'uppercase',
                }}
              >
                {t('Requests sent')}
              </Typography>
            </Box>
            <ChevronRightTwoToneIcon />
          </CardActionAreaWrapper>
        </CardWrapper>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={3}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h1"
            fontWeight={600}
          >
            29
          </Typography>
          <DividerSuccess
            sx={{
              mx: 'auto',
              my: 2,
            }}
          />
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              textTransform: 'uppercase',
            }}
          >
            {t('Bugfixes')}
          </Typography>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={3}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h1"
            fontWeight={600}
          >
            764
          </Typography>
          <DividerWarning
            sx={{
              mx: 'auto',
              my: 2,
            }}
          />
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              textTransform: 'uppercase',
            }}
          >
            {t('Tickets')}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
