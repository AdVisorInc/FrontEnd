import ArrowDownwardTwoTone from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoTone from '@mui/icons-material/ArrowUpwardTwoTone';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function MonthlyComparison() {
  const { t } = useTranslation();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const data = {
    visitors: '65.485',
    conversion: '15.65%',
    revenue: '$8,486',
  };

  return (
    <Card>
      <CardHeader
        title={
          <>
            {t('Monthly Comparison')}{' '}
            <Typography
              variant="body2"
              component="span"
              fontWeight={700}
              color="text.secondary"
            >
              (12 {t('weeks')})
            </Typography>
          </>
        }
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            textAlign: 'center',
            p: 2,
          }}
        >
          <Grid
            spacing={{ xs: 2, sm: 3 }}
            container
          >
            <Grid
              xs={12}
              sm
            >
              <Typography
                variant="caption"
                fontWeight={600}
                color="text.secondary"
                gutterBottom
                component="div"
              >
                {t('Revenue')}
              </Typography>
              <Typography variant="h3">{data.revenue}</Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pt: 1,
                }}
              >
                <Chip
                  label="7%"
                  color="success"
                />
                <ArrowUpwardTwoTone
                  sx={{
                    ml: 0.5,
                    mr: -0.2,
                    color: 'success.main',
                  }}
                  fontSize="small"
                />
              </Box>
            </Grid>
            <Divider
              orientation={smUp ? 'vertical' : 'horizontal'}
              flexItem
              sx={{
                my: { xs: 2, sm: 0 },
                width: { xs: '100%', sm: 'auto' },
              }}
            />
            <Grid
              xs={12}
              sm
            >
              <Typography
                variant="caption"
                fontWeight={600}
                color="text.secondary"
                gutterBottom
                component="div"
              >
                {t('Visitors')}
              </Typography>
              <Typography variant="h3">{data.visitors}</Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pt: 1,
                }}
              >
                <Chip
                  label="8%"
                  color="warning"
                />
                <ArrowDownwardTwoTone
                  sx={{
                    ml: 0.5,
                    mr: -0.2,
                    color: 'error.main',
                  }}
                  fontSize="small"
                />
              </Box>
            </Grid>
            <Divider
              orientation={smUp ? 'vertical' : 'horizontal'}
              flexItem
              sx={{
                my: { xs: 2, sm: 0 },
                width: { xs: '100%', sm: 'auto' },
              }}
            />
            <Grid
              xs={12}
              sm
            >
              <Typography
                variant="caption"
                fontWeight={600}
                color="text.secondary"
                gutterBottom
                component="div"
              >
                {t('Conversion')}
              </Typography>
              <Typography variant="h3">{data.conversion}</Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pt: 1,
                }}
              >
                <Chip
                  label="17%"
                  color="success"
                />
                <ArrowUpwardTwoTone
                  sx={{
                    ml: 0.5,
                    mr: -0.2,
                    color: 'success.main',
                  }}
                  fontSize="small"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MonthlyComparison;
