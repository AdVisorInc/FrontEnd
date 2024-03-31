import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Link,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { DefaultizedPieValueType } from '@mui/x-charts';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import React from 'react';
import { useTranslation } from 'react-i18next';

type DepartmentData = {
  name: string;
  bedData: PieChartData[];
  doctorData: PieChartData[];
};

type PieChartData = {
  label: string;
  color: string;
  value: number;
};

function Departments() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const departments: DepartmentData[] = [
    {
      name: 'Obstetrics and Gynaecology',
      bedData: [
        { label: 'Occupied beds', color: alpha(theme.palette.warning.light, 0.7), value: 25 },
        { label: 'Free beds', color: alpha(theme.palette.warning.dark, 0.9), value: 15 },
      ],
      doctorData: [
        { label: 'Available doctors', color: alpha(theme.palette.info.light, 0.7), value: 10 },
        { label: 'Busy doctors', color: alpha(theme.palette.info.dark, 0.9), value: 5 },
      ],
    },
    {
      name: 'Medical Gastroenterology',
      bedData: [
        { label: 'Occupied beds', color: alpha(theme.palette.error.light, 0.7), value: 30 },
        { label: 'Free beds', color: alpha(theme.palette.error.dark, 0.9), value: 20 },
      ],
      doctorData: [
        { label: 'Available doctors', color: alpha(theme.palette.success.light, 0.7), value: 8 },
        { label: 'Busy doctors', color: alpha(theme.palette.success.dark, 0.9), value: 12 },
      ],
    },
    // Add more departments as needed
  ];

  return (
    <Card>
      <CardHeader title={t('Departments')} />
      <Divider />
      {departments.map((department) => (
        <React.Fragment key={department.name}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            divider={
              <Divider
                orientation={smUp ? 'vertical' : 'horizontal'}
                flexItem
              />
            }
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flex={1}
              maxWidth={{ xs: 'auto', sm: 360 }}
            >
              <Box
                p={{ xs: 2, sm: 0 }}
                sx={{
                  width: '100%',
                  backgroundColor: smUp ? 'transparent' : 'neutral.25',
                  maxWidth: { xs: 'auto', sm: 360 },
                }}
              >
                <Typography
                  align="center"
                  variant="h5"
                >
                  {t(department.name)}
                </Typography>
              </Box>
            </Box>
            <Stack
              flex={1}
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
              <DepartmentPieChart
                theme={theme}
                title="Available beds"
                data={department.bedData}
              />
              <DepartmentPieChart
                theme={theme}
                title="Free doctors"
                data={department.doctorData}
              />
            </Stack>
          </Stack>
          <Divider />
        </React.Fragment>
      ))}
      <CardActions
        sx={{
          justifyContent: 'flex-end',
          py: 2,
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        >
          {t('View all departments')}
        </Button>
      </CardActions>
    </Card>
  );
}

type DepartmentPieChartProps = {
  theme: Theme;
  title: string;
  data: PieChartData[];
};

const DepartmentPieChart: React.FC<DepartmentPieChartProps> = ({ theme, title, data }) => {
  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <Box
      href=""
      onClick={(e) => e.preventDefault()}
      component={Link}
      flex={1}
      sx={{
        position: 'relative',
        '&:hover': {
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        },
        color: 'text.primary',
      }}
      pt={{ xs: 2, sm: 4 }}
      pb={{ xs: 1, md: 2 }}
      px={2}
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <ArrowOutwardRoundedIcon
        sx={{
          color: 'primary.main',
          position: 'absolute',
          top: { xs: theme.spacing(1), md: theme.spacing(2) },
          right: { xs: theme.spacing(1), md: theme.spacing(2) },
        }}
      />
      <Typography
        variant="h6"
        textAlign="center"
        gutterBottom
      >
        {title}
      </Typography>
      <PieChart
        series={[
          {
            data,
            innerRadius: 15,
            outerRadius: 60,
            paddingAngle: 5,
            cornerRadius: 8,
            startAngle: 0,
            endAngle: 360,
            arcLabel: getArcLabel,
          },
        ]}
        height={130}
        width={130}
        margin={{ right: 0 }}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: theme.palette.common.white,
            fontWeight: 600,
            fontSize: 15,
          },
        }}
      />
    </Box>
  );
};

export default Departments;
