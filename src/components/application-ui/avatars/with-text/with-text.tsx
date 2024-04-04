import { Card, Divider, Unstable_Grid2 as Grid } from '@mui/material';
import AvatarTextSwitch from './avatar-text-switch';
import AvatarTitle from './avatar-title';
import AvatarTitleDescription from './avatar-title-description';
import AvatarTitleDescriptionAlternate from './avatar-title-description-alternate';
import AvatarTitleDescriptionStacked from './avatar-title-description-stacked';
import AvatarTitleLink from './avatar-title-link';

const Component = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid
          xs={12}
          md={4}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{ p: 2, height: '100%', minHeight: 128, display: 'flex', justifyContent: 'center' }}
          >
            <AvatarTitleLink />
          </Card>
        </Grid>
        <Grid
          xs={12}
          md={4}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{ p: 2, height: '100%', minHeight: 128, display: 'flex', justifyContent: 'center' }}
          >
            <AvatarTitle />
          </Card>
        </Grid>
        <Grid
          xs={12}
          md={4}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{ p: 2, height: '100%', minHeight: 128, display: 'flex', justifyContent: 'center' }}
          >
            <AvatarTitleDescription />
          </Card>
        </Grid>
        <Grid
          xs={12}
          md={4}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{ p: 2, height: '100%', minHeight: 128, display: 'flex', justifyContent: 'center' }}
          >
            <AvatarTitleDescriptionAlternate />
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: { xs: 3, md: 4 } }} />

      <Grid
        container
        justifyContent="stretch"
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid
          xs={12}
          md={4}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{ p: 2, height: '100%', minHeight: 164, display: 'flex', justifyContent: 'center' }}
          >
            <AvatarTitleDescriptionStacked />
          </Card>
        </Grid>
        <Grid
          xs={12}
          md={4}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{ p: 2, height: '100%', minHeight: 128, display: 'flex', justifyContent: 'center' }}
          >
            <AvatarTextSwitch />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Component;
