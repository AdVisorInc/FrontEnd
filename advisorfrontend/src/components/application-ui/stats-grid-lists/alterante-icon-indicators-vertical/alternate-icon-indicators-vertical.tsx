import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import AddAlertTwoToneIcon from '@mui/icons-material/AddAlertTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import { Avatar, Box, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {useDispatch, useSelector} from "../../../../store";
import {useEffect} from "react";
import {fetchPerformanceMetrics} from "../../../../slices/performanceMetrics";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import PaidIcon from '@mui/icons-material/Paid';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const { isLoaded, data, error } = useSelector((state) => state.performanceMetrics);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPerformanceMetrics());
  }, [dispatch]);
  const { roi, ctr, costPerConversion, roiChange, ctrChange, costPerConversionChange } = data || {};

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
      direction="column"
    >
      <Grid
        xs={12}
        lg={12}
        md={12}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                color="text.secondary"
                variant="caption"
              >
                {t('Overall ROI')}
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
              >
                {roi}%
              </Typography>
            </Box>
            <Avatar
              sx={{
                width: theme.spacing(5.5),
                height: theme.spacing(5.5),
                background: theme.palette.error.main,
                color: theme.palette.error.contrastText,
              }}
            >
              <TrendingUpIcon />
            </Avatar>
          </Box>
          <Box
            display="flex"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                pr: 0.5,
                color: roiChange >= 0 ? theme.palette.success.main : theme.palette.error.main,
              }}
            >
              {roiChange >= 0 ? <ArrowUpwardIcon fontSize="small" sx={{ mr: 0.2 }} /> : <ArrowDownwardIcon fontSize="small" sx={{ mr: 0.2 }} />}
              <span>{Math.abs(roiChange).toFixed(2)}%</span>
            </Typography>
            <Typography
              variant="subtitle2"
              noWrap
              color="text.secondary"
            >
              {t('compared to previous month')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={12}
        md={12}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                color="text.secondary"
                variant="caption"
              >
                {t('CTR')}
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
              >
                {ctr}%
              </Typography>
            </Box>
            <Avatar
              sx={{
                width: theme.spacing(5.5),
                height: theme.spacing(5.5),
                background: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              <TouchAppIcon />
            </Avatar>
          </Box>
          <Box
            display="flex"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                pr: 0.5,
                color: ctrChange >= 0 ? theme.palette.success.main : theme.palette.error.main,
              }}
            >
              {ctrChange >= 0 ? <ArrowUpwardIcon fontSize="small" sx={{ mr: 0.2 }} /> : <ArrowDownwardIcon fontSize="small" sx={{ mr: 0.2 }} />}
              <span>{Math.abs(ctrChange).toFixed(2)}%</span>
            </Typography>
            <Typography
              variant="subtitle2"
              noWrap
              color="text.secondary"
            >
              {t('compared to previous month')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={12}
        md={12}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                color="text.secondary"
                variant="caption"
              >
                {t('Cost Per Conversion')}
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
              >
                ${costPerConversion}
              </Typography>
            </Box>
            <Avatar
              sx={{
                width: theme.spacing(5.5),
                height: theme.spacing(5.5),
                background: theme.palette.warning.main,
                color: theme.palette.warning.contrastText,
              }}
            >
              <PaidIcon />
            </Avatar>
          </Box>
          <Box
            display="flex"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                pr: 0.5,
                color: costPerConversionChange >= 0 ? theme.palette.error.main : theme.palette.success.main,
              }}
            >
              {costPerConversionChange >= 0 ? <ArrowUpwardIcon fontSize="small" sx={{ mr: 0.2 }} /> : <ArrowDownwardIcon fontSize="small" sx={{ mr: 0.2 }} />}
              <span>{Math.abs(costPerConversionChange).toFixed(2)}%</span>
            </Typography>
            <Typography
              variant="subtitle2"
              noWrap
              color="text.secondary"
            >
              {costPerConversionChange >= 0 ? t('increase compared to previous month') : t('decrease compared to previous month')}
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
