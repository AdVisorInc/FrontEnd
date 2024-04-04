import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import BugReportTwoToneIcon from '@mui/icons-material/BugReportTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import UpdateTwoToneIcon from '@mui/icons-material/UpdateTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';

interface TicketInfo {
  title: string;
  buttonLabel: string;
  IconComponent: React.ComponentType;
  data: {
    curve: any;
    color: any;
    label: string;
    data: number[];
    area?: boolean;
    showMark?: boolean;
  };
  current: number;
  previous?: number;
}

const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const IconWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.primary.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  '.MuiSvgIcon-fontSizeMedium': {
    fontSize: theme.typography.pxToRem(45),
  },
}));

const ChartWrapper = styled(Box)(() => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
}));

const BottomWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  left: 0,
  right: 0,
}));

function UnresolvedTickets() {
  const { t } = useTranslation();
  const theme = useTheme();

  const ticketInfos: TicketInfo[] = [
    {
      title: t('Unresolved Tickets'),
      buttonLabel: 'View tickets',
      IconComponent: BugReportTwoToneIcon,
      data: {
        curve: 'linear',
        color: theme.palette.secondary.main,
        label: 'Unresolved Tickets',
        data: [21, 23, 33, 38, 40, 31, 26, 37, 10, 14, 25, 22],
        showMark: false,
        area: true,
      },
      current: 27,
      previous: 43,
    },
    {
      title: t('Pending Questions'),
      buttonLabel: 'View questions',
      IconComponent: QuestionAnswerTwoToneIcon,
      data: {
        curve: 'linear',
        color: theme.palette.secondary.main,
        label: 'Pending Questions',
        data: [36, 31, 15, 21, 12, 40, 10, 19, 16, 27, 34, 14],
        showMark: false,
        area: true,
      },
      current: 7,
    },
    {
      title: t('Updated Tickets'),
      buttonLabel: 'View tickets',
      IconComponent: UpdateTwoToneIcon,
      data: {
        curve: 'linear',
        color: theme.palette.secondary.main,
        label: 'Updated Tickets',
        data: [28, 31, 26, 32, 27, 22, 37, 13, 30, 10, 16, 21],
        showMark: false,
        area: true,
      },
      current: 51,
      previous: 39,
    },
    {
      title: t('Assigned Tasks'),
      buttonLabel: 'View tasks',
      IconComponent: AssignmentTurnedInTwoToneIcon,
      data: {
        curve: 'linear',
        color: theme.palette.secondary.main,
        label: 'Assigned Tasks',
        data: [35, 17, 14, 38, 19, 36, 25, 26, 23, 22, 31, 30],
        showMark: false,
        area: true,
      },
      current: 91,
      previous: 76,
    },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      {ticketInfos.map((ticketInfo, idx) => (
        <Grid
          key={idx}
          xs={12}
          md={6}
        >
          <Card
            sx={{
              position: 'relative',
              minHeight: 400,
            }}
          >
            <Box sx={{ p: { xs: 2, sm: 3 } }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ pb: 2 }}
              >
                <Typography
                  variant="h3"
                  fontWeight={500}
                  sx={{ width: 80, lineHeight: 1.3 }}
                >
                  {t(ticketInfo.title)}
                </Typography>
                <IconWrapper>
                  <ticketInfo.IconComponent />
                </IconWrapper>
              </Box>
              <Button
                variant="contained"
                size="small"
              >
                {t(ticketInfo.buttonLabel)}
              </Button>
            </Box>
            <BottomWrapper
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{ pt: 2, px: { xs: 2, sm: 3 } }}
            >
              <Typography variant="h1">{ticketInfo.current}</Typography>
              <Box>
                <Typography
                  align="right"
                  variant="subtitle1"
                  color="text.secondary"
                  noWrap
                >
                  {t('Previous Period')}
                </Typography>
                <Typography
                  align="right"
                  variant="h3"
                  fontWeight={600}
                >
                  {ticketInfo.previous || '-'}
                </Typography>
              </Box>
            </BottomWrapper>
            <ChartWrapper height={250}>
              <LineChart
                height={250}
                leftAxis={null}
                margin={{ top: 24, bottom: 0, left: 0, right: 0 }}
                bottomAxis={null}
                slotProps={{ legend: { hidden: true } }}
                series={[ticketInfo.data]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                  '.MuiLineElement-root': {
                    stroke: theme.palette.secondary.main,
                    strokeOpacity: theme.palette.mode === 'dark' ? 0.46 : 1,
                    strokeWidth: 1,
                  },
                  '.MuiHighlightElement-root': {
                    strokeWidth: 2,
                    scale: '1.2',
                    stroke: theme.palette.background.paper,
                    fill: theme.palette.secondary.main,
                  },
                  '.MuiAreaElement-root': {
                    fill: "url('#warningGradient')",
                    fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                  },
                }}
              >
                <defs>
                  <linearGradient
                    id="warningGradient"
                    gradientTransform="rotate(90)"
                  >
                    <stop
                      offset="0%"
                      stopColor={alpha(theme.palette.secondary.main, 0.1)}
                    />
                    <stop
                      offset="100%"
                      stopColor={'transparent'}
                    />
                  </linearGradient>
                </defs>
              </LineChart>
            </ChartWrapper>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default UnresolvedTickets;
