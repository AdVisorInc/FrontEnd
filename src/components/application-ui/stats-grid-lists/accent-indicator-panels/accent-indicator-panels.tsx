import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import { Box, CardContent, Chip, Unstable_Grid2 as Grid, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CardIndicatorColor } from 'src/components/base/styles/card-indicator-color';

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
        <CardIndicatorColor
          elevation={6}
          indicatorColor="primary"
        >
          <CardContent>
            <Link
              color="text.primary"
              variant="h5"
              href=""
              underline="hover"
              onClick={(e) => e.preventDefault()}
            >
              Presentation site design
            </Link>
            <Box
              mt={1}
              display="flex"
              alignItems="center"
            >
              <Chip
                color="primary"
                label={t('On hold')}
              />
              <Typography
                color="error"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <AccessTimeTwoToneIcon
                  sx={{
                    ml: 1,
                    mr: 0.5,
                    color: 'error.main',
                  }}
                  fontSize="small"
                />
                2:35 pm
              </Typography>
            </Box>
          </CardContent>
        </CardIndicatorColor>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <CardIndicatorColor
          elevation={6}
          indicatorColor="success"
        >
          <CardContent>
            <Link
              color="text.primary"
              variant="h5"
              href=""
              underline="hover"
              onClick={(e) => e.preventDefault()}
            >
              Create UI mockups
            </Link>
            <Box
              mt={1}
              display="flex"
              alignItems="center"
            >
              <Chip
                color="success"
                label={t('Completed')}
              />
              <Typography
                color="secondary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <AccessTimeTwoToneIcon
                  sx={{
                    ml: 1,
                    mr: 0.5,
                  }}
                  fontSize="small"
                />
                09:40 pm
              </Typography>
            </Box>
          </CardContent>
        </CardIndicatorColor>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <CardIndicatorColor
          elevation={6}
          indicatorColor="warning"
        >
          <CardContent>
            <Link
              color="text.primary"
              variant="h5"
              href=""
              underline="hover"
              onClick={(e) => e.preventDefault()}
            >
              UX research
            </Link>
            <Box
              mt={1}
              display="flex"
              alignItems="center"
            >
              <Chip
                color="warning"
                label={t('Scheduled')}
              />
              <Typography
                color="secondary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <AccessTimeTwoToneIcon
                  sx={{
                    ml: 1,
                    mr: 0.5,
                  }}
                  fontSize="small"
                />
                12:35 pm
              </Typography>
            </Box>
          </CardContent>
        </CardIndicatorColor>
      </Grid>
    </Grid>
  );
}

export default Component;
