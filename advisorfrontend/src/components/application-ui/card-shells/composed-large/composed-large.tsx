import { Box, Card, CardContent, CardHeader, Unstable_Grid2 as Grid, styled } from '@mui/material';
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
          md={5}
        >
          <CardContent>
            <PlaceholderBox height={256} />
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={7}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              minHeight: '100%',
              flexDirection: 'column',
              background: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%) !important',
            }}
          >
            <BoxComposedBg
              sx={{
                opacity: 0.6,
                background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.4,
                backgroundImage: (theme) =>
                  theme.palette.mode === 'dark'
                    ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/placeholders//covers/1.jpg")`
                    : `url("/placeholders/covers/1.jpg")`,
              }}
            />
            <Box
              position="relative"
              zIndex={6}
              flex={1}
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
              width="100%"
            >
              <CardHeader
                title={
                  <PlaceholderBox
                    disableHover
                    dark
                    height={64}
                  />
                }
              />
              <CardHeader
                title={
                  <PlaceholderBox
                    disableHover
                    dark
                    height={32}
                  />
                }
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Component;
