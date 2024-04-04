import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import {
  alpha,
  Box,
  CircularProgress,
  circularProgressClasses,
  Unstable_Grid2 as Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CardBorderColor } from 'src/components/base/styles/card-border-color';

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
        md={6}
        lg={4}
      >
        <CardBorderColor
          borderColor="error"
          borderPosition="bottom"
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: { xs: 2, sm: 3 },
            boxShadow: theme.shadows[3],
          }}
        >
          <Box
            flexGrow={1}
            mr={2}
          >
            <Typography
              fontWeight={600}
              sx={{
                pb: 1,
                textTransform: 'uppercase',
              }}
              variant="h6"
            >
              {t('Accounts')}
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
              }}
              variant="h2"
            >
              <KeyboardArrowUpTwoToneIcon
                sx={{
                  mr: 0.5,
                  color: 'success.main',
                }}
              />
              <span>37,594</span>
            </Typography>
          </Box>
          <Box
            display="inline-flex"
            position="relative"
          >
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                color="error"
                variant="h6"
              >
                43%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: alpha(theme.palette.error.main, 0.15),
              }}
              size={70}
              thickness={2}
              value={100}
            />
            <CircularProgress
              size={70}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.palette.error.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
              thickness={2}
              variant="determinate"
              value={43}
            />
          </Box>
        </CardBorderColor>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={4}
      >
        <CardBorderColor
          borderPosition="bottom"
          borderColor="success"
          sx={{
            display: 'flex',
            boxShadow: theme.shadows[2],
            alignItems: 'center',
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            flexGrow={1}
            mr={2}
          >
            <Typography
              fontWeight={600}
              sx={{
                pb: 1,
                textTransform: 'uppercase',
              }}
              variant="h6"
            >
              {t('Subscriptions')}
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
              }}
              variant="h2"
            >
              <AddTwoToneIcon
                sx={{
                  mr: 0.5,
                  color: theme.palette.success.main,
                }}
              />
              <span>545</span>
              <Typography
                sx={{
                  alignSelf: 'self-end',
                  pl: 0.5,
                }}
                variant="h4"
                fontWeight={400}
                color="text.secondary"
              >
                {t('new')}
              </Typography>
            </Typography>
          </Box>
          <Box
            display="inline-flex"
            position="relative"
          >
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.success.main,
                }}
                variant="h6"
              >
                76%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: alpha(theme.palette.success.main, 0.15),
              }}
              size={70}
              thickness={2}
              value={100}
            />
            <CircularProgress
              size={70}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.palette.success.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
              thickness={2}
              variant="determinate"
              value={70}
            />
          </Box>
        </CardBorderColor>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={4}
      >
        <CardBorderColor
          borderPosition="top"
          borderColor="warning"
          sx={{
            display: 'flex',
            boxShadow: theme.shadows[4],
            alignItems: 'center',
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            flexGrow={1}
            mr={2}
          >
            <Typography
              fontWeight={600}
              sx={{
                pb: 1,
                textTransform: 'uppercase',
              }}
              variant="h6"
            >
              {t('Expenses')}
            </Typography>
            <Typography
              sx={{
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
              }}
              variant="h2"
            >
              <Typography
                sx={{
                  pr: 0.5,
                  alignSelf: 'self-end',
                }}
                variant="h4"
                fontWeight={400}
                color="text.secondary"
              >
                $
              </Typography>
              <span>1.23M</span>
            </Typography>
          </Box>
          <Box
            display="inline-flex"
            position="relative"
          >
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.warning.main,
                }}
                variant="h6"
              >
                32%
              </Typography>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: alpha(theme.palette.warning.main, 0.15),
              }}
              size={70}
              thickness={2}
              value={100}
            />
            <CircularProgress
              size={70}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.palette.warning.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
              thickness={2}
              variant="determinate"
              value={32}
            />
          </Box>
        </CardBorderColor>
      </Grid>
    </Grid>
  );
}

export default Component;
