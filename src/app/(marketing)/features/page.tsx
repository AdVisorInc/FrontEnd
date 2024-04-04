'use client';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Box,
  Button,
  Card,
  Chip,
  Collapse,
  Container,
  Divider,
  Unstable_Grid2 as Grid,
  lighten,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'src/components/base/helmet';
import { RouterLink } from 'src/components/base/router-link';
import MarketingPageTitle from 'src/components/website/page-title';
import { useCustomization } from 'src/hooks/use-customization';
import { routes } from 'src/router/routes';
import { createTheme } from 'src/theme';

type Variant = {
  name: string;
  path: string;
  description: string;
};
type ComponentType = {
  type: string;
  image: React.ReactNode;
  variants: Variant[];
  description: string;
};
type SubCategory = {
  name: string;
  components: ComponentType[];
};
type Category = {
  categoryName: string;
  categoryDescription: string;
  subCategories: SubCategory[];
};
type NavigationProps = {
  navigationArray: Category[];
};

const navigationArray = [
  {
    categoryName: 'Ad Platforms Integration',
    categoryDescription: 'Centralize your advertising efforts across various platforms.',
    subCategories: [
      {
        name: 'Social Media Ads',
        components: [
          {
            type: 'meta-ads-integration',
            image: (
              <img
                src="/placeholders/features/meta_ads.png"
                alt="Meta Ads Integration"
              />
            ),
            variants: [],
            description: 'Integrate with Meta Ads to manage and optimize your campaigns.',
          },
          {
            type: 'tiktok-ads-integration',
            image: (
              <img
                src="/placeholders/features/tiktok_ads.png"
                alt="TikTok Ads Integration"
              />
            ),
            variants: [],
            description: 'Leverage TikTok Ads to reach your target audience and drive engagement.',
          },
          {
            type: 'google-ads-integration',
            image: (
              <img
                src="/placeholders/features/google_ads.png"
                alt="Google Ads Integration"
              />
            ),
            variants: [],
            description: 'Connect with Google Ads to streamline your advertising efforts.',
          },
        ],
      },
    ],
  },
  {
    categoryName: 'Analytics & Performance Insights',
    categoryDescription:
      'Unlock comprehensive insights and analytics for data-driven decision making.',
    subCategories: [
      {
        name: 'Analytics Tools',
        components: [
          {
            type: 'advanced-analytics',
            image: (
              <img
                src="/placeholders/features/advanced_analytics.png"
                alt="Advanced Analytics"
              />
            ),
            variants: [],
            description: 'Access advanced analytics to measure and optimize your ad performance.',
          },
        ],
      },
      {
        name: 'Performance Monitoring',
        components: [
          {
            type: 'real-time-reporting',
            image: (
              <img
                src="/placeholders/features/real_time_reporting.png"
                alt="Real-Time Reporting"
              />
            ),
            variants: [],
            description: 'Get real-time insights into your ad campaign performance.',
          },
          {
            type: 'customizable-kpi-weighting',
            image: (
              <img
                src="/placeholders/features/custom_kpis.png"
                alt="Customizable KPI Weighting"
              />
            ),
            variants: [],
            description: 'Customize KPI weighting to align with your specific business goals.',
          },
        ],
      },
    ],
  },
  {
    categoryName: 'AI & Automation for Campaign Optimization',
    categoryDescription: 'Leverage AI and automation to streamline and optimize your ad campaigns.',
    subCategories: [
      {
        name: 'AI-Driven Insights',
        components: [
          {
            type: 'ai-powered-recommendations',
            image: (
              <img
                src="/placeholders/features/ai_powered.png"
                alt="AI-Powered Recommendations"
              />
            ),
            variants: [],
            description: 'Get AI-powered recommendations to optimize your ad campaigns.',
          },
        ],
      },
      {
        name: 'Budget & Campaign Management',
        components: [
          {
            type: 'budget-optimization',
            image: (
              <img
                src="/placeholders/features/budget_optimization.png"
                alt="Budget Optimization"
              />
            ),
            variants: [],
            description: 'Optimize your ad spend with intelligent budget allocation.',
          },
          {
            type: 'automated-campaign-management',
            image: (
              <img
                src="/placeholders/features/automated_campaign.png"
                alt="Automated Campaign Management"
              />
            ),
            variants: [],
            description: 'Automate your campaign management tasks to save time and effort.',
          },
        ],
      },
    ],
  },
];

const Navigation = ({ navigationArray }: NavigationProps) => {
  const theme = useTheme();
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleDropdownToggle = (componentType) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [componentType]: !prevState[componentType],
    }));
  };

  return (
    <Box py={{ xs: 2, lg: 8, xl: 10 }}>
      {navigationArray.map((category, index) => (
        <React.Fragment key={category.categoryName}>
          {index !== 0 && <Divider />}
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mb: 1.5, mt: 1.5 }}
            >
              {category.categoryName}
            </Typography>
            <Typography
              variant="body1"
              mb={2}
            >
              {category.categoryDescription}
            </Typography>
            {category.subCategories.map((subCategory) => (
              <Stack
                id={subCategory.name.toLowerCase().replace(/\s+/g, '-')}
                direction="row"
                spacing={{ xs: 2, sm: 3 }}
                key={subCategory.name}
              >
                <Grid
                  container
                  spacing={{ xs: 2, sm: 3, md: 4 }}
                  alignItems="flex-start"
                >
                  {subCategory.components.map((component) => (
                    <Grid
                      xs={12}
                      sm={6}
                      md={4}
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
                            '.MuiChip-root': {
                              borderColor: 'primary.main',
                              backgroundColor: 'primary.main',
                              color: 'primary.contrastText',
                            },
                          },
                        }}
                        onClick={() => handleDropdownToggle(component.type)}
                      >
                        <Box
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
                          </Box>
                          <Box
                            sx={{
                              borderRadius: theme.shape.borderRadius + 'px',
                              display: 'flex',
                              justifyContent: 'center', // Center the image horizontally
                              alignItems: 'center', // Center the image vertically
                              overflow: 'hidden', // Ensure the image doesn't overflow the box
                              height: 200, // Specify a fixed height for the images
                              width: '100%', // Ensure the box takes full width
                              boxShadow: theme.shadows[10],
                            }}
                          >
                            {React.isValidElement(component.image) && (
                              <img
                                src={component.image.props.src}
                                alt={component.image.props.alt}
                                style={{ maxWidth: '100%', height: 'auto' }}
                              />
                            )}
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
                                  <Typography variant="h4">
                                    <ArrowDropDownIcon />
                                  </Typography>
                                </Box>
                              }
                            />
                          </Box>
                        </Box>
                        <Collapse in={openDropdowns[component.type]}>
                          <Box
                            sx={{
                              p: 2,
                              backgroundColor: theme.palette.background.paper,
                              borderTop: `1px solid ${theme.palette.divider}`,
                            }}
                          >
                            <Typography
                              variant="body1"
                              color="text.secondary"
                            >
                              {component.description}
                            </Typography>
                          </Box>
                        </Collapse>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            ))}
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};
const Page = () => {
  const { t } = useTranslation();
  const pageTitle = 'AdVisor Features';
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
          "Explore AdVisor's powerful features designed to optimize your ad campaigns and drive better results"
        )}
      >
        <Button
          size="large"
          variant="contained"
          href="#ad-platforms"
        >
          {t('Discover Features')}
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
