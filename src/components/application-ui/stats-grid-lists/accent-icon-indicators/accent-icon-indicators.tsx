import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import AddAlertTwoToneIcon from '@mui/icons-material/AddAlertTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  Unstable_Grid2 as Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

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
        <Card
          sx={{
            p: 2.5,
            background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
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
                gutterBottom
                component="div"
                variant="subtitle2"
                fontWeight={500}
                textTransform="uppercase"
                sx={{
                  color: alpha(theme.palette.common.white, 0.7),
                }}
              >
                {t('New Accounts')}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                586,356
              </Typography>
            </Box>
            <Avatar
              variant="rounded"
              sx={{
                width: theme.spacing(7),
                height: theme.spacing(7),
                background: theme.palette.common.white,
                color: theme.palette.success.main,
              }}
            >
              <AccountBoxTwoToneIcon />
            </Avatar>
          </Box>
          <Box
            display="flex"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                display: 'flex',
                alignItems: 'center',
                pr: 0.5,
                color: theme.palette.success.main,
              }}
            >
              <ArrowUpwardTwoToneIcon
                fontSize="small"
                sx={{
                  mr: 0.2,
                }}
              />
              <span>16.5%</span>
            </Typography>
            <Typography
              variant="subtitle2"
              noWrap
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              {t('increase this month')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            p: 2.5,
            background: 'linear-gradient(to bottom, #00b09b, #96c93d)!important',
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
                gutterBottom
                component="div"
                variant="subtitle2"
                fontWeight={500}
                textTransform="uppercase"
                sx={{
                  color: alpha(theme.palette.common.white, 0.7),
                }}
              >
                {t('Sales')}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                23,684
              </Typography>
            </Box>
            <Avatar
              variant="rounded"
              sx={{
                width: theme.spacing(7),
                height: theme.spacing(7),
                background: alpha(theme.palette.common.white, 0.2),
                color: theme.palette.common.white,
              }}
            >
              <AddAlertTwoToneIcon />
            </Avatar>
          </Box>
          <Box
            display="flex"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                display: 'flex',
                alignItems: 'center',
                pr: 0.5,
                color: theme.palette.common.white,
              }}
            >
              <CompareArrowsTwoToneIcon
                fontSize="small"
                sx={{
                  mr: 0.2,
                }}
              />
              <span>0.5%</span>
            </Typography>
            <Typography
              variant="subtitle2"
              noWrap
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              {t('compared to previous month')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            p: 2.5,
            background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important',
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
                gutterBottom
                component="div"
                variant="subtitle2"
                fontWeight={500}
                textTransform="uppercase"
                sx={{
                  color: alpha(theme.palette.common.white, 0.7),
                }}
              >
                {t('New Orders')}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                36,594
              </Typography>
            </Box>
            <Avatar
              variant="rounded"
              sx={{
                width: theme.spacing(7),
                height: theme.spacing(7),
                background: theme.palette.common.white,
                color: theme.palette.warning.main,
              }}
            >
              <ThumbUpTwoToneIcon />
            </Avatar>
          </Box>
          <Box
            display="flex"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{
                display: 'flex',
                alignItems: 'center',
                pr: 0.5,
                color: theme.palette.common.white,
              }}
            >
              <ArrowDownwardTwoToneIcon
                fontSize="small"
                sx={{
                  mr: 0.2,
                }}
              />
              <span>8.25%</span>
            </Typography>
            <Typography
              variant="subtitle2"
              noWrap
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              {t('decrease in orders amounts')}
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
