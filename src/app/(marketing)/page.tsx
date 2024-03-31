'use client';

import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import Tilt from 'react-parallax-tilt';
import { Helmet } from 'src/components/base/helmet';
import { RouterLink } from 'src/components/base/router-link';
import { AvatarState } from 'src/components/base/styles/avatar';
import Carousel from 'src/components/website/carousel';
import HomepageFeaturesSet from 'src/components/website/features-set';
import HomepageHeroSection from 'src/components/website/hero';
import HomepageMultipleLayouts from 'src/components/website/multiple-layouts';
import HomepageRegularUpdates from 'src/components/website/regular-updates';
import { MarketingLayout as Layout } from 'src/layouts/marketing';
import { routes } from 'src/router/routes';

const Page = () => {
  const theme = useTheme();
  return (
    <>
      <Helmet heading="React UI Kit and Admin Dashboard Template" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.default',
          flex: 1,
        }}
      >
        <HomepageHeroSection />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.paper',
          flex: 1,
        }}
      >
        <HomepageFeaturesSet />
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.default',
          py: {
            xs: 2,
            sm: 3,
          },
        }}
      >
        <Container
          sx={{
            textAlign: 'center',
          }}
          maxWidth="xl"
        >
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              mt: {
                xs: 2,
                sm: 3,
                md: -6,
              },
              borderRadius: (theme) => theme.shape.borderRadius,
              mb: {
                xs: 2,
                sm: 3,
                md: 4,
              },
              '& .glare-wrapper, & > div': {
                borderRadius: (theme) => theme.shape.borderRadius * 6 + 'px !important',
              },
            }}
          >
            <Tilt
              scale={1}
              tiltMaxAngleX={1.8}
              perspective={300}
              glarePosition="all"
              glareEnable={true}
              glareColor={theme.palette.primary.dark}
              glareMaxOpacity={1}
              tiltMaxAngleY={1.8}
            >
              <AvatarState
                state="primary"
                useShadow
                sx={{
                  width: 'auto',
                  height: 'auto',
                  borderRadius: (theme) => theme.shape.borderRadius,
                  py: 2,
                  px: 4,
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                variant="rounded"
              >
                <Typography
                  variant="h1"
                  component="p"
                >
                  676
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  fontWeight={500}
                  sx={{
                    opacity: 0.8,
                  }}
                >
                  components
                </Typography>
              </AvatarState>
            </Tilt>
          </Box>
          <Typography
            variant="h1"
            component="h3"
            gutterBottom
            lineHeight={1.4}
          >
            Ready-to-Use UI Components
          </Typography>
          <Typography
            variant="h4"
            component="p"
            fontWeight={400}
            color="neutral.500"
            sx={{
              px: {
                xs: 0,
                sm: 2,
                md: 6,
                lg: 12,
                xl: 18,
              },
            }}
          >
            Get quick access to a wide array of UI components. Ready for any project, they're built
            to integrate smoothly and enhance your user experience.
          </Typography>
          <Button
            sx={{
              my: {
                xs: 2,
                sm: 3,
              },
            }}
            size="large"
            variant="outlined"
            component={RouterLink}
            href={routes.components.index}
          >
            Browse components
          </Button>
        </Container>
        <Box>
          <Carousel marqueeDirection="right" />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'background.paper',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <HomepageRegularUpdates />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.default',
          flex: 1,
        }}
      >
        <HomepageMultipleLayouts />
      </Box>
    </>
  );
};
export default Page;
