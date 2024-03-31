import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import SnowmobileTwoToneIcon from '@mui/icons-material/SnowmobileTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import YardTwoToneIcon from '@mui/icons-material/YardTwoTone';
import {
  Avatar,
  Box,
  Card,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  color: theme.palette.common.white,
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
}));

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
        md={4}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
          >
            <AvatarWrapper
              sx={{
                background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important',
              }}
            >
              <ReceiptTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
              }}
              variant="h5"
            >
              {t('Orders')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pt: 2,
              pb: 0.5,
              justifyContent: 'center',
            }}
          >
            <ArrowDownwardTwoToneIcon
              sx={{
                color: 'error.main',
              }}
            />
            <Typography
              sx={{
                pl: 1,
              }}
              variant="h1"
            >
              $3,594
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body1"
            noWrap
            color="text.secondary"
            component="div"
          >
            <b>+36%</b> last month
          </Typography>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={4}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
          >
            <AvatarWrapper
              sx={{
                background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
              }}
            >
              <SupportTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
              }}
              variant="h5"
            >
              {t('Reports')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pt: 2,
              pb: 0.5,
              justifyContent: 'center',
            }}
          >
            <ArrowUpwardTwoToneIcon sx={{ color: 'success.main' }} />
            <Typography
              sx={{
                pl: 1,
              }}
              variant="h1"
            >
              987
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body1"
            noWrap
            color="text.secondary"
            component="div"
          >
            <b>+65%</b> last month
          </Typography>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={4}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
          >
            <AvatarWrapper
              sx={{
                background: theme.palette.success.main,
              }}
            >
              <YardTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,
              }}
              variant="h5"
            >
              {t('Customers')}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              ml: -2,
              pt: 2,
              pb: 0.5,
              justifyContent: 'center',
            }}
          >
            <ArrowUpwardTwoToneIcon sx={{ color: 'success.main' }} />
            <Typography
              sx={{
                pl: 1,
              }}
              variant="h1"
            >
              17,865
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body1"
            noWrap
            color="text.secondary"
            component="div"
          >
            <b>+22%</b> last month
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
