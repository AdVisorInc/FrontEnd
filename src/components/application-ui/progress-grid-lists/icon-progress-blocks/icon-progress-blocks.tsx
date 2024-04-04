import BugReportTwoToneIcon from '@mui/icons-material/BugReportTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  Unstable_Grid2 as Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
    >
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            p: 2.5,
            flexGrow: 1,
          }}
        >
          <Box
            mb={2.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar
              variant="rounded"
              sx={{
                width: 44,
                height: 44,
                p: 0,
                background: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
              }}
            >
              <ShowChartTwoToneIcon fontSize="small" />
            </Avatar>
            <Box
              sx={{
                textAlign: 'right',
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                lineHeight={1.2}
              >
                $3,495
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                {t('Sales')}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{
              mb: 0.6,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h6"
              fontWeight={400}
              color="text.secondary"
            >
              {t('Remaining')}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.primary.main,
              }}
              variant="h4"
            >
              55%
            </Typography>
          </Box>
          <LinearProgressSlim
            variant="determinate"
            value={45}
          />
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            p: 2.5,
            flexGrow: 1,
          }}
        >
          <Box
            mb={2.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar
              variant="rounded"
              sx={{
                width: 44,
                height: 44,
                p: 0,
                background: alpha(theme.palette.success.main, 0.1),
                color: theme.palette.success.main,
              }}
            >
              <BugReportTwoToneIcon fontSize="small" />
            </Avatar>
            <Box
              sx={{
                textAlign: 'right',
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                lineHeight={1.2}
              >
                762
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                {t('Reports')}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{
              mb: 0.6,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h6"
              fontWeight={400}
              color="text.secondary"
            >
              {t('Remaining')}
            </Typography>
            <Typography
              sx={{ color: 'success.main' }}
              variant="h4"
            >
              35%
            </Typography>
          </Box>
          <LinearProgressSlim
            variant="determinate"
            value={65}
            color="success"
          />
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            p: 2.5,
            flexGrow: 1,
          }}
        >
          <Box
            mb={2.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar
              variant="rounded"
              sx={{
                width: 44,
                height: 44,
                p: 0,
                background: alpha(theme.palette.error.main, 0.1),
                color: theme.palette.error.main,
              }}
            >
              <PeopleAltTwoToneIcon fontSize="small" />
            </Avatar>
            <Box
              sx={{
                textAlign: 'right',
              }}
            >
              <Typography
                variant="h4"
                fontWeight={600}
                lineHeight={1.2}
              >
                12,543k
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                {t('Visitors')}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{
              mb: 0.6,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h6"
              fontWeight={400}
              color="text.secondary"
            >
              {t('Remaining')}
            </Typography>
            <Typography
              sx={{
                color: 'error.main',
              }}
              variant="h4"
            >
              75%
            </Typography>
          </Box>
          <LinearProgressSlim
            variant="determinate"
            value={25}
            color="error"
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
