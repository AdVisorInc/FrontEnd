import { Avatar, Box, Card, Unstable_Grid2 as Grid, Rating, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import VerticalMenuPillsSecondary from 'src/components/application-ui/vertical-menus/pills/menu-pills-secondary';
import VerticalMenuSquarePrimary from 'src/components/application-ui/vertical-menus/square/menu-square-primary';
import NavBoxVerticalMenu from './nav-box-vertical-menu';

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
        <Card>
          <NavBoxVerticalMenu />
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
          >
            <Box>
              <Box
                sx={{
                  textAlign: 'center',
                }}
                py={{ xs: 2, sm: 3, md: 5 }}
                px={2}
              >
                <Avatar
                  variant="square"
                  sx={{
                    mx: 'auto',
                    mb: 2,
                    width: 'auto',
                    height: 32,
                    background: 'transparent',
                    img: {
                      objectFit: 'contain',
                    },
                  }}
                  src="/placeholders/logo/netflix.svg"
                />
                <Rating
                  defaultValue={3.5}
                  precision={0.5}
                />
                <Typography
                  variant="subtitle2"
                  textAlign="center"
                  color="text.secondary"
                  sx={{ pt: 2 }}
                >
                  {t(
                    'Powerful components across multiple product niches for fast & perfect apps development processes'
                  )}
                  .
                </Typography>
              </Box>
              <Box
                px={2}
                pb={2}
              >
                <VerticalMenuPillsSecondary />
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
          >
            <Box>
              <Box
                sx={{
                  textAlign: 'center',
                }}
                py={{ xs: 2, sm: 3, md: 5 }}
                px={2}
              >
                <Avatar
                  variant="square"
                  sx={{
                    mx: 'auto',
                    mb: 2,
                    width: 'auto',
                    height: 32,
                    background: 'transparent',
                    img: {
                      objectFit: 'contain',
                    },
                  }}
                  src="/placeholders/logo/slack-big.svg"
                />
                <Rating
                  defaultValue={5}
                  precision={0.5}
                />
                <Typography
                  sx={{
                    pt: 2,
                    pb: 2,
                  }}
                  variant="subtitle2"
                  textAlign="center"
                  color="text.secondary"
                >
                  {t(
                    'Powerful components across multiple product niches for fast & perfect apps development processes'
                  )}
                  .
                </Typography>
              </Box>
              <VerticalMenuSquarePrimary />
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
