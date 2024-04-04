import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import { Box, Button, Card, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

function Component() {
  const { t } = useTranslation();

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
            p: { xs: 2, sm: 3, lg: 4 },
          }}
        >
          <AvatarState
            state="primary"
            sx={{
              mb: 3,
              width: 64,
              height: 64,
            }}
          >
            <SubscriptionsTwoToneIcon />
          </AvatarState>
          <Typography
            variant="h4"
            sx={{
              mb: 1.5,
            }}
          >
            {t('Starter templates')}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 3,
            }}
            color="text.secondary"
          >
            You can build unlimited layout styles using any of the 500+ included components and
            elements...
          </Typography>
          <Box
            sx={{
              textAlign: 'right',
            }}
          >
            <Button
              variant="text"
              endIcon={<ArrowForwardTwoToneIcon />}
            >
              {t('Learn more')}
            </Button>
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
            p: { xs: 2, sm: 3, lg: 4 },
          }}
        >
          <AvatarState
            sx={{
              mb: 3,
              width: 64,
              height: 64,
              background: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%) !important',
              color: 'common.white',
            }}
          >
            <PersonTwoToneIcon />
          </AvatarState>
          <Typography
            variant="h4"
            sx={{
              mb: 1.5,
            }}
          >
            {t('Simple to use')}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 3,
            }}
            color="text.secondary"
          >
            You can build unlimited layout styles using any of the 500+ included components and
            elements...
          </Typography>
          <Box
            sx={{
              textAlign: 'right',
            }}
          >
            <Button
              variant="text"
              endIcon={<ArrowForwardTwoToneIcon />}
            >
              {t('Learn more')}
            </Button>
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
            p: { xs: 2, sm: 3, lg: 4 },
          }}
        >
          <AvatarState
            sx={{
              mb: 3,
              width: 64,
              height: 64,
              background: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%) !important',
              color: 'common.white',
            }}
          >
            <MonetizationOnTwoToneIcon />
          </AvatarState>
          <Typography
            variant="h4"
            sx={{
              mb: 1.5,
            }}
          >
            {t('Lightweight')}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 3,
            }}
            color="text.secondary"
          >
            You can build unlimited layout styles using any of the 500+ included components and
            elements...
          </Typography>
          <Box
            sx={{
              textAlign: 'right',
            }}
          >
            <Button
              variant="text"
              endIcon={<ArrowForwardTwoToneIcon />}
            >
              {t('Learn more')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
