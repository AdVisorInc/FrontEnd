import { Box, Card, CardContent, Unstable_Grid2 as Grid, styled } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const BoxComposedImage = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 5,
  filter: 'grayscale(80%)',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const BoxComposedBg = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 6,
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const Component = () => {
  return (
    <Card>
      <Grid container>
        <Grid
          xs={12}
          md={8}
        >
          <Box
            sx={{
              position: 'relative',
              minHeight: '100%',
              display: 'flex',
              background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
            }}
          >
            <BoxComposedBg
              sx={{
                opacity: 0.4,
                background: 'linear-gradient(to bottom, #00b09b, #96c93d)!important',
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.3,
                backgroundImage: 'url("/placeholders/covers/2.jpg")',
              }}
            />
            <CardContent
              sx={{
                zIndex: 6,
                position: 'relative',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Grid
                container
                spacing={2}
              >
                <Grid
                  xs={12}
                  sm={6}
                >
                  <PlaceholderBox
                    disableHover
                    height={128}
                    dark
                  />
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                >
                  <PlaceholderBox
                    disableHover
                    height={128}
                    dark
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={4}
        >
          <CardContent>
            <PlaceholderBox height={256} />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Component;
