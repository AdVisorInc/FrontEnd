import {
  alpha,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const IndicatorWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: '100px',
  height: theme.spacing(1),
  width: theme.spacing(6),
  margin: theme.spacing(1, 0),
}));

function Component() {
  const { t } = useTranslation();

  return (
    <Card
      elevation={0}
      variant="outlined"
    >
      <CardHeader
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
        title={t('Revenue')}
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
        >
          <Grid
            xs={12}
            sm={6}
          >
            <CardContent>
              <Typography variant="h3">$15,394.58</Typography>
              <IndicatorWrapper />
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                {t('This month')}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            xs={12}
            sm={6}
          >
            <CardContent>
              <Typography variant="h3">$784.34</Typography>
              <IndicatorWrapper />
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                {t('This week')}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          p: { xs: 2, sm: 3 },
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Box>
          <Typography
            variant="caption"
            fontWeight={600}
            component="div"
            gutterBottom
            color="text.secondary"
          >
            {t('Total')}
          </Typography>
          <Typography variant="h3">$67,384.58</Typography>
        </Box>
      </CardActions>
    </Card>
  );
}

export default Component;
