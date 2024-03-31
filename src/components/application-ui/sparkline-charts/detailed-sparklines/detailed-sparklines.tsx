import {
  Box,
  Button,
  Card,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const ButtonWrapper = styled(Button)(() => ({
  transform: 'translateY(0px)',

  '&:active, &:hover': {
    transform: 'translateY(-2px)',
  },
}));

const generateRandomData = (): number[] =>
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 500));

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
        <Card>
          <Box
            px={2}
            pt={2}
            pb={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              fontWeight={600}
            >
              {t('Bandwidth allocation')}
            </Typography>
            <ButtonWrapper
              variant="outlined"
              size="small"
              color="secondary"
            >
              {t('View all')}
            </ButtonWrapper>
          </Box>
          <Box
            px={2}
            pt={2}
          >
            <Typography
              sx={{
                color: theme.palette.success.main,
                fontSize: theme.typography.pxToRem(40),
              }}
              variant="h2"
            >
              12,54k
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('Successful deployments')}
            </Typography>
          </Box>
          <Box>
            <SparkLineChart
              data={generateRandomData()}
              height={150}
              curve="monotoneY"
              showHighlight
              area
              margin={{ top: 12, bottom: 0, left: 0, right: 0 }}
              colors={[theme.palette.success.main]}
              sx={{
                '.MuiLineElement-root': { strokeWidth: 1, strokeLinecap: 'round' },
                '.MuiAreaElement-root': {
                  fillOpacity: 0.08,
                },
              }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <Box
            px={2}
            pt={2}
            pb={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              fontWeight={600}
            >
              {t('Production servers')}
            </Typography>
            <ButtonWrapper
              variant="outlined"
              size="small"
              color="secondary"
            >
              {t('View all')}
            </ButtonWrapper>
          </Box>
          <Box
            px={2}
            pt={2}
          >
            <Typography
              color="error.main"
              variant="h2"
            >
              +35.6%
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('Returning clients reports')}
            </Typography>
          </Box>
          <Box>
            <SparkLineChart
              data={generateRandomData()}
              height={150}
              curve="linear"
              area
              margin={{ top: 12, bottom: 0, left: 0, right: 0 }}
              colors={[theme.palette.error.main]}
              sx={{
                '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' },
                '.MuiAreaElement-root': {
                  fillOpacity: 0.2,
                },
              }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <Box
            px={2}
            pt={2}
            pb={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              fontWeight={600}
            >
              {t('Returning customers')}
            </Typography>
            <ButtonWrapper
              variant="outlined"
              size="small"
              color="secondary"
            >
              {t('View all')}
            </ButtonWrapper>
          </Box>
          <Box
            px={2}
            pt={2}
          >
            <Typography
              color="warning.main"
              variant="h2"
            >
              +12,45%
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('Pending services integrations')}
            </Typography>
          </Box>
          <Box>
            <SparkLineChart
              data={generateRandomData()}
              height={150}
              curve="natural"
              area
              margin={{ top: 6, bottom: 0, left: 0, right: 0 }}
              colors={[theme.palette.warning.main]}
              sx={{
                '.MuiLineElement-root': { strokeWidth: 2, strokeLinecap: 'round' },
                '.MuiAreaElement-root': {
                  fillOpacity: 1,
                },
              }}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
