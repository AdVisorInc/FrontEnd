import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  alpha,
  Box,
  Card,
  Unstable_Grid2 as Grid,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useTranslation } from 'react-i18next';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  zIndex: 7,
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const data = {
    percentage1: 65,
    percentage2: 84,
    percentage3: 43,
    percentage4: 71,
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            px: { xs: 2, sm: 3 },
            pt: 2,
            pb: 1,
          }}
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              fontWeight={500}
            >
              {t('Customers')}
            </Typography>
            <IconButton
              size="small"
              color="primary"
            >
              <MoreVertTwoToneIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                width: '100px',
              }}
            >
              <CircularProgressbarWithChildren
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2.2 + 1 / 5.85,
                  trailColor: alpha(theme.palette.info.main, 0.15),
                  pathColor: theme.palette.info.main,
                  strokeLinecap: 'round',
                })}
                strokeWidth={8}
                value={data.percentage1}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: theme.palette.info.main,
                    mt: '-15px',
                  }}
                >
                  {`${data.percentage1}%`}
                </Typography>
              </CircularProgressbarWithChildren>
            </Box>
            <Box
              sx={{
                textAlign: 'right',
              }}
            >
              <Typography
                variant="h1"
                sx={{ mt: -1 }}
                lineHeight={1.2}
              >
                564
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={500}
                color="text.secondary"
              >
                {t('Last week')}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            px: { xs: 2, sm: 3 },
            pt: 2,
            pb: 1,
          }}
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              fontWeight={500}
            >
              {t('Orders')}
            </Typography>
            <IconButton
              size="small"
              color="primary"
            >
              <MoreVertTwoToneIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                width: '100px',
              }}
            >
              <CircularProgressbarWithChildren
                circleRatio={1}
                styles={buildStyles({
                  trailColor: alpha(theme.palette.primary.main, 0.15),
                  pathColor: theme.palette.primary.main,
                  strokeLinecap: 'round',
                })}
                strokeWidth={8}
                value={data.percentage2}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: theme.palette.primary.main,
                    mt: '-15px',
                  }}
                >
                  {`${data.percentage2}%`}
                </Typography>
              </CircularProgressbarWithChildren>
            </Box>
            <Box
              sx={{
                textAlign: 'right',
              }}
            >
              <Typography
                variant="h1"
                sx={{ mt: -1 }}
                lineHeight={1.2}
              >
                456
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={500}
                color="text.secondary"
              >
                {t('Last month')}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            position: 'relative',
            px: { xs: 2, sm: 3 },
            pt: { xs: 2, sm: 3 },
            pb: 2,
          }}
        >
          <CardActions>
            <IconButton
              size="small"
              color="primary"
            >
              <MoreHorizTwoToneIcon />
            </IconButton>
          </CardActions>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                width: '100px',
              }}
            >
              <CircularProgressbarWithChildren
                circleRatio={1}
                styles={buildStyles({
                  trailColor: alpha(theme.palette.error.main, 0.15),
                  pathColor: theme.palette.error.main,
                  strokeLinecap: 'round',
                })}
                strokeWidth={6}
                value={data.percentage3}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.palette.error.main,
                    mt: '-15px',
                  }}
                >
                  {`${data.percentage3}%`}
                </Typography>
              </CircularProgressbarWithChildren>
            </Box>
            <Box
              sx={{
                mt: 1,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                fontWeight={500}
                noWrap
              >
                {t('Project management')}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important',
            position: 'relative',
            px: { xs: 2, sm: 3 },
            pt: { xs: 2, sm: 3 },
            pb: 2,
          }}
        >
          <CardActions>
            <IconButton
              sx={{
                color: theme.palette.common.white,
                '&:hover': {
                  background:
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.common.white, 0.04)
                      : alpha(theme.palette.common.white, 0.1),
                },
              }}
              size="small"
              color="primary"
            >
              <MoreVertTwoToneIcon />
            </IconButton>
          </CardActions>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                width: '100px',
              }}
            >
              <CircularProgressbarWithChildren
                circleRatio={1}
                styles={buildStyles({
                  trailColor: alpha(theme.palette.common.white, 0.15),
                  pathColor: theme.palette.common.white,
                  strokeLinecap: 'round',
                })}
                strokeWidth={8}
                value={data.percentage3}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: theme.palette.common.white,
                    mt: '-15px',
                  }}
                >
                  {`${data.percentage3}%`}
                </Typography>
              </CircularProgressbarWithChildren>
            </Box>
            <Box
              sx={{
                mt: 1,
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.common.white,
                }}
                variant="h5"
                fontWeight={500}
                noWrap
              >
                {t('Analytics statistics')}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
