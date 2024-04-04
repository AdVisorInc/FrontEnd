import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import SearchOffTwoToneIcon from '@mui/icons-material/SearchOffTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Masonry from '@mui/lab/Masonry';
import {
  Box,
  Card,
  CardActionArea,
  Chip,
  CircularProgress,
  Collapse,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { FC, useState } from 'react';
import { AvatarState } from 'src/components/base/styles/avatar';
import { Category, dummyData, iconMapping, Item } from './data';

interface BasicSpotlightSearchProps {
  onClose?: () => void;
  open?: boolean;
}

export const BasicSpotlightSearch: FC<BasicSpotlightSearchProps> = (props) => {
  const { onClose, open = false, ...other } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.length < 1) {
      setFilteredItems([]);
      setSearchInitiated(false);
      setLoading(false);
      return;
    }

    setSearchInitiated(true);

    const randomLoadingTime = Math.round(Math.random() * 3500);

    setLoading(true);
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

  const handleToggleCategory = (category: string) => {
    setExpandedCategories((prevExpanded) => ({
      ...prevExpanded,
      [category]: !prevExpanded[category],
    }));
  };

  const getAvatarContent = (item: Item) => {
    let IconComponent;
    switch (item.category) {
      case 'folders':
      case 'files':
      case 'applications':
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

  const renderItem = (item: Item, index: number, array: Item[], category: string) => {
    if (item.category !== 'images' && index > 4 && !expandedCategories[category]) return null;
    return (
      <>
        <Divider />
        <ListItemButton
          sx={{
            py: 1.5,
            '&:hover': {
              '.MuiTypography-subtitle2': {
                color: 'text.primary',
              },

              '.MuiSvgIcon-root': {
                opacity: 1,
              },
            },
          }}
        >
          <ListItemAvatar
            sx={{
              minWidth: 38,
              mr: 1.5,
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
        </ListItemButton>
      </>
    );
  };

  const heights = [150, 75, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

  const renderImages = (items: Item[]) => (
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

  const renderShowMoreButton = (category: string, items: Item[]) => {
    const isExpanded = expandedCategories[category];
    const numberOfItemsToShow = isExpanded ? items.length - 3 : 3;
    const remainingItemsCount = items.length - numberOfItemsToShow;

    if (items.length > 3 && category !== 'images') {
      return (
        <Box
          pt={2}
          textAlign="center"
        >
          <Chip
            onClick={() => handleToggleCategory(category)}
            variant="outlined"
            color={isExpanded ? 'secondary' : 'primary'}
            label={isExpanded ? `Show less` : `Show ${remainingItemsCount} more`}
          />
        </Box>
      );
    }
    return (
      <>
        <Divider />
      </>
    );
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        fullScreen={fullScreen}
        scroll="paper"
        maxWidth="sm"
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
          <>
            {searchInitiated && filteredItems.length === 0 && (
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
            <DialogContent sx={{ overflowX: 'hidden', p: 0 }}>
              {Object.entries(groupedItems).map(([category, items]) => (
                <List
                  component="div"
                  disablePadding
                  key={category}
                  subheader={
                    <ListSubheader component="div">{`${category.toUpperCase()} (${
                      items.length
                    })`}</ListSubheader>
                  }
                >
                  {category === 'images' ? (
                    renderImages(items)
                  ) : (
                    <>
                      {items
                        .slice(0, 3)
                        .map((item, index, array) => renderItem(item, index, array, category))}
                      <Collapse
                        in={expandedCategories[category] || items.length <= 3}
                        timeout="auto"
                        unmountOnExit
                      >
                        {items
                          .slice(3)
                          .map((item, index) => renderItem(item, index + 3, items, category))}
                      </Collapse>
                    </>
                  )}
                  {renderShowMoreButton(category, items)}
                </List>
              ))}
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

BasicSpotlightSearch.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
