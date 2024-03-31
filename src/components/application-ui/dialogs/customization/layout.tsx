import AlignVerticalTopTwoToneIcon from '@mui/icons-material/AlignVerticalTopTwoTone';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import VerticalSplitTwoToneIcon from '@mui/icons-material/VerticalSplitTwoTone';
import ViewCompactTwoToneIcon from '@mui/icons-material/ViewCompactTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Unstable_Grid2 as Grid,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  MenuItem,
  Radio,
  Select,
  Stack,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useState, type ReactElement } from 'react';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { AvatarState } from 'src/components/base/styles/avatar';
import BaseButtonTab from 'src/components/base/styles/button-tab';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';
import { Layout } from 'src/contexts/customization';

interface Option {
  title: string;
  value: Layout;
  icon: ReactElement;
  avatarSrc?: string;
}

const options: Option[] = [
  {
    title: 'Dark',
    value: 'vertical-shells-dark',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Dark Alternate',
    value: 'vertical-shells-dark-alternate',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Brand',
    value: 'vertical-shells-brand',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'White',
    value: 'vertical-shells-white',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'White Off',
    value: 'vertical-shells-white-off',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Light',
    value: 'vertical-shells-light',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Accent Header',
    value: 'vertical-shells-accent-header',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Double',
    value: 'collapsed-shells-double',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Double Accent',
    value: 'collapsed-shells-double-accent',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Double Dark',
    value: 'collapsed-shells-double-dark',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Single',
    value: 'collapsed-shells-single',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Single Accent',
    value: 'collapsed-shells-single-accent',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Single White',
    value: 'collapsed-shells-single-white',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Single White Off',
    value: 'collapsed-shells-single-white-off',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Top Nav',
    value: 'stacked-shells-top-nav',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Top Nav Accent',
    value: 'stacked-shells-top-nav-accent',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Top Nav Tabs',
    value: 'stacked-shells-top-nav-tabs',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
  {
    title: 'Top Nav Wide',
    value: 'stacked-shells-top-nav-wide',
    icon: <AlignVerticalTopTwoToneIcon />,
  },
];

interface Category {
  options: Option[];
  description: string;
  state: string;
  icon: ReactElement;
}

const categorizedOptions: Record<string, Category> = {
  'Vertical Shells': {
    options: options.filter((option) => option.value.includes('vertical-shells')),
    description: 'Vertical alignment shell options',
    icon: <VerticalSplitTwoToneIcon />,
    state: 'primary',
  },
  'Collapsed Shells': {
    options: options.filter((option) => option.value.includes('collapsed-shells')),
    description: 'Compact, minimized shell choices',
    icon: <ViewCompactTwoToneIcon />,
    state: 'warning',
  },
  'Stacked Shells': {
    options: options.filter((option) => option.value.includes('stacked-shells')),
    description: 'Layered, sequential shell settings',
    icon: <LayersTwoToneIcon />,
    state: 'success',
  },
};

interface OptionsLayoutProps {
  onChange: (value: string) => void;
  value?: string;
}

const findCategoryOfSelectedOption = (selectedOptionValue) => {
  return (
    Object.entries(categorizedOptions).find(([_, category]) =>
      category.options.some((option) => option.value === selectedOptionValue)
    )?.[0] || 'None'
  );
};

export const OptionsLayout: React.FC<OptionsLayoutProps> = ({ onChange, value }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const initialCategory = findCategoryOfSelectedOption(value);

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(value);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string): void => {
    if (categorizedOptions[newValue]) {
      setActiveCategory(newValue);
    }
  };

  const handleRadioChange = (optionValue: string): void => {
    setSelectedOption(optionValue);
    onChange(optionValue);
  };

  useEffect(() => {
    if (value) {
      setSelectedOption(value);
      const newCategory = findCategoryOfSelectedOption(value);
      setActiveCategory(newCategory);
    }
  }, [value]);

  const tabData = Object.entries(categorizedOptions).map(([key, category]) => ({
    value: key,
    title: key,
    description: category.description,
    icon: category.icon,
    state: category.state,
  }));

  const handleSelectChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ): void => {
    const categoryKey = event.target.value as string;
    setActiveCategory(categoryKey);
  };

  return (
    <>
      <Card
        elevation={0}
        variant="outlined"
        sx={{
          borderWidth: '0 0 1px 0',
          borderRadius: 0,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.400'),
          px: { xs: 2, md: 3 },
          pb: { xs: 2, sm: 0 },
          overflow: 'visible',
        }}
      >
        <Box
          py={{ xs: 2, md: 3 }}
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
        >
          <Box overflow="hidden">
            <Typography variant="h5">Layout Blueprints</Typography>
            <Typography
              color="text.secondary"
              noWrap
            >
              Choose one of the multiple layout blueprint shells that cover most apps use cases.
            </Typography>
          </Box>
          <Chip
            variant="outlined"
            sx={{
              mt: { xs: 2, sm: 0 },
            }}
            color="primary"
            label={
              <>
                <InlineBadge>
                  <PulseBadge
                    variant="dot"
                    color="primary"
                    sx={{
                      mr: 1,
                    }}
                  />
                  {selectedOption
                    ? `${findCategoryOfSelectedOption(selectedOption)} - ${options.find(
                        (option) => option.value === selectedOption
                      )?.title}`
                    : 'None'}
                </InlineBadge>
              </>
            }
          />
        </Box>
        {!smDown ? (
          <Tabs
            value={activeCategory}
            variant="fullWidth"
            onChange={handleTabChange}
            sx={{
              overflow: 'visible',
              '& .MuiTabs-indicator': {
                display: 'none',
              },
              '& .MuiTabs-scroller': {
                overflow: 'visible !important',
              },
            }}
          >
            {tabData.map((tab) => (
              <BaseButtonTab
                key={tab.value}
                componentType="tab"
                value={tab.value}
                label={
                  <Stack
                    textAlign="left"
                    width="100%"
                    direction="row"
                    spacing={1.5}
                    mt={1}
                  >
                    {lgUp && (
                      <AvatarState
                        isSoft
                        variant="rounded"
                        sx={{
                          width: 44,
                          height: 44,
                        }}
                        //@ts-ignore
                        state={tab.state}
                      >
                        {tab.icon}
                      </AvatarState>
                    )}
                    <Box overflow="hidden">
                      <Typography
                        variant="h5"
                        noWrap
                      >
                        {tab.title} ({categorizedOptions[tab.value].options.length})
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        gutterBottom
                        noWrap
                      >
                        {tab.description}
                      </Typography>
                    </Box>
                  </Stack>
                }
              />
            ))}
          </Tabs>
        ) : (
          <Select
            value={activeCategory}
            //@ts-ignore
            onChange={handleSelectChange}
            fullWidth
          >
            {Object.keys(categorizedOptions).map((categoryKey) => (
              <MenuItem
                key={categoryKey}
                value={categoryKey}
              >
                {categoryKey} ({categorizedOptions[categoryKey].options.length})
              </MenuItem>
            ))}
          </Select>
        )}
      </Card>
      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
        >
          {categorizedOptions[activeCategory].options.map((option) => (
            <Grid
              key={option.value}
              xs={12}
              md={3}
            >
              <Card
                elevation={0}
                sx={{ border: 0 }}
              >
                <ListItemButton
                  sx={{
                    p: '1px',
                    flexDirection: 'column',
                    borderRadius: 'inherit',
                    boxShadow: `0 0 0 1px ${theme.palette.divider} inset`,
                    '&:hover': {
                      backgroundColor: 'background.paper',
                      boxShadow: `0 0 0 1px ${theme.palette.primary.main} inset`,
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'background.paper',
                      boxShadow: `0 0 0 1px ${theme.palette.primary.main} inset`,
                      '&:hover': {
                        backgroundColor: 'background.paper',
                      },
                    },
                  }}
                  selected={option.value === selectedOption}
                  onClick={() => handleRadioChange(option.value)}
                >
                  <ListItemAvatar sx={{ width: '100%' }}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? alpha(theme.palette.neutral[100], 0.06)
                            : 'neutral.100',
                        width: '100%',
                        minHeight: 112,
                        p: 2,

                        img: {
                          borderRadius: `${theme.shape.borderRadius}px`,
                        },
                      }}
                      src={option.avatarSrc && option.avatarSrc}
                    >
                      {!option.avatarSrc && (
                        <PlaceholderBox
                          height={32}
                          flex={1}
                        />
                      )}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ width: '100%' }}
                    disableTypography
                    primary={
                      <Stack
                        direction="row"
                        alignItems="center"
                        width="100%"
                        px={2}
                        py={1}
                      >
                        <Radio
                          checked={option.value === selectedOption}
                          onChange={() => handleRadioChange(option.value)}
                          value={option.value}
                          size="small"
                          edge="start"
                          name="radio-buttons"
                          inputProps={{ 'aria-label': option.title }}
                          color="primary"
                        />
                        <Typography
                          variant="h6"
                          noWrap
                        >
                          {option.title}
                        </Typography>
                      </Stack>
                    }
                  />
                </ListItemButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </>
  );
};

OptionsLayout.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOf([
    'vertical-shells-dark',
    'vertical-shells-dark-alternate',
    'vertical-shells-brand',
    'vertical-shells-white',
    'vertical-shells-white-off',
    'vertical-shells-light',
    'vertical-shells-accent-header',
    'collapsed-shells-double',
    'collapsed-shells-double-accent',
    'collapsed-shells-double-dark',
    'collapsed-shells-single',
    'collapsed-shells-single-accent',
    'collapsed-shells-single-white',
    'collapsed-shells-single-white-off',
    'stacked-shells-top-nav',
    'stacked-shells-top-nav-accent',
    'stacked-shells-top-nav-tabs',
    'stacked-shells-top-nav-wide',
  ]),
};
