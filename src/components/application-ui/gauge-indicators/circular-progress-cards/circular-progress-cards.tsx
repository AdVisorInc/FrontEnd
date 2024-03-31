import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  alpha,
  Badge,
  Box,
  Card,
  Unstable_Grid2 as Grid,
  IconButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useTranslation } from 'react-i18next';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
}));

const LabelError = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  background: theme.palette.error.main,
  color: theme.palette.error.contrastText,
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(16),
  fontWeight: 500,
  padding: theme.spacing(1, 2),
  borderRadius: '80px',
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const data = {
    percentage1: 63,
    percentage2: 87,
    percentage3: 75,
  };

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
            position: 'relative',
          }}
        >
          <Typography
            sx={{
              py: { xs: 2, sm: 3 },
            }}
            fontWeight={600}
            variant="h5"
            textAlign="center"
          >
            {t('Storage Status')}
          </Typography>
          <CardActions>
            <IconButton
              size="small"
              color="secondary"
            >
              <MoreVertTwoToneIcon />
            </IconButton>
          </CardActions>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '170px',
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={1}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 4,
                trailColor: alpha(theme.palette.primary.light, 0.4),
                pathColor: theme.palette.primary.dark,
                strokeLinecap: 'round',
              })}
              strokeWidth={9}
              value={data.percentage1}
            >
              <Typography
                color="primary.dark"
                sx={{
                  mt: -1,
                }}
                variant="h3"
              >
                {`${data.percentage1}%`}
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
          <Stack
            spacing={1}
            direction="row"
            my={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <InlineBadge>
              <Badge
                variant="dot"
                color="primary"
                sx={{
                  mr: 0.5,
                  '& .MuiBadge-badge': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              />
              <Typography
                variant="subtitle1"
                color="primary.dark"
                fontWeight={500}
              >
                {t('Available')}
              </Typography>
            </InlineBadge>
            <InlineBadge>
              <Badge
                variant="dot"
                color="primary"
                sx={{
                  mr: 0.5,
                  '& .MuiBadge-badge': {
                    backgroundColor: alpha(theme.palette.primary.light, 0.4),
                  },
                }}
              />
              <Typography
                variant="subtitle1"
                fontWeight={500}
                sx={{
                  color: alpha(theme.palette.primary.light, 0.8),
                }}
              >
                {t('Used')}
              </Typography>
            </InlineBadge>
          </Stack>
          <Box
            mx={{ xs: 2, sm: 3 }}
            mb={{ xs: 2, sm: 3 }}
          >
            <ButtonSoft
              fullWidth
              sx={{
                textTransform: 'uppercase',
              }}
            >
              {t('Increase storage')}
            </ButtonSoft>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            position: 'relative',
          }}
        >
          <Typography
            sx={{
              py: { xs: 2, sm: 3 },
            }}
            fontWeight={600}
            variant="h5"
            textAlign="center"
          >
            {t('Active Issues')}
          </Typography>
          <CardActions>
            <IconButton
              size="small"
              color="secondary"
            >
              <MoreVertTwoToneIcon />
            </IconButton>
          </CardActions>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '170px',
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2.2 + 1 / 5.85,
                trailColor: alpha(theme.palette.error.main, 0.15),
                pathColor: theme.palette.error.main,
                strokeLinecap: 'round',
              })}
              strokeWidth={6}
              value={data.percentage2}
            >
              <LabelError
                sx={{
                  mt: '-15px',
                }}
              >
                765
              </LabelError>
            </CircularProgressbarWithChildren>
          </Box>
          <Box my={2}>
            <Typography
              textAlign="center"
              variant="subtitle1"
              fontWeight={500}
            >
              {t('These issues require immediate action')} !
            </Typography>
          </Box>
          <Box
            mx={{ xs: 2, sm: 3 }}
            mb={{ xs: 2, sm: 3 }}
          >
            <PulseBadge
              variant="dot"
              color="error"
              sx={{
                width: '100%',
              }}
            >
              <ButtonSoft
                fullWidth
                variant="text"
                color="error"
                sx={{
                  textTransform: 'uppercase',
                }}
              >
                {t('View all issues')}
              </ButtonSoft>
            </PulseBadge>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            position: 'relative',
          }}
        >
          <Typography
            sx={{
              py: { xs: 2, sm: 3 },
            }}
            fontWeight={600}
            variant="h5"
            textAlign="center"
          >
            {t('Email Marketing')}
          </Typography>
          <CardActions>
            <IconButton
              size="small"
              color="secondary"
            >
              <MoreVertTwoToneIcon />
            </IconButton>
          </CardActions>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '170px',
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={1}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 5.7,
                trailColor: alpha(theme.palette.secondary.main, 0.1),
                pathColor: theme.palette.success.main,
                strokeLinecap: 'round',
              })}
              strokeWidth={4}
              value={data.percentage3}
            >
              <Typography
                color="warning"
                sx={{
                  mt: '-15px',
                }}
                variant="h2"
              >
                {data.percentage3}
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
          <Stack
            spacing={1}
            direction="row"
            my={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <InlineBadge>
              <Badge
                variant="dot"
                color="primary"
                sx={{
                  mr: 0.5,
                  '& .MuiBadge-badge': {
                    backgroundColor: theme.palette.success.main,
                  },
                }}
              />
              <Typography
                variant="subtitle1"
                color="success.main"
                fontWeight={500}
              >
                75 {t('emails sent successfully')}
              </Typography>
            </InlineBadge>
          </Stack>
          <Box
            mx={{ xs: 2, sm: 3 }}
            mb={{ xs: 2, sm: 3 }}
          >
            <ButtonSoft
              fullWidth
              color="secondary"
              sx={{
                textTransform: 'uppercase',
              }}
            >
              {t('Generate report')}
            </ButtonSoft>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
