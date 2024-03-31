import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import AddAlertTwoToneIcon from '@mui/icons-material/AddAlertTwoTone';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import CompareArrowsTwoToneIcon from '@mui/icons-material/CompareArrowsTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import { Avatar, Box, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
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
                {t('New Accounts')}
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
              >
                586,356
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
              <AccountBoxTwoToneIcon />
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
              color="text.secondary"
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
                {t('Sales')}
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
              >
                23,684
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
              <AddAlertTwoToneIcon />
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
                color: theme.palette.warning.main,
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
              color="text.secondary"
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
                {t('New Orders')}
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
              >
                36,594
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
              <ThumbUpTwoToneIcon />
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
                color: theme.palette.error.main,
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
              color="text.secondary"
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
