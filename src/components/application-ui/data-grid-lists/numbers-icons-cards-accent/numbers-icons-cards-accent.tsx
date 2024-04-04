import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import SnowmobileTwoToneIcon from '@mui/icons-material/SnowmobileTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import YardTwoToneIcon from '@mui/icons-material/YardTwoTone';
import {
  alpha,
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
        sm={6}
        lg={3}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
          >
            <AvatarWrapper
              sx={{
                background: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%) !important',
              }}
            >
              <ReceiptTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,

                color: alpha(theme.palette.common.white, 0.7),
                fontWeight: 600,
              }}
              variant="h5"
              component="div"
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
                fontSize: theme.typography.pxToRem(35),
                color: theme.palette.common.white,
              }}
              variant="h1"
            >
              $3,594
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body1"
            sx={{
              color: alpha(theme.palette.common.white, 0.5),
            }}
            component="div"
          >
            <b>+36%</b> last month
          </Typography>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        lg={3}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
          >
            <AvatarWrapper
              sx={{
                background: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%)',
              }}
            >
              <SupportTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,

                color: alpha(theme.palette.common.white, 0.7),
                fontWeight: 600,
              }}
              variant="h5"
              component="div"
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
                fontSize: theme.typography.pxToRem(35),
                color: theme.palette.common.white,
              }}
              variant="h1"
            >
              987
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body1"
            sx={{
              color: alpha(theme.palette.common.white, 0.5),
            }}
            component="div"
          >
            <b>+65%</b> last month
          </Typography>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        lg={3}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
          >
            <AvatarWrapper
              sx={{
                background: 'linear-gradient(135deg, #FFF720 0%, #3CD500 100%) !important',
              }}
            >
              <YardTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,

                color: alpha(theme.palette.common.white, 0.7),
                fontWeight: 600,
              }}
              variant="h5"
              component="div"
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
            <ArrowUpwardTwoToneIcon
              sx={{
                color: theme.palette.common.white,
              }}
            />
            <Typography
              sx={{
                pl: 1,
                fontSize: theme.typography.pxToRem(35),
                color: theme.palette.common.white,
              }}
              variant="h1"
            >
              17,865
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body1"
            sx={{
              color: alpha(theme.palette.common.white, 0.5),
            }}
            component="div"
          >
            <b>+22%</b> last month
          </Typography>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        lg={3}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            background: 'linear-gradient(60deg, #29323c 0%, #485563 100%) !important',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
          >
            <AvatarWrapper
              sx={{
                background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
              }}
            >
              <SnowmobileTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Typography
              sx={{
                ml: 1.5,

                color: alpha(theme.palette.common.white, 0.7),
                fontWeight: 600,
              }}
              variant="h5"
              component="div"
            >
              {t('Sales')}
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
                color: theme.palette.warning.main,
              }}
            />
            <Typography
              sx={{
                pl: 1,
                fontSize: theme.typography.pxToRem(35),
                color: theme.palette.common.white,
              }}
              variant="h1"
            >
              $65,489
            </Typography>
          </Box>
          <Typography
            align="center"
            variant="body1"
            sx={{
              color: alpha(theme.palette.common.white, 0.5),
            }}
            component="div"
          >
            <b>-15.35%</b> last month
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
