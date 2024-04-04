import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import SearchOffTwoToneIcon from '@mui/icons-material/SearchOffTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Masonry from '@mui/lab/Masonry';
import {
  alpha,
  Box,
  Card,
  CardActionArea,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Tab,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { FC, useEffect, useState } from 'react';
import { AvatarState } from 'src/components/base/styles/avatar';
import { TabsAlternate } from 'src/components/base/styles/tabs';
import { MenuListWrapperRoundedPrimary } from 'src/components/base/styles/vertical-menus';
import { Category, dummyData, iconMapping, Item } from './data';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

interface TabsSpotlightSearchProps {
  onClose?: () => void;
  open?: boolean;
}

export const TabsSpotlightSearch: FC<TabsSpotlightSearchProps> = (props) => {
  const { onClose, open = false, ...other } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const firstCategoryWithResults = Object.keys(groupedItems).find(
      (category) => groupedItems[category].length > 0
    );
    const tabIndex = categoriesWithResults.indexOf(firstCategoryWithResults as string);
    if (tabIndex !== -1) {
      setSelectedTab(tabIndex);
    }
  }, [filteredItems]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setSearchInitiated(true);

    if (newSearchTerm.trim() === '') {
      setFilteredItems([]);
      setSearchInitiated(false);
      return;
    }

    setLoading(true);
    const randomLoadingTime = Math.round(Math.random() * 1000);
    setTimeout(() => {
      const filtered = dummyData.filter((item) =>
        item.title.toLowerCase().includes(newSearchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
      setLoading(false);
    }, randomLoadingTime);
  };

  const groupedItems = filteredItems.reduce(
    (groups, item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
      return groups;
    },
    {} as Record<Category, Item[]>
  );

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedTab(event.target.value as number);
  };

  const getAvatarContent = (item: Item) => {
    let IconComponent;
    switch (item.category) {
      case 'folders':
      case 'files':
        IconComponent = iconMapping[item.avatar];
        const state =
          item.category === 'folders' ? 'warning' : item.category === 'files' ? 'info' : 'primary';
        const isSoft =
          item.category === 'folders' ? true : item.category === 'files' ? false : true;
        const variant =
          item.category === 'folders' ? 'rounded' : item.category === 'files' ? null : 'rounded';
        return (
          <AvatarState
            isSoft={isSoft}
            sx={{
              width: 48,
              height: 48,
            }}
            variant={variant}
            state={state}
          >
            <IconComponent fontSize="small" />
          </AvatarState>
        );
      case 'users':
        return (
          <AvatarState
            useShadow
            sx={{
              width: 48,
              height: 48,
            }}
            state="secondary"
            src={item.avatar}
          />
        );
      default:
        return null;
    }
  };

  const heights = [150, 75, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

  const getTabContent = (items: Item[], category: Category) => {
    switch (category) {
      case 'images':
        return (
          <Box
            display="flex"
            justifyContent="center"
            px={0.5}
          >
            <Masonry
              columns={{ xs: 1, sm: 3 }}
              spacing={{ xs: 1, sm: 2 }}
            >
              {items.map((item, index) => (
                <Card
                  sx={{
                    height: heights[index % heights.length],
                  }}
                  key={item.id}
                >
                  <CardActionArea
                    sx={{
                      width: '100%',
                      height: '100%',
                      filter: 'grayscale(60%)',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundImage: `url("${item.avatar}")`,

                      '&:hover': {
                        filter: 'grayscale(0%)',
                      },
                    }}
                  />
                </Card>
              ))}
            </Masonry>
          </Box>
        );
      default:
        return (
          <MenuListWrapperRoundedPrimary
            //@ts-ignore
            component="div"
            disablePadding
            key={category}
          >
            {items.map((item) => (
              <MenuItem key={item.title}>
                <ListItemAvatar
                  sx={{
                    minWidth: 38,
                    mr: 1.5,
                    ml: -1,
                  }}
                >
                  {getAvatarContent(item)}
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={item.description}
                  primaryTypographyProps={{ variant: 'h6', noWrap: true }}
                  secondaryTypographyProps={{ variant: 'subtitle2', noWrap: true }}
                />
                <ChevronRightTwoToneIcon
                  sx={{
                    opacity: 0.5,
                  }}
                />
              </MenuItem>
            ))}
          </MenuListWrapperRoundedPrimary>
        );
    }
  };

  const categoriesWithResults = Object.keys(groupedItems);

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        fullScreen={fullScreen}
        scroll="paper"
        maxWidth="sm"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'transparent !important',
            },
          },
        }}
        sx={{
          '.MuiDialog-container': {
            alignItems: 'flex-start',
            pt: { xs: 0, md: 4, lg: 6 },
            maxHeight: { xs: 'unset', md: 736 },
            height: { xs: '100%', md: '80%' },
          },
        }}
        {...other}
      >
        <DialogTitle sx={{ p: 0 }}>
          <OutlinedInput
            sx={{
              fontSize: 16,
              '.MuiOutlinedInput-input': {
                height: '40px',
              },
              '.MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
            autoFocus
            margin="none"
            id="search"
            type="text"
            autoComplete="off"
            fullWidth
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchTwoToneIcon fontSize="small" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                {searchTerm ? (
                  <IconButton
                    size="small"
                    sx={{ mr: 0.5 }}
                    aria-label="clear search"
                    onClick={() => {
                      setSearchTerm('');
                      setFilteredItems([]);
                      setSearchInitiated(false);
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                ) : (
                  <IconButton
                    size="small"
                    color="primary"
                    sx={{ mr: 0.5 }}
                    onClick={onClose}
                    aria-label="close search dialog"
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )}
              </InputAdornment>
            }
          />
        </DialogTitle>
        {!searchInitiated && filteredItems.length === 0 && fullScreen && (
          <>
            <Divider />
            <Stack
              minHeight={164}
              justifyContent="center"
              direction="column"
              alignItems="center"
              spacing={2}
              pt={3}
            >
              <QueryStatsTwoToneIcon sx={{ fontSize: 42, color: 'neutral.500' }} />
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  sx={{
                    px: 6,
                    pb: 2,
                  }}
                >
                  Explore Your Digital Workspace
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                >
                  Instantly navigate to any folder, user profile, document, or app with ease.
                </Typography>
              </Box>
            </Stack>
          </>
        )}
        {loading ? (
          <>
            <Divider />
            <Box
              height={164}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CircularProgress size={36} />
            </Box>
          </>
        ) : (
          searchInitiated && (
            <DialogContent sx={{ overflowX: 'hidden', p: 0 }}>
              {categoriesWithResults.length > 0 ? (
                <>
                  <Box
                    p={1.5}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.neutral[25], 0.02)
                          : 'neutral.25',
                    }}
                  >
                    {!fullScreen ? (
                      categoriesWithResults.length === 1 ? (
                        <Typography variant="h5">
                          {`${capitalizeFirstLetter(categoriesWithResults[0])} (${
                            groupedItems[categoriesWithResults[0]].length
                          })`}
                        </Typography>
                      ) : (
                        <TabsAlternate
                          value={selectedTab}
                          onChange={handleChangeTab}
                          centered
                          textColor="secondary"
                          variant="fullWidth"
                          indicatorColor="secondary"
                        >
                          {categoriesWithResults.map((category) => (
                            <Tab
                              sx={{
                                fontSize: 13,
                              }}
                              key={category}
                              label={`${category.toUpperCase()} (${groupedItems[category].length})`}
                            />
                          ))}
                        </TabsAlternate>
                      )
                    ) : categoriesWithResults.length === 1 ? (
                      <Typography variant="h5">
                        {`${capitalizeFirstLetter(categoriesWithResults[0])} (${
                          groupedItems[categoriesWithResults[0]].length
                        })`}
                      </Typography>
                    ) : (
                      <Select
                        value={selectedTab}
                        //@ts-ignore
                        onChange={handleChangeSelect}
                        displayEmpty
                        fullWidth
                        inputProps={{ 'aria-label': 'Search with select' }}
                      >
                        {categoriesWithResults.map((category, index) => (
                          <MenuItem
                            key={category}
                            value={index}
                          >
                            {`${capitalizeFirstLetter(category)} (${
                              groupedItems[category].length
                            })`}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  </Box>
                  {categoriesWithResults.map(
                    (category, index) =>
                      index === selectedTab && (
                        <Box
                          p={{ xs: 1.5, sm: 2 }}
                          key={category}
                        >
                          {getTabContent(groupedItems[category], category as Category)}
                        </Box>
                      )
                  )}
                </>
              ) : (
                <>
                  <Divider />
                  <Stack
                    minHeight={164}
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                  >
                    <SearchOffTwoToneIcon sx={{ fontSize: 42, color: 'neutral.500' }} />
                    <Box textAlign="center">
                      <Typography variant="h5">No search results</Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        Try a different search term
                      </Typography>
                    </Box>
                  </Stack>
                </>
              )}
            </DialogContent>
          )
        )}
      </Dialog>
    </>
  );
};

TabsSpotlightSearch.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
