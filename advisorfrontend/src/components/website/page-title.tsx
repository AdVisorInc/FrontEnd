import {
  alpha,
  Box,
  Container,
  Unstable_Grid2 as Grid,
  Stack,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { ReactNode } from 'react';
import { useCustomization } from 'src/hooks/use-customization';
import { createTheme } from 'src/theme';

interface MarketingPageTitleProps {
  title: string;
  subheading: string;
  children?: ReactNode;
}

const MarketingPageTitle: React.FC<MarketingPageTitleProps> = ({ title, subheading, children }) => {
  const customization = useCustomization();

  const theme = createTheme({
    colorPreset: customization.colorPreset,
    direction: customization.direction,
    paletteMode: 'dark',
    layout: customization.layout,
  });
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <ThemeProvider theme={theme}>
      <Box
        flex={1}
        sx={{
          position: 'relative',
          backgroundColor: 'background.default',

          '&::after': {
            content: '" "',
            position: 'absolute',
            top: 0,
            opacity: 0.5,
            right: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/placeholders/covers/glow.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundPosition: 'right top',
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ height: '100%', zIndex: 2, position: 'relative' }}
        >
          <Box
            flex={1}
            pl={{ xs: 0, md: 12 }}
            pt={{ xs: 10, md: 12 }}
            pb={{ xs: 4, md: 8 }}
            position="relative"
            display="flex"
            flexDirection="column"
          >
            {mdUp && (
              <Box
                sx={{
                  width: 4,
                  backgroundColor: 'primary.main',
                  position: 'absolute',
                  left: theme.spacing(1.3),
                  top: 0,

                  '&::before': {
                    content: '" "',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 4,
                    height: 90,
                    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.default} 20%, ${theme.palette.primary.main} 100%)`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: theme.spacing(7.5),
                    height: theme.spacing(6.3),
                    background: 'none',
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    borderBottom: `4px solid ${theme.palette.primary.main}`,
                    borderBottomLeftRadius: theme.shape.borderRadius * 3,
                    position: 'absolute',
                    zIndex: 3,
                    top: theme.spacing(8.5),
                    left: theme.spacing(0),
                    boxShadow: `-35px 35px 35px 0 ${alpha(
                      theme.palette.background.paper,
                      0.5
                    )}, -40px 45px 45px 0 ${alpha(theme.palette.primary.main, 0.15)}`,

                    '&&::after': {
                      content: '" "',
                      position: 'absolute',
                      bottom: -4,
                      right: 0,
                      width: 54,
                      height: 4,
                      backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 20%, ${theme.palette.background.default} 100%)`,
                    },
                  }}
                />
              </Box>
            )}
            <Box flex={1}>
              <Grid container>
                <Grid
                  xs={12}
                  lg={10}
                  md={12}
                  pb={children && { xs: 2, sm: 3, md: 4 }}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  <Typography
                    variant="h1"
                    gutterBottom
                    color="text.primary"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="p"
                    fontWeight={400}
                    color="text.secondary"
                  >
                    {subheading}
                  </Typography>
                </Grid>
              </Grid>
              <Stack
                mt={{ xs: 2, md: 0 }}
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                alignItems="center"
              >
                {children}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default MarketingPageTitle;
