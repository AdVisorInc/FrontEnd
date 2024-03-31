import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {
  Box,
  Card,
  CardHeader,
  Unstable_Grid2 as Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

function Budget() {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        p: { xs: 1, sm: 2 },
      }}
    >
      <CardHeader
        title={t('Budget')}
        subheader={
          <>
            {t('You had')} <b>258</b> {t('expense transactions this month')}, <b>43</b>{' '}
            {t('more than previous month')}.
          </>
        }
        subheaderTypographyProps={{
          variant: 'subtitle1',
          sx: {
            pt: 1,
          },
        }}
      />
      <Box p={2}>
        <Grid
          container
          textAlign="center"
        >
          <Grid xs>
            <Typography
              variant="h4"
              gutterBottom
            >
              Expenses
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="body1"
                fontWeight={700}
                color="error.main"
              >
                +12.76%
              </Typography>
              <ArrowDownwardIcon
                sx={{
                  color: 'error.main',
                }}
                fontSize="small"
              />
            </Box>
          </Grid>
          <Grid xs>
            <Typography
              variant="h4"
              gutterBottom
            >
              Savings
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="body1"
                fontWeight={700}
                color="success.main"
              >
                -18.65%
              </Typography>
              <ArrowUpwardIcon
                sx={{
                  color: 'success.main',
                }}
                fontSize="small"
              />
            </Box>
          </Grid>
        </Grid>

        <Box
          display="flex"
          alignItems="center"
          sx={{
            pt: 4,
            pb: 1,
          }}
        >
          <AvatarState
            isSoft
            state="success"
            variant="rounded"
            sx={{
              height: (theme) => theme.spacing(9),
              width: (theme) => theme.spacing(9),
            }}
          >
            <ShoppingCartTwoToneIcon fontSize="large" />
          </AvatarState>
          <Box
            flex={1}
            ml={2}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              color="text.secondary"
            >
              {t('Expenses')}
            </Typography>
            <Box
              display="flex"
              alignItems="flex-end"
              justifyContent="space-between"
              sx={{
                my: 1,
              }}
            >
              <Typography
                variant="h4"
                color="text.primary"
                lineHeight={1}
              >
                $574.21
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                $2,159.00
              </Typography>
            </Box>
            <LinearProgress
              value={78}
              color="primary"
              variant="determinate"
            />
          </Box>
        </Box>
        <Typography
          variant="body1"
          color="text.secondary"
        >
          {t('Minimum credit payment due in 15 days')}:{' '}
          <Typography
            variant="body2"
            component="span"
            fontWeight={700}
            color="text.primary"
          >
            $84.00
          </Typography>
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          sx={{
            pt: 5,
            pb: 1,
          }}
        >
          <AvatarState
            isSoft
            state="error"
            variant="rounded"
            sx={{
              height: (theme) => theme.spacing(9),
              width: (theme) => theme.spacing(9),
            }}
          >
            <MonetizationOnTwoToneIcon fontSize="large" />
          </AvatarState>
          <Box
            flex={1}
            ml={2}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              color="text.secondary"
            >
              {t('Savings')}
            </Typography>
            <Box
              display="flex"
              alignItems="flex-end"
              justifyContent="space-between"
              sx={{
                my: 1,
              }}
            >
              <Typography
                variant="h4"
                color="text.primary"
                lineHeight={1}
              >
                $23,536.44
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                $25,500.00
              </Typography>
            </Box>
            <LinearProgress
              value={49}
              color="primary"
              variant="determinate"
            />
          </Box>
        </Box>
        <Typography
          variant="body1"
          color="success.main"
        >
          {t('You have almost reached your target goal!!!')}
        </Typography>
      </Box>
    </Card>
  );
}

export default Budget;
