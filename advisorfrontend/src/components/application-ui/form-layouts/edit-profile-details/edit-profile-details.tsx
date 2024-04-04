import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function EditProfileDetails() {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid xs={12}>
        <Card>
          <Box
            p={2}
            display="flex"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            }}
          >
            <Box mb={{ xs: 2, sm: 0 }}>
              <Typography variant="h4">{t('Personal details')}</Typography>
              <Typography variant="subtitle1">
                {t('Manage informations related to your personal details')}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<EditTwoToneIcon />}
            >
              {t('Edit')}
            </Button>
          </Box>
          <Divider />
          <CardContent>
            <Typography variant="subtitle2">
              <Grid
                container
                spacing={1}
              >
                <Grid
                  xs={12}
                  sm={4}
                  md={3}
                  textAlign={{ sm: 'right' }}
                >
                  <Box pr={{ xs: 2, sm: 3 }}>{t('Name')}:</Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={8}
                  md={9}
                >
                  <Typography
                    variant="h6"
                    fontWeight={500}
                  >
                    Craig Donin
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sm={4}
                  md={3}
                  textAlign={{ sm: 'right' }}
                >
                  <Box pr={{ xs: 2, sm: 3 }}>{t('Date of birth')}:</Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={8}
                  md={9}
                >
                  <Typography
                    variant="h6"
                    fontWeight={500}
                  >
                    15 March 1977
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sm={4}
                  md={3}
                  textAlign={{ sm: 'right' }}
                >
                  <Box pr={{ xs: 2, sm: 3 }}>{t('Address')}:</Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={8}
                  md={9}
                >
                  <Box
                    sx={{
                      maxWidth: { xs: 'auto', sm: 340 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={500}
                    >
                      1749 High Meadow Lane, SEQUOIA NATIONAL PARK, California, 93262
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Card>
          <Box
            p={2}
            display="flex"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            }}
          >
            <Box mb={{ xs: 2, sm: 0 }}>
              <Typography variant="h4">{t('Account settings')}</Typography>
              <Typography variant="subtitle2">
                {t('Manage details related to your account')}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<EditTwoToneIcon />}
            >
              {t('Edit')}
            </Button>
          </Box>
          <Divider />
          <CardContent>
            <Typography variant="subtitle2">
              <Grid
                container
                spacing={1}
              >
                <Grid
                  xs={12}
                  sm={4}
                  md={3}
                  textAlign={{ sm: 'right' }}
                >
                  <Box pr={{ xs: 2, sm: 3 }}>{t('Language')}:</Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={8}
                  md={9}
                >
                  <Typography
                    variant="h6"
                    fontWeight={500}
                  >
                    English (US)
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sm={4}
                  md={3}
                  textAlign={{ sm: 'right' }}
                >
                  <Box pr={{ xs: 2, sm: 3 }}>{t('Timezone')}:</Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={8}
                  md={9}
                >
                  <Typography
                    variant="h6"
                    fontWeight={500}
                  >
                    GMT +2
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sm={4}
                  md={3}
                  textAlign={{ sm: 'right' }}
                >
                  <Box pr={{ xs: 2, sm: 3 }}>{t('Account status')}:</Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={8}
                  md={9}
                >
                  <Chip
                    size="small"
                    label={
                      <Box
                        fontWeight={600}
                        display="flex"
                        alignItems="center"
                      >
                        <DoneTwoToneIcon
                          fontSize="inherit"
                          sx={{ mr: 0.5 }}
                        />
                        {t('Active')}
                      </Box>
                    }
                    color="success"
                  />
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Card>
          <Box
            p={2}
            display="flex"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            }}
          >
            <Box mb={{ xs: 2, sm: 0 }}>
              <Typography variant="h4">{t('Email addresses')}</Typography>
              <Typography variant="subtitle2">
                {t('Manage details related to your associated email addresses')}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<EditTwoToneIcon />}
            >
              {t('Edit')}
            </Button>
          </Box>
          <Divider />
          <CardContent>
            <Typography variant="subtitle2">
              <Grid
                container
                spacing={1}
              >
                <Grid
                  xs={12}
                  sm={4}
                  md={3}
                  textAlign={{ sm: 'right' }}
                >
                  <Box pr={{ xs: 2, sm: 3 }}>{t('Primary email address')}:</Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={8}
                  md={9}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={500}
                      lineHeight={1}
                    >
                      example@demo.com
                    </Typography>

                    <Chip
                      size="small"
                      label={
                        <Box
                          fontWeight={600}
                          display="flex"
                          alignItems="center"
                        >
                          <DoneTwoToneIcon
                            fontSize="inherit"
                            sx={{ mr: 0.5 }}
                          />
                          {t('Primary')}
                        </Box>
                      }
                      color="success"
                    />
                  </Stack>
                </Grid>
                <Grid
                  xs={12}
                  sm={4}
                  md={3}
                  textAlign={{ sm: 'right' }}
                >
                  <Box pr={{ xs: 2, sm: 3 }}>{t('Secondary email address')}:</Box>
                </Grid>
                <Grid
                  xs={12}
                  sm={8}
                  md={9}
                >
                  <Typography
                    variant="h6"
                    fontWeight={500}
                  >
                    demo@example.com
                  </Typography>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EditProfileDetails;
