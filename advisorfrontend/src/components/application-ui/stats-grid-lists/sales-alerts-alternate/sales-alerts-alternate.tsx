import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
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
            px: 3,
            pb: 3,
            pt: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarState
              useShadow
              state="error"
              sx={{
                width: theme.spacing(8),
                height: theme.spacing(8),
              }}
            >
              <NotificationsActiveTwoToneIcon fontSize="large" />
            </AvatarState>
            <Typography
              variant="h1"
              sx={{
                pt: 3,
                fontSize: theme.typography.pxToRem(35),
              }}
            >
              86.453
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              color="text.secondary"
            >
              {t('Laptops sales')}
            </Typography>
            <Divider
              flexItem
              sx={{
                my: 3,
              }}
            />
            <Button
              color="error"
              variant="outlined"
              size="small"
            >
              {t('View details')}
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
            px: 3,
            pb: 3,
            pt: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarState
              useShadow
              state="primary"
              sx={{
                width: theme.spacing(8),
                height: theme.spacing(8),
              }}
            >
              <MonetizationOnTwoToneIcon fontSize="large" />
            </AvatarState>
            <Typography
              variant="h1"
              sx={{
                pt: 3,
                fontSize: theme.typography.pxToRem(35),
              }}
            >
              285.483
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              color="text.secondary"
            >
              {t('Total sales')}
            </Typography>
            <Divider
              flexItem
              sx={{
                my: 3,
              }}
            />
            <Button
              color="primary"
              variant="outlined"
              size="small"
            >
              {t('View details')}
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
            px: 3,
            pb: 3,
            pt: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarState
              useShadow
              state="secondary"
              sx={{
                width: theme.spacing(8),
                height: theme.spacing(8),
              }}
            >
              <AssignmentIndTwoToneIcon fontSize="large" />
            </AvatarState>
            <Typography
              variant="h1"
              sx={{
                pt: 3,
                fontSize: theme.typography.pxToRem(35),
              }}
            >
              5843
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              color="text.secondary"
            >
              {t('New accounts')}
            </Typography>
            <Divider
              flexItem
              sx={{
                my: 3,
              }}
            />
            <Button
              color="secondary"
              variant="outlined"
              size="small"
            >
              {t('View details')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
