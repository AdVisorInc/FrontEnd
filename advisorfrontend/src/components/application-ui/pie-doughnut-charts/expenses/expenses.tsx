import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  alpha,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { PieChart } from '@mui/x-charts/PieChart';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InlineBadge } from 'src/components/base/styles/inline-badge';

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 21,
  fontWeight: 500,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText
      x={left + width / 2}
      y={top + height / 2}
    >
      {children}
    </StyledText>
  );
}

function AllExpenses() {
  const { t } = useTranslation();
  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const data = [
    { value: 15, label: t('Bills'), color: theme.palette.error.main },
    { value: 20, label: t('Health'), color: theme.palette.success.main },
    { value: 25, label: t('Education'), color: theme.palette.info.main },
    { value: 30, label: t('Entertainment'), color: theme.palette.secondary.main },
    { value: 10, label: t('Others'), color: theme.palette.warning.main },
  ];

  const periods = [
    {
      value: 'today',
      text: t('Today'),
    },
    {
      value: 'yesterday',
      text: t('Yesterday'),
    },
    {
      value: 'last_month',
      text: t('Last month'),
    },
    {
      value: 'last_year',
      text: t('Last year'),
    },
  ];

  const [period, setPeriod] = useState<string>(periods[2].text);

  const dataStack = {
    daily: '$142.21',
    weekly: '$529.83',
    monthly: '$7,153.61',
  };

  return (
    <Card>
      <CardHeader
        action={
          <Tooltip
            arrow
            title={t('View all Expenses')}
          >
            <IconButton
              size="small"
              color="primary"
            >
              <ChevronRightTwoToneIcon />
            </IconButton>
          </Tooltip>
        }
        title={t('All Expenses')}
      />
      <Divider />
      <Stack
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
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
        <Box p={2}>
          <Typography
            variant="caption"
            color="text.secondary"
            gutterBottom
          >
            {t('Daily')}
          </Typography>
          <Typography variant="h3">{dataStack.daily}</Typography>
        </Box>
        <Box p={2}>
          <Typography
            variant="caption"
            color="text.secondary"
            gutterBottom
          >
            {t('Weekly')}
          </Typography>
          <Typography variant="h3">{dataStack.weekly}</Typography>
        </Box>
        <Box p={2}>
          <Typography
            variant="caption"
            color="text.secondary"
            gutterBottom
          >
            {t('Monthly')}
          </Typography>
          <Typography variant="h3">{dataStack.monthly}</Typography>
        </Box>
      </Stack>
      <Divider />
      <CardContent>
        <Button
          size="small"
          variant="outlined"
          ref={actionRef1}
          onClick={() => setOpenMenuPeriod(true)}
          endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        >
          {period}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={actionRef1.current}
          onClose={() => setOpenMenuPeriod(false)}
          open={openPeriod}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {periods.map((_period) => (
            <MenuItem
              key={_period.value}
              onClick={() => {
                setPeriod(_period.text);
                setOpenMenuPeriod(false);
              }}
            >
              {_period.text}
            </MenuItem>
          ))}
        </Menu>
        <Stack
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          mt={2}
        >
          <PieChart
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
            margin={{ right: 0 }}
            series={[{ data, innerRadius: 70 }]}
            width={200}
            height={200}
          >
            <PieCenterLabel>Expenses</PieCenterLabel>
          </PieChart>
          <Stack
            minWidth={200}
            spacing={1}
            flex={1}
          >
            {data.map((item) => (
              <InlineBadge key={item.label}>
                <Badge
                  variant="dot"
                  sx={{
                    '& .MuiBadge-badge': {
                      background: item.color,
                    },
                  }}
                />
                <Typography
                  sx={{
                    px: 0.5,
                    color: item.color,
                  }}
                >
                  {item.value}%
                </Typography>
                {item.label}
              </InlineBadge>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default AllExpenses;
