import {
  alpha,
  Avatar,
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  LinearProgress,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { DefaultizedPieValueType } from '@mui/x-charts';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import { useTranslation } from 'react-i18next';

const BoxChartWrapperText = styled(Box)(({ theme }) => ({
  position: 'relative',

  '.ChartText': {
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    fontWeight: 700,
    position: 'absolute',
    height: '100px',
    width: '100px',
    fontSize: theme.typography.pxToRem(23),
    top: '50%',
    left: '50%',
    margin: '-65px 0 0 -50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

const AvatarUnhappy = styled(Avatar)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
  fontSize: theme.typography.pxToRem(26),
  width: theme.spacing(6),
  height: theme.spacing(6),
  border: `3px solid ${theme.palette.error.main}`,
  color: theme.palette.error.main,
  marginBottom: theme.spacing(0.5),
}));

const AvatarOk = styled(Avatar)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
  fontSize: theme.typography.pxToRem(26),
  width: theme.spacing(6),
  height: theme.spacing(6),
  border: `3px solid ${theme.palette.warning.main}`,
  color: theme.palette.warning.main,
  marginBottom: theme.spacing(0.5),
}));

const AvatarHappy = styled(Avatar)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
  fontSize: theme.typography.pxToRem(26),
  width: theme.spacing(6),
  height: theme.spacing(6),
  border: `3px solid ${theme.palette.success.main}`,
  color: theme.palette.success.main,
  marginBottom: theme.spacing(0.5),
}));

function HelpdeskSidebar() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const data = [
    { label: 'Everything is super!', color: theme.palette.success.main, value: 60 },
    { label: 'Bad, bad, bad', color: theme.palette.error.main, value: 15 },
    { label: "Meh, it's ok!", color: theme.palette.warning.main, value: 25 },
  ];

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };
  return (
    <Card>
      <Box p={{ xs: 2, sm: 3 }}>
        <Typography
          variant="h4"
          fontWeight={600}
        >
          {t('Customer Satisfaction')}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          {t('See how satisfied are customers with this helpdesk')}
        </Typography>
      </Box>
      <Divider />
      <Box p={{ xs: 2, sm: 3 }}>
        <BoxChartWrapperText
          display="flex"
          alignItems="center"
        >
          <div className="ChartText">
            <Typography
              variant="h3"
              fontWeight={600}
              align="center"
            >
              89.5%
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              align="center"
            >
              {t('very satisfied')}
            </Typography>
          </div>
          <PieChart
            series={[
              {
                data,
                innerRadius: 65,
                paddingAngle: 5,
                cornerRadius: 4,
                startAngle: -110,
                endAngle: 110,
                arcLabel: getArcLabel,
              },
            ]}
            width={260}
            height={260}
            margin={{ right: 0 }}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: theme.palette.common.white,
                fontWeight: 500,
                fontSize: 14,
              },
            }}
          />
        </BoxChartWrapperText>
        <Card
          sx={{
            backgroundColor:
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            mt: -5,
          }}
        >
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
              p={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <AvatarOk variant="rounded">😐</AvatarOk>
              <Box>
                <Typography
                  variant="h6"
                  color="warning.main"
                  fontWeight={600}
                >
                  {t("Meh, it's ok!")}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ maxWidth: 200 }}
                >
                  <b>232</b> {t('customers could use some improvements')}
                </Typography>
              </Box>
            </Box>
            <Box
              p={2}
              display={{ xs: 'flex', sm: 'none', md: 'flex' }}
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <AvatarHappy variant="rounded">😀</AvatarHappy>
              <Box>
                <Typography
                  variant="h5"
                  color="success.main"
                  fontWeight={600}
                >
                  {t('Everything is super!')}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ maxWidth: 200 }}
                >
                  {t('Further improvements available')}
                </Typography>
              </Box>
            </Box>
            <Box
              p={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <AvatarUnhappy variant="rounded">🙁</AvatarUnhappy>
              <Box>
                <Typography
                  variant="h6"
                  color="error.main"
                  fontWeight={600}
                >
                  {t('Bad, bad, bad')}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ maxWidth: 200 }}
                >
                  <b>5</b> {t('customers are unhappy')}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Card>
      </Box>

      <Divider />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Grid container>
          <Grid
            xs={12}
            md={6}
          >
            <Box p={{ xs: 2, sm: 3 }}>
              <Typography
                variant="h5"
                sx={{ pb: 3 }}
                lineHeight={1}
              >
                {t('Tickets by Channel')}
              </Typography>
              <Stack spacing={{ xs: 2, sm: 3 }}>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="h5"
                      fontWeight={400}
                    >
                      {t('Website')}{' '}
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="span"
                      >
                        (23)
                      </Typography>
                    </Typography>
                    <Typography variant="h5">20%</Typography>
                  </Box>
                  <LinearProgress
                    value={20}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="h5"
                      fontWeight={400}
                    >
                      {t('Email')}{' '}
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="span"
                      >
                        (23)
                      </Typography>
                    </Typography>
                    <Typography variant="h5">65%</Typography>
                  </Box>
                  <LinearProgress
                    value={65}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="h5"
                      fontWeight={400}
                    >
                      {t('Social Accounts')}{' '}
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="span"
                      >
                        (23)
                      </Typography>
                    </Typography>
                    <Typography variant="h5">15%</Typography>
                  </Box>
                  <LinearProgress
                    value={15}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Box p={{ xs: 2, sm: 3 }}>
              <Typography
                variant="h5"
                sx={{ pb: 3 }}
                lineHeight={1}
              >
                {t('Tickets by Topics')}
              </Typography>
              <Stack spacing={{ xs: 2, sm: 3 }}>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="h5"
                      fontWeight={400}
                    >
                      {t('Shipment')}{' '}
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="span"
                      >
                        (15)
                      </Typography>
                    </Typography>
                    <Typography variant="h5">20%</Typography>
                  </Box>
                  <LinearProgress
                    value={20}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="h5"
                      fontWeight={400}
                    >
                      {t('Troubleshooting')}{' '}
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="span"
                      >
                        (12)
                      </Typography>
                    </Typography>
                    <Typography variant="h5">52%</Typography>
                  </Box>
                  <LinearProgress
                    value={52}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="h5"
                      fontWeight={400}
                    >
                      {t('eCommerce Issues')}{' '}
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="span"
                      >
                        (66)
                      </Typography>
                    </Typography>
                    <Typography variant="h5">28%</Typography>
                  </Box>
                  <LinearProgress
                    value={28}
                    color="primary"
                    variant="determinate"
                  />
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default HelpdeskSidebar;
