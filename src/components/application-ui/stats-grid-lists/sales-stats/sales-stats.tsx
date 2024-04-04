import ArrowDownwardTwoTone from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoTone from '@mui/icons-material/ArrowUpwardTwoTone';
import HelpOutlineTwoToneIcon from '@mui/icons-material/HelpOutlineTwoTone';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Unstable_Grid2 as Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

type SalesData = {
  title: string;
  value: string | number;
  percentage: string;
  color: 'success' | 'error';
  directionIcon: 'up' | 'down';
};

function GrossSales() {
  const { t } = useTranslation();

  const salesData: SalesData[] = [
    {
      title: t('Gross Sales'),
      value: '$3,854.15',
      percentage: '+10%',
      color: 'success',
      directionIcon: 'up',
    },
    {
      title: t('Customers'),
      value: 347,
      percentage: '-5.2%',
      color: 'error',
      directionIcon: 'down',
    },
    {
      title: t('Orders'),
      value: 843,
      percentage: '+10%',
      color: 'success',
      directionIcon: 'up',
    },
    {
      title: t('Refunds'),
      value: 2,
      percentage: '-50%',
      color: 'error',
      directionIcon: 'down',
    },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      {salesData.map((data) => (
        <Grid
          lg={3}
          sm={6}
          xs={12}
          key={data.title}
        >
          <Card>
            <CardHeader
              sx={{ pb: 0 }}
              titleTypographyProps={{
                variant: 'subtitle2',
                fontWeight: 600,
                color: 'textSecondary',
              }}
              action={
                <Tooltip
                  placement="top"
                  arrow
                  title={t('This section can have a description!')}
                >
                  <IconButton
                    size="small"
                    color="secondary"
                  >
                    <HelpOutlineTwoToneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              }
              title={t(data.title)}
            />
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h3">{data.value}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Chip
                  label={data.percentage}
                  color={data.color}
                />
                {data.directionIcon === 'up' ? (
                  <ArrowUpwardTwoTone
                    sx={{ ml: 0.5, mr: -0.2, color: `${data.color}.main` }}
                    fontSize="small"
                  />
                ) : (
                  <ArrowDownwardTwoTone
                    sx={{ ml: 0.5, mr: -0.2, color: `${data.color}.main` }}
                    fontSize="small"
                  />
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default GrossSales;
