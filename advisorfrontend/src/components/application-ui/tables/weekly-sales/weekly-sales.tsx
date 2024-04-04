import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  alpha,
  Box,
  Card,
  Chip,
  Divider,
  IconButton,
  Link,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TableHeadWrapper, TableRowDivider, TableWrapper } from 'src/components/base/styles/table';

interface EmployeeData {
  name: string;
  position: string;
  link: string;
  amount1: string;
  amountColor1: 'text.primary' | 'error.main' | 'warning.main' | 'success.main';
  amount2: string;
  status: 'Overdue' | 'Pending' | 'Done';
  sparklinesData: number[];
  totalAmount: string;
  totalAmountColor: 'text.primary' | 'error.main';
  arrowIcon: 'up' | 'down';
}

const employees: EmployeeData[] = [
  {
    name: 'Inez Conley',
    position: 'Project Manager',
    link: '#',
    amount1: '$754',
    amountColor1: 'text.primary',
    amount2: '-$2,584',
    status: 'Overdue',
    sparklinesData: [45, 56, 24, 56, 54, 38, 47, 38, 56, 24, 38],
    totalAmount: '$68,492',
    totalAmountColor: 'text.primary',
    arrowIcon: 'up',
  },
  {
    name: 'Isaiah Ruiz',
    position: 'Senior Web Developer',
    link: '#',
    amount1: '$654',
    amountColor1: 'text.primary',
    amount2: '-$463',
    status: 'Pending',
    sparklinesData: [65, 34, 65, 77, 89, 54, 35, 87, 65, 94, 59, 54],
    totalAmount: '$54,230',
    totalAmountColor: 'text.primary',
    arrowIcon: 'up',
  },
  {
    name: 'Beck Simpson',
    position: 'Senior Consultant',
    link: '#',
    amount1: '$5,468',
    amountColor1: 'text.primary',
    amount2: '+$685',
    status: 'Done',
    sparklinesData: [65, 45, 37, 97, 56, 37, 47, 24, 38],
    totalAmount: '$23,654',
    totalAmountColor: 'error.main',
    arrowIcon: 'down',
  },
  {
    name: 'Emily Johnson',
    position: 'Frontend Developer',
    link: '#',
    amount1: '$1,250',
    amountColor1: 'text.primary',
    amount2: '+$780',
    status: 'Done',
    sparklinesData: [45, 56, 78, 65, 56, 48, 37, 45, 38],
    totalAmount: '$45,678',
    totalAmountColor: 'text.primary',
    arrowIcon: 'up',
  },
  {
    name: 'Michael Stevens',
    position: 'Backend Developer',
    link: '#',
    amount1: '$3,154',
    amountColor1: 'text.primary',
    amount2: '-$210',
    status: 'Pending',
    sparklinesData: [35, 45, 67, 76, 45, 34, 37, 54, 67],
    totalAmount: '$30,154',
    totalAmountColor: 'error.main',
    arrowIcon: 'down',
  },
  {
    name: 'Clara Oswald',
    position: 'UI/UX Designer',
    link: '#',
    amount1: '$2,854',
    amountColor1: 'text.primary',
    amount2: '+$500',
    status: 'Overdue',
    sparklinesData: [25, 48, 67, 86, 54, 32, 59, 64, 75],
    totalAmount: '$38,985',
    totalAmountColor: 'text.primary',
    arrowIcon: 'up',
  },
  {
    name: 'Robert Smith',
    position: 'QA Tester',
    link: '#',
    amount1: '$1,450',
    amountColor1: 'text.primary',
    amount2: '-$130',
    status: 'Done',
    sparklinesData: [55, 45, 57, 66, 45, 36, 59, 58, 65],
    totalAmount: '$27,985',
    totalAmountColor: 'error.main',
    arrowIcon: 'down',
  },
];

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Box
        px={3}
        py={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Box>
          <Typography variant="h4">{t('Weekly sales')}</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Reports for what we sold this week')}
          </Typography>
        </Box>
        <IconButton color="secondary">
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        px={3}
        pb={3}
      >
        <TableContainer>
          <TableWrapper>
            <TableHeadWrapper>
              <TableRow>
                <TableCell>{t('Employee')}</TableCell>
                <TableCell align="left">{t('Income')}</TableCell>
                <TableCell align="left">{t('Expenses')}</TableCell>
                <TableCell align="center">{t('Status')}</TableCell>
                <TableCell align="left">{t('Trends')}</TableCell>
                <TableCell align="right">{t('Totals')}</TableCell>
              </TableRow>
            </TableHeadWrapper>
            <TableBody>
              {employees.map((employee, index) => (
                <React.Fragment key={index}>
                  <TableRow hover>
                    <TableCell>
                      <Box>
                        <Link
                          href={employee.link}
                          onClick={(e) => e.preventDefault()}
                          variant="h5"
                          noWrap
                        >
                          {employee.name}
                        </Link>
                        <Typography
                          variant="subtitle2"
                          noWrap
                          color="text.secondary"
                        >
                          {employee.position}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h5"
                        noWrap
                      >
                        {employee.amount1}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h5"
                        noWrap
                        color={employee.amountColor1}
                      >
                        {employee.amount2}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      {employee.status === 'Overdue' && (
                        <Chip
                          color="error"
                          variant="outlined"
                          label={t('Overdue')}
                        />
                      )}
                      {employee.status === 'Pending' && (
                        <Chip
                          color="warning"
                          variant="outlined"
                          label={t('Pending')}
                        />
                      )}
                      {employee.status === 'Done' && (
                        <Chip
                          color="success"
                          variant="outlined"
                          label={t('Done')}
                        />
                      )}
                    </TableCell>
                    <TableCell
                      sx={{
                        maxWidth: 120,
                      }}
                      align="center"
                    >
                      <Box width={'100%'}>
                        <SparkLineChart
                          height={40}
                          colors={[theme.palette.primary.main]}
                          data={employee.sparklinesData}
                        />
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                        }}
                        color="text.secondary"
                      >
                        <Typography
                          sx={{ pr: 0.5 }}
                          component="span"
                          variant="h5"
                          color={employee.totalAmountColor}
                        >
                          {employee.totalAmount}
                        </Typography>
                        {employee.arrowIcon === 'up' ? (
                          <ArrowUpwardTwoToneIcon sx={{ color: 'success.main' }} />
                        ) : (
                          <ArrowDownwardTwoToneIcon sx={{ color: 'error.main' }} />
                        )}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRowDivider />
                </React.Fragment>
              ))}
            </TableBody>
          </TableWrapper>
        </TableContainer>
      </Box>
    </Card>
  );
}

export default Component;
