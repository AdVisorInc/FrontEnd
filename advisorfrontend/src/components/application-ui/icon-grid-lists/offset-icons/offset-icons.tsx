import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import {
  Box,
  Button,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

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
            overflow: 'visible',
            position: 'relative',
            pt: 4.5,
            pb: 2,
            mt: 4.5,
          }}
        >
          <AvatarState
            useShadow
            state="error"
            variant="rounded"
            sx={{
              width: theme.spacing(9),
              height: theme.spacing(9),
              position: 'absolute',
              top: theme.spacing(-4.5),
              left: '50%',
              marginLeft: theme.spacing(-4.5),
            }}
          >
            <AssessmentTwoToneIcon fontSize="large" />
          </AvatarState>
          <Box
            px={3.5}
            pt={3.5}
          >
            <Typography
              textAlign="center"
              variant="h1"
              lineHeight={1.3}
              fontWeight={600}
            >
              $4,745
            </Typography>
            <Typography
              textAlign="center"
              variant="h5"
              fontWeight={500}
              sx={{
                mb: 3,
              }}
              color="text.secondary"
            >
              {t("Today's Sales")}
            </Typography>
            <Divider
              sx={{
                mb: 2,
              }}
            />
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Button
                variant="text"
                color="error"
              >
                {t('View details')}
              </Button>
            </Box>
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
            overflow: 'visible',
            position: 'relative',
            pt: 4.5,
            pb: 2,
            mt: 4.5,
          }}
        >
          <AvatarState
            useShadow
            state="primary"
            variant="rounded"
            sx={{
              width: theme.spacing(9),
              height: theme.spacing(9),
              position: 'absolute',
              top: theme.spacing(-4.5),
              left: '50%',
              marginLeft: theme.spacing(-4.5),
            }}
          >
            <MonetizationOnTwoToneIcon fontSize="large" />
          </AvatarState>
          <Box
            px={3.5}
            pt={3.5}
          >
            <Typography
              textAlign="center"
              variant="h1"
              lineHeight={1.3}
              fontWeight={600}
            >
              $8,348
            </Typography>
            <Typography
              textAlign="center"
              variant="h5"
              fontWeight={500}
              sx={{
                mb: 3,
              }}
              color="text.secondary"
            >
              {t('Monthly Income')}
            </Typography>
            <Divider
              sx={{
                mb: 2,
              }}
            />
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Button
                variant="text"
                color="primary"
              >
                {t('View details')}
              </Button>
            </Box>
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
            overflow: 'visible',
            position: 'relative',
            pt: 4.5,
            pb: 2,
            mt: 4.5,
          }}
        >
          <AvatarState
            useShadow
            state="warning"
            variant="rounded"
            sx={{
              width: theme.spacing(9),
              height: theme.spacing(9),
              position: 'absolute',
              top: theme.spacing(-4.5),
              left: '50%',
              marginLeft: theme.spacing(-4.5),
            }}
          >
            <SubscriptionsTwoToneIcon fontSize="large" />
          </AvatarState>
          <Box
            px={3.5}
            pt={3.5}
          >
            <Typography
              textAlign="center"
              variant="h1"
              lineHeight={1.3}
              fontWeight={600}
            >
              889
            </Typography>
            <Typography
              textAlign="center"
              variant="h5"
              fontWeight={500}
              sx={{
                mb: 3,
              }}
              color="text.secondary"
            >
              {t('Total Sales')}
            </Typography>
            <Divider
              sx={{
                mb: 2,
              }}
            />
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Button
                variant="text"
                color="warning"
              >
                {t('View details')}
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
