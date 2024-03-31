import { Close as CloseIcon, Search as SearchTwoToneIcon } from '@mui/icons-material';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import SearchOffTwoToneIcon from '@mui/icons-material/SearchOffTwoTone';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import {
  alpha,
  Box,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  MenuList,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import SmallMenu from 'src/components/application-ui/vertical-menus/small/small-menu';
import { MenuItemPrimary } from 'src/components/base/styles/menu-item';
import { dummyData } from './data';

interface Item {
  id: string;
  title: string;
}

interface SearchAlternateOverlayProps {
  onClose?: () => void;
  open?: boolean;
}

export const SearchAlternateOverlay: FC<SearchAlternateOverlayProps> = (props) => {
  const { onClose, open = false, ...other } = props;
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchInitiated, setSearchInitiated] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Item[]>([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setFavorites(dummyData.slice(0, 3) as Item[]);
  }, []);

  const isFavorite = (id: string) => favorites.some((item) => item.id === id);

  const handleToggleFavorite = (item: Item) => {
    if (isFavorite(item.id)) {
      setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== item.id));
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, item]);
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setSearchInitiated(true);

    if (newSearchTerm.trim() === '') {
      setFilteredItems([]);
      setSearchInitiated(false);
      return;
    }

    setLoading(true);
    setTimeout(
      () => {
        const filtered = dummyData.filter((item) =>
          item.title.toLowerCase().includes(newSearchTerm.toLowerCase())
        ) as Item[];
        setFilteredItems(filtered);
        setLoading(false);
      },
      Math.round(Math.random() * 1500)
    );
  };

  const renderItem = (item: Item) => (
    <MenuItemPrimary key={item.id}>
      {!fullScreen && (
        <ListItemAvatar sx={{ minWidth: 42 }}>
          <ArticleTwoToneIcon />
        </ListItemAvatar>
      )}
      <ListItemText
        primary={item.title}
        primaryTypographyProps={{
          variant: 'h6',
          fontWeight: 500,
          noWrap: true,
          color: 'text.primary',
        }}
        secondaryTypographyProps={{ variant: 'subtitle1', noWrap: true }}
      />
      <IconButton
        sx={{ borderRadius: 50 }}
        color={isFavorite(item.id) ? 'warning' : 'secondary'}
        aria-label={isFavorite(item.id) ? 'remove from favorites' : 'add to favorites'}
        onClick={() => handleToggleFavorite(item)}
      >
        {isFavorite(item.id) ? <StarRateRoundedIcon /> : <StarOutlineRoundedIcon />}
      </IconButton>
    </MenuItemPrimary>
  );

  const renderFavoriteItem = (item: Item) => (
    <MenuItemPrimary key={item.id}>
      {!fullScreen && (
        <ListItemAvatar sx={{ minWidth: 42 }}>
          <ArticleTwoToneIcon />
        </ListItemAvatar>
      )}
      <ListItemText
        primary={item.title}
        primaryTypographyProps={{
          variant: 'h6',
          fontWeight: 500,
          noWrap: true,
          color: 'text.primary',
        }}
        secondaryTypographyProps={{ variant: 'subtitle1', noWrap: true }}
      />
      <IconButton
        sx={{ borderRadius: 50 }}
        color="warning"
        aria-label="remove from favorites"
        onClick={() => handleToggleFavorite(item)}
      >
        <StarRateRoundedIcon />
      </IconButton>
    </MenuItemPrimary>
  );

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
                <SearchTwoToneIcon />
              </InputAdornment>
            }
            sx={{
              fontSize: 16,
              '.MuiOutlinedInput-input': {
                height: '40px',
              },
              '.MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
            endAdornment={
              <InputAdornment position="end">
                {loading ? (
                  <CircularProgress
                    color="inherit"
                    size={20}
                    sx={{ mr: 0.5 }}
                  />
                ) : (
                  searchTerm && (
                    <IconButton
                      size="small"
                      color="primary"
                      sx={{ mr: 0.5 }}
                      onClick={() => {
                        setSearchTerm('');
                        setFilteredItems([]);
                        setSearchInitiated(false);
                        setLoading(false);
                      }}
                      aria-label="close search dialog"
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  )
                )}
              </InputAdornment>
            }
          />
        </DialogTitle>
        <DialogContent dividers>
          {filteredItems.length > 0 ? (
            <>
              <ListSubheader
                disableSticky
                component="div"
                sx={{ pb: 1, px: 0 }}
              >
                <Typography
                  variant="h5"
                  color="text.primary"
                  textTransform="none"
                >
                  Search results
                </Typography>
              </ListSubheader>
              <MenuList
                sx={{ mb: 3 }}
                disablePadding
              >
                {filteredItems.map(renderItem)}
              </MenuList>
            </>
          ) : (
            !loading &&
            searchTerm &&
            searchInitiated && (
              <>
                <Stack
                  py={2}
                  justifyContent="center"
                  direction="column"
                  alignItems="center"
                >
                  <SearchOffTwoToneIcon sx={{ fontSize: 42, color: 'primary.main' }} />
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
            )
          )}

          {favorites.length > 0 ? (
            <>
              <ListSubheader
                disableSticky
                component="div"
                sx={{ pb: 1, px: 0 }}
              >
                <Typography
                  variant="h5"
                  color="text.primary"
                  textTransform="none"
                >
                  Favourites
                </Typography>
              </ListSubheader>
              <MenuList
                sx={{ mb: 3 }}
                disablePadding
              >
                {favorites.map(renderFavoriteItem)}
              </MenuList>
            </>
          ) : (
            <Box
              textAlign="center"
              sx={{ py: 3 }}
            >
              <StarOutlineRoundedIcon sx={{ fontSize: 42, color: 'text.secondary' }} />
              <Typography
                gutterBottom
                variant="h6"
              >
                Favourites
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                No favorites added yet.
              </Typography>
            </Box>
          )}
          <>
            <ListSubheader
              disableSticky
              component="div"
              sx={{ pb: 1, px: 0 }}
            >
              <Typography
                variant="h5"
                color="text.primary"
                textTransform="none"
              >
                Popular searches
              </Typography>
            </ListSubheader>
            <Box p={{ xs: 1, md: 2 }}>
              <SmallMenu />
            </Box>
          </>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'flex-start',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            p: 1.5,
            '.MuiChip-root': {
              mx: 0.5,
            },
          }}
        >
          <Typography
            noWrap
            variant="body2"
          >
            Enter{' '}
            <Chip
              color="secondary"
              label="#"
              size="small"
            />{' '}
            to browse, use{' '}
            <Chip
              color="secondary"
              label=">"
              size="small"
            />{' '}
            to search, or press{' '}
            <Chip
              color="secondary"
              label="?"
              size="small"
            />{' '}
            to get assistance.
          </Typography>
        </DialogActions>
      </Dialog>
    </>
  );
};

SearchAlternateOverlay.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
