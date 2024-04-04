import { alpha, Box, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  LinearProgressBlack,
  LinearProgressDark,
  LinearProgressSlim,
} from 'src/components/base/styles/progress-bar';

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
        md={6}
        lg={3}
      >
        <Card
          sx={{
            pt: 2.5,
            pb: 2,
            px: 2.5,
            flexGrow: 1,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            mb={1}
            sx={{
              width: '100%',
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                pr: 1.5,
              }}
              variant="h3"
            >
              54%
            </Typography>
            <Box flex={1}>
              <LinearProgressSlim
                variant="determinate"
                value={68}
              />
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            noWrap
            color="text.secondary"
          >
            {t('Expenses target')}
          </Typography>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            pt: 2.5,
            pb: 2,
            px: 2.5,
            flexGrow: 1,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            mb={1}
            sx={{
              width: '100%',
            }}
          >
            <Typography
              sx={{
                color: theme.palette.success.main,
                pr: 1.5,
              }}
              variant="h3"
            >
              68%
            </Typography>
            <Box flex={1}>
              <LinearProgressSlim
                color="success"
                value={54}
              />
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            noWrap
            color="text.secondary"
          >
            {t('Sales target')}
          </Typography>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            pt: 2.5,
            pb: 2,
            px: 2.5,
            flexGrow: 1,
            background: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%) !important',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            mb={1}
            sx={{
              width: '100%',
            }}
          >
            <Typography
              sx={{
                pr: 1.5,
              }}
              color="common.black"
              variant="h3"
            >
              32%
            </Typography>
            <Box flex={1}>
              <LinearProgressBlack value={32} />
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            color="common.black"
            noWrap
          >
            {t('Income target')}
          </Typography>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            pt: 2.5,
            pb: 2,
            px: 2.5,
            flexGrow: 1,
            background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            mb={1}
            sx={{
              width: '100%',
            }}
          >
            <Typography
              sx={{
                color: theme.palette.info.main,
                pr: 1.5,
              }}
              variant="h3"
            >
              71%
            </Typography>
            <Box flex={1}>
              <LinearProgressDark
                variant="determinate"
                value={71}
              />
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: alpha(theme.palette.common.white, 0.7),
            }}
            noWrap
          >
            {t('Spendings target')}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
