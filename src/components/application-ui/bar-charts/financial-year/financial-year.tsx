import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  Box,
  Card,
  CardHeader,
  Chip,
  Divider,
  IconButton,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

const CardHeaderWrapper = styled(CardHeader)(({ theme }) => ({
  position: 'relative',

  '.MuiCardHeader-action': {
    position: 'absolute',
    right: theme.spacing(3),
    top: theme.spacing(3),
  },
}));
const chartValues = [1008, 940, 1010, 821, 1035, 1030, 957];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const chartValues2 = [648, 745, 897, 743, 635, 842, 811];

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardHeaderWrapper
        disableTypography
        sx={{
          p: { xs: 2, sm: 3 },
        }}
        action={
          <IconButton
            size="small"
            color="secondary"
          >
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={
          <>
            <Typography
              component="div"
              textAlign="center"
              variant="h4"
            >
              {t('Financial year')}
            </Typography>
          </>
        }
        subheader={
          <>
            <Typography
              component="div"
              textAlign="center"
              fontWeight={400}
              color="text.secondary"
              variant="h5"
            >
              {t('Expenses statistics to date')}
            </Typography>
          </>
        }
      />
      <Divider />
      <Typography
        variant="h1"
        textAlign="center"
        fontWeight={700}
        sx={{
          py: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <CountUp
          start={0}
          end={458.695}
          duration={4}
          separator=""
          delay={3}
          decimals={3}
          decimal=","
          prefix="$"
          suffix=""
        />
      </Typography>
      <Divider />
      <Stack
        sx={{
          mt: { xs: 2, sm: 3, md: 4 },
        }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box>
          <Typography
            component="h6"
            variant="subtitle2"
            color="text.secondary"
            textAlign="center"
            gutterBottom
          >
            {t('Current month')}
          </Typography>
          <Typography
            component="h6"
            variant="subtitle1"
            fontWeight={600}
            textAlign="center"
          >
            <Box
              component="span"
              pr={1}
            >
              <small>$</small> 46,594
            </Box>
            <Chip
              label="-8%"
              color="error"
            />
          </Typography>
        </Box>
        <Box>
          <Typography
            component="h6"
            variant="subtitle2"
            color="text.secondary"
            textAlign="center"
            gutterBottom
          >
            {t('Last year')}
          </Typography>
          <Typography
            component="h6"
            variant="subtitle1"
            fontWeight={600}
            textAlign="center"
          >
            <Box
              component="span"
              pr={1}
            >
              <small>$</small> 34,742
            </Box>
            <Chip
              label="+14%"
              color="success"
            />
          </Typography>
        </Box>
      </Stack>
      <Typography
        component="div"
        sx={{
          mt: { xs: 2, sm: 3, md: 4 },
        }}
        textAlign="center"
        variant="h4"
      >
        {t('Monthly report')}
      </Typography>
      <Box p={{ xs: 0, sm: 1, md: 3 }}>
        <BarChart
          height={320}
          margin={{ left: smUp ? 54 : 12, top: 48, right: smUp ? 24 : 12 }}
          series={[
            {
              data: chartValues,
              label: 'Completeted',
              color: theme.palette.secondary.main,
            },
            {
              data: chartValues2,
              label: 'Cancelled',
              color: theme.palette.warning.light,
            },
          ]}
          xAxis={[
            {
              scaleType: 'band',
              data: xLabels,
              //@ts-ignore
              categoryGapRatio: 0.4,
              barGapRatio: 0.3,
            },
          ]}
          sx={{
            '.MuiBarElement-root': {
              fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
              ry: theme.shape.borderRadius / 1.5,
            },
            '.MuiChartsAxis-left': {
              display: { xs: 'none', sm: 'block' },
            },
          }}
        />
      </Box>
    </Card>
  );
}

export default Component;
