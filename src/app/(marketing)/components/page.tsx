'use client';

import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Unstable_Grid2 as Grid,
  lighten,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'src/components/base/helmet';
import { RouterLink } from 'src/components/base/router-link';
import MarketingPageTitle from 'src/components/website/page-title';
import { useCustomization } from 'src/hooks/use-customization';
import { MarketingLayout as Layout } from 'src/layouts/marketing';
import { routes } from 'src/router/routes';
import { createTheme } from 'src/theme';
import { configData } from 'src/utils/configData';

type Variant = {
  name: string;
  path: string;
  description: string;
};
type ComponentType = {
  type: string;
  image: React.ReactNode;
  variants: Variant[];
};
type SubCategory = {
  name: string;
  components: ComponentType[];
};
type Category = {
  categoryName: string;
  subCategories: SubCategory[];
  categoryDescription: string;
};
type NavigationProps = {
  navigationArray: Category[];
};
const navigationArray: Category[] = configData.categories.map((cat) => ({
  categoryName: cat.name,
  categoryDescription: cat.description,
  subCategories: cat.subCategories,
}));
const Navigation: React.FC<NavigationProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box
      py={{
        xs: 2,
        lg: 8,
        xl: 10,
      }}
    >
      {navigationArray.map((category) => (
        <Stack
          spacing={{
            xs: 2,
            sm: 3,
            md: 4,
            lg: 8,
            xl: 10,
          }}
          divider={<Divider />}
          key={category.categoryName}
        >
          {category.subCategories.map((subCategory) => {
            const totalItems = subCategory.components.reduce(
              (sum, component) => sum + component.variants.length,
              0
            );
            return (
              <Stack
                id={subCategory.name.toLowerCase().replace(/\s+/g, '-')}
                direction="row"
                spacing={{
                  xs: 2,
                  sm: 3,
                }}
                key={subCategory.name}
              >
                <Grid
                  width="100%"
                  container
                  columns={24}
                >
                  <Grid
                    xs={24}
                    lg={5}
                    pb={{
                      xs: 2,
                      lg: 0,
                    }}
                    textAlign={{
                      xs: 'center',
                      lg: 'left',
                    }}
                  >
                    <Link
                      color="text.primary"
                      href={`#${subCategory.name.toLowerCase().replace(/\s+/g, '-')}`}
                      variant="h3"
                      sx={{
                        '&:hover': {
                          color: alpha(theme.palette.text.primary, 0.86),
                        },
                      }}
                    >
                      {subCategory.name}
                    </Link>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      fontWeight={500}
                      component="p"
                    >
                      {totalItems} examples
                    </Typography>
                  </Grid>
                  <Grid
                    xs={24}
                    lg={19}
                    container
                    columns={12}
                    spacing={{
                      xs: 3,
                      xl: 5,
                    }}
                  >
                    {subCategory.components.map((component) => (
                      <Grid
                        xs={12}
                        md={4}
                        sm={6}
                        key={component.type}
                      >
                        <Card
                          elevation={0}
                          variant="outlined"
                          sx={{
                            overflow: 'visible',
                            transition: 'none',
                            mb: 1.5,
                            boxShadow: (theme) => theme.shadows[9],
                            '&:hover': {
                              borderColor: theme.palette.primary.main,
                              boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
                              '.MuiLink-root': {
                                backgroundColor: 'background.paper',
                                color:
                                  theme.palette.mode === 'dark' ? 'neutral.100' : 'neutral.900',
                              },
                              '.MuiChip-root': {
                                borderColor: 'primary.main',
                                backgroundColor: 'primary.main',
                                color: 'primary.contrastText',
                              },
                            },
                          }}
                        >
                          <Link
                            sx={{
                              borderRadius: 'inherit',
                              display: 'flex',
                              flexDirection: 'column',
                              position: 'relative',
                              px: {
                                xs: 2,
                                xl: 3,
                              },
                              backgroundColor:
                                theme.palette.mode === 'dark'
                                  ? lighten(theme.palette.neutral[900], 0.05)
                                  : 'neutral.25',
                            }}
                            component={RouterLink}
                            href={routes.components[component.type]}
                          >
                            <Box
                              py={2}
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Typography
                                variant="h5"
                                fontWeight={600}
                                color="text.primary"
                              >
                                {component.type
                                  .replace(/-/g, ' ')
                                  .replace(/(^\w)/, (m) => m.toUpperCase())}
                              </Typography>

                              <KeyboardArrowRightTwoToneIcon
                                sx={{
                                  mr: -0.5,
                                }}
                              />
                            </Box>
                            <Box
                              sx={{
                                borderRadius: theme.shape.borderRadius + 'px',
                                boxShadow: theme.shadows[10],
                                display: 'flex',
                                svg: {
                                  width: '100%',
                                },
                                '& rect[fill="#FF00F5"], g[fill="#FF00F5"], path[fill="#FF00F5"]': {
                                  fill: theme.palette.primary.main,
                                },
                                '& rect[stroke="#FF00F5"], path[stroke="#FF00F5"], circle[stroke="#FF00F5"]':
                                  {
                                    stroke: theme.palette.primary.main,
                                  },
                                '& rect[fill="#D9D9D9"]': {
                                  fill:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.neutral[800]
                                      : theme.palette.neutral[300],
                                },
                                '& path[fill="#000"], g[fill="#000"]': {
                                  fill:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.neutral[500]
                                      : theme.palette.neutral[900],
                                },
                                '& rect[stroke="#000"], path[stroke="#000"]': {
                                  stroke:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.neutral[800]
                                      : theme.palette.neutral[400],
                                },
                                '& rect[fill="#fff"], path[fill="#fff"]': {
                                  fill: theme.palette.background.paper,
                                },
                                '& rect[stroke="#fff"]': {
                                  stroke: theme.palette.background.paper,
                                },
                                '& rect[fill="#747474"]': {
                                  fill:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.neutral[600]
                                      : theme.palette.neutral[700],
                                },
                                '& rect[stroke="#747474"]': {
                                  stroke:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.neutral[800]
                                      : theme.palette.neutral[700],
                                },
                                '& path[fill="#BEBEBE"]': {
                                  fill:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.neutral[900]
                                      : theme.palette.neutral[50],
                                },
                                '& path[fill="#E1E1E1"]': {
                                  fill:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.neutral[800]
                                      : theme.palette.neutral[50],
                                },
                                '& path[stroke="#E1E1E1"]': {
                                  stroke:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.neutral[800]
                                      : theme.palette.neutral[50],
                                },
                                '& path[fill="#606060"]': {
                                  fill:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.neutral[100]
                                      : theme.palette.neutral[800],
                                },
                                '& rect[stroke="#BEBEBE"]': {
                                  stroke:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.neutral[900]
                                      : theme.palette.neutral[500],
                                },
                                '& rect[stroke="#D9D9D9"], path[stroke="#D9D9D9"]': {
                                  stroke:
                                    theme.palette.mode === 'dark'
                                      ? theme.palette.neutral[700]
                                      : theme.palette.neutral[500],
                                },
                              }}
                            >
                              {component.image}
                            </Box>
                            <Box
                              sx={{
                                height: 64,
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                left: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background:
                                  theme.palette.mode === 'dark'
                                    ? `linear-gradient(180deg, transparent 0%, ${lighten(
                                        theme.palette.neutral[900],
                                        0.05
                                      )} 64.06%)`
                                    : `linear-gradient(180deg, transparent 0%, ${lighten(
                                        theme.palette.neutral[50],
                                        0.05
                                      )} 64.06%)`,
                                borderBottomLeftRadius: 'inherit',
                                borderBottomRightRadius: 'inherit',
                              }}
                            >
                              <Chip
                                variant="outlined"
                                color="primary"
                                sx={{
                                  borderRadius: 21,
                                  backgroundColor: 'background.paper',
                                  borderWidth: 1,
                                  borderColor:
                                    theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.500',
                                  color:
                                    theme.palette.mode === 'dark' ? 'neutral.300' : 'neutral.900',
                                  boxShadow: theme.shadows[10],
                                  py: 1.8,
                                  px: 0.5,
                                  mb: -5,
                                }}
                                label={
                                  <Box
                                    display="flex"
                                    alignItems="center"
                                  >
                                    <Typography
                                      variant="h4"
                                      sx={{
                                        pr: 0.5,
                                      }}
                                    >
                                      {component.variants.length}
                                    </Typography>
                                    <Typography
                                      variant="h5"
                                      fontWeight={400}
                                      color="inherit"
                                      sx={{
                                        opacity: 0.72,
                                      }}
                                    >
                                      {t('examples')}
                                    </Typography>
                                  </Box>
                                }
                              />
                            </Box>
                          </Link>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Stack>
            );
          })}
        </Stack>
      ))}
    </Box>
  );
};
const Page = () => {
  const { t } = useTranslation();
  const pageTitle = 'UI Components';
  const totalItems = navigationArray.reduce((total, category) => {
    return (
      total +
      category.subCategories.reduce((subTotal, subCategory) => {
        return (
          subTotal +
          subCategory.components.reduce((compTotal, component) => {
            return compTotal + component.variants.length;
          }, 0)
        );
      }, 0)
    );
  }, 0);
  const customization = useCustomization();
  const theme = createTheme({
    colorPreset: customization.colorPreset,
    direction: customization.direction,
    paletteMode: customization.paletteMode,
    layout: customization.layout,
  });
  return (
    <>
      <Helmet heading={t(pageTitle)} />
      <MarketingPageTitle
        title={t(pageTitle)}
        subheading={t(
          "Refine your app's design with our UI toolkit. Choose from a range of elements for effortless integration and enhanced user interactions"
        )}
      >
        <Button
          size="large"
          variant="contained"
          href="#application-shells"
        >
          {t('Discover components')} ({totalItems})
        </Button>
        <Button
          size="large"
          component={RouterLink}
          href={routes.website.pricing}
          color="secondary"
          sx={{
            fontWeight: 500,
          }}
        >
          {t('View pricing options')}
        </Button>
      </MarketingPageTitle>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Navigation navigationArray={navigationArray} />
        </Container>
      </ThemeProvider>
    </>
  );
};
export default Page;
