import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Unstable_Grid2 as Grid,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
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
        lg={4}
        md={6}
      >
        <Card
          sx={{
            position: 'relative',
            p: { xs: 2, sm: 3, md: 5 },
          }}
        >
          <CardActions>
            <Chip
              label="68 sales"
              color="error"
              variant="filled"
            />
          </CardActions>
          <Avatar
            variant="rounded"
            sx={{
              mb: 3,
              width: 54,
              height: 54,
              background: theme.palette.info.main,
              color: theme.palette.info.contrastText,
            }}
          >
            <SubscriptionsTwoToneIcon />
          </Avatar>
          <Typography
            variant="h4"
            sx={{
              mb: 1,
            }}
          >
            {t('Sales statistics')}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              mb: 3,
            }}
          >
            You can build unlimited layout styles using any of the 500+ included components and
            elements...
          </Typography>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardTwoToneIcon />}
          >
            {t('View live preview')}
          </Button>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            position: 'relative',
            p: { xs: 2, sm: 3, md: 5 },
          }}
        >
          <CardActions>
            <Stack
              direction="row"
              spacing={1}
            >
              <Chip
                label={t('Promo')}
                color="warning"
                variant="filled"
              />
              <Chip
                label={t('Special')}
                color="success"
                variant="filled"
              />
            </Stack>
          </CardActions>
          <Avatar
            variant="rounded"
            sx={{
              mb: 3,
              width: 54,
              height: 54,
              background: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
              color: theme.palette.common.white,
            }}
          >
            <PersonTwoToneIcon />
          </Avatar>
          <Typography
            variant="h4"
            sx={{
              mb: 1,
            }}
          >
            {t('Generated reports')}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              mb: 3,
            }}
          >
            You can build unlimited layout styles using any of the 500+ included components and
            elements...
          </Typography>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardTwoToneIcon />}
          >
            {t('View live preview')}
          </Button>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            position: 'relative',
            p: { xs: 2, sm: 3, md: 5 },
          }}
        >
          <CardActions>
            <Chip
              label={t('Overdue')}
              color="error"
            />
          </CardActions>
          <Avatar
            variant="rounded"
            sx={{
              mb: 3,
              width: 54,
              height: 54,
              background: 'linear-gradient(60deg, #29323c 0%, #485563 100%) !important',
              color: theme.palette.common.white,
            }}
          >
            <MonetizationOnTwoToneIcon />
          </Avatar>
          <Typography
            variant="h4"
            sx={{
              mb: 1,
            }}
          >
            {t('Pricing plans')}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              mb: 3,
            }}
          >
            You can build unlimited layout styles using any of the 500+ included components and
            elements...
          </Typography>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardTwoToneIcon />}
          >
            {t('View live preview')}
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
