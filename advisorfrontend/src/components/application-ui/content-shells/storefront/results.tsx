import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  InputAdornment,
  Link,
  Rating,
  styled,
  TablePagination,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import type { Product } from 'src/models/product';

interface ResultsProps {
  products: Product[];
}

const applyFilters = (products: Product[], query: string): Product[] => {
  return products.filter((product) => {
    let matches = true;

    if (query) {
      const properties = ['name'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (product[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    return matches;
  });
};

const applyPagination = (products: Product[], page: number, limit: number): Product[] => {
  return products.slice(page * limit, page * limit + limit);
};

const Results: FC<ResultsProps> = ({ products }) => {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(4);
  const { t } = useTranslation();
  const [query, setQuery] = useState<string>('');
  const [toggleView, setToggleView] = useState<string | null>('grid_view');

  const handleViewOrientation = (_event: MouseEvent<HTMLElement>, newValue: string | null) => {
    setToggleView(newValue);
  };

  const handleCart = () => {
    toast.success(t('You added a product to cart'));
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const filteredProducts = applyFilters(products, query);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);

  const AvatarWrapper = styled(Box)(
    ({ theme }) => `
      .MuiAvatar-root {
        height: auto;
        width: ${theme.spacing(26)};
        transition: ${theme.transitions.create(['opacity'])};

        &:hover {
          opacity: .8;
        }
      }
`
  );

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid xs={12}>
        <TextField
          fullWidth
          onChange={handleQueryChange}
          value={query}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchTwoToneIcon />
              </InputAdornment>
            ),
          }}
          placeholder={t('Search by product name...')}
        />
      </Grid>
      <Grid xs={12}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{
                display: { xs: 'none', md: 'inline-block' },
              }}
            >
              {t('Showing')}:
            </Typography>{' '}
            <b>
              {filteredProducts.length} {t('products')}
            </b>
          </Box>
          <ToggleButtonGroup
            color="primary"
            value={toggleView}
            exclusive
            onChange={handleViewOrientation}
          >
            <ToggleButton value="list_view">
              <TableRowsTwoToneIcon />
            </ToggleButton>
            <ToggleButton value="grid_view">
              <GridViewTwoToneIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Grid>

      {toggleView === 'grid_view' && (
        <>
          {paginatedProducts.length === 0 ? (
            <Grid xs={12}>
              <Typography
                sx={{
                  py: { xs: 2, sm: 3, md: 6, lg: 10 },
                }}
                variant="h3"
                color="text.secondary"
                align="center"
              >
                {t("We couldn't find any products matching your search criteria")}
              </Typography>
            </Grid>
          ) : (
            <>
              {paginatedProducts.map((product) => {
                return (
                  <Grid
                    key={product.id}
                    xs={12}
                    md={6}
                  >
                    <Card>
                      <AvatarWrapper
                        p={{ xs: 2, sm: 3 }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Avatar
                          component={Link}
                          href=""
                          onClick={(e) => e.preventDefault()}
                          src={product.images[0]}
                          variant="rounded"
                        />
                      </AvatarWrapper>
                      <Box
                        textAlign="center"
                        px={{ xs: 2, sm: 3 }}
                      >
                        <Link
                          variant="h3"
                          href=""
                          onClick={(e) => e.preventDefault()}
                          sx={{
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                          color="text.primary"
                        >
                          {product.name}
                        </Link>
                        <Typography
                          variant="h6"
                          fontWeight={500}
                          sx={{ pt: 1 }}
                          color="text.secondary"
                        >
                          {product.summary}
                        </Typography>
                        <Box py={2}>
                          <Rating
                            readOnly
                            defaultValue={product.rating}
                            precision={0.5}
                          />
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="center"
                      >
                        <Box>
                          <Typography
                            component="span"
                            variant={product.sale_price !== 0 ? 'h4' : 'h3'}
                            sx={{
                              pr: 2,
                              textDecorationLine: product.sale_price !== 0 ? 'line-through' : '',
                            }}
                          >
                            ${numeral(product.price).format(`0,0.00`)}
                          </Typography>
                          {product.sale_price !== 0 && (
                            <Typography
                              component="span"
                              variant="h3"
                              color="error.main"
                            >
                              ${numeral(product.sale_price).format(`0,0.00`)}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                      <Box
                        pb={3}
                        pt={1}
                        display="flex"
                        justifyContent="center"
                      >
                        <Button
                          variant="outlined"
                          onClick={handleCart}
                        >
                          {t('Add to cart')}
                        </Button>
                      </Box>
                      <Divider />
                      <Box
                        p={2}
                        sx={{
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'dark'
                              ? alpha(theme.palette.neutral[25], 0.02)
                              : 'neutral.25',
                        }}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <ButtonSoft
                          color="error"
                          sx={{ width: 38, minWidth: 0, height: 38 }}
                          size="small"
                        >
                          <FavoriteTwoToneIcon fontSize="small" />
                        </ButtonSoft>
                        <Typography
                          variant="subtitle2"
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          {t('In Stock')}:{' '}
                          <Typography
                            sx={{ pl: 0.5 }}
                            component="span"
                            color="text.primary"
                            variant="h4"
                          >
                            {product.stock}
                          </Typography>
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
              <Grid xs={12}>
                <Card
                  sx={{
                    p: 1,
                    '& .MuiTablePagination-select': {
                      py: 0.55,
                    },
                  }}
                >
                  <TablePagination
                    component="div"
                    count={filteredProducts.length}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[4, 8, 12]}
                    slotProps={{
                      select: {
                        variant: 'outlined',
                        size: 'small',
                        sx: {
                          p: 0,
                        },
                      },
                    }}
                  />
                </Card>
              </Grid>
            </>
          )}
        </>
      )}
      {toggleView === 'list_view' && (
        <>
          {paginatedProducts.length === 0 ? (
            <Grid xs={12}>
              <Typography
                sx={{
                  py: { xs: 2, sm: 3, md: 6, lg: 10 },
                }}
                variant="h3"
                color="text.secondary"
                align="center"
              >
                {t("We couldn't find any products matching your search criteria")}
              </Typography>
            </Grid>
          ) : (
            <>
              {paginatedProducts.map((product) => {
                return (
                  <Grid
                    key={product.id}
                    xs={12}
                  >
                    <Card
                      sx={{
                        p: { xs: 2, sm: 3 },
                        display: { md: 'flex' },
                        alignItems: { md: 'center' },
                      }}
                    >
                      <AvatarWrapper
                        sx={{
                          justifyContent: { md: 'center' },
                        }}
                        display="flex"
                        alignItems="center"
                      >
                        <Avatar
                          component={Link}
                          href=""
                          onClick={(e) => e.preventDefault()}
                          src={product.images[0]}
                          variant="rounded"
                        />
                      </AvatarWrapper>

                      <Box
                        flex={1}
                        p={{ xs: 0, md: 3 }}
                        mt={{ xs: 2, md: 0 }}
                      >
                        <Rating
                          readOnly
                          defaultValue={product.rating}
                          precision={0.5}
                        />
                        <Box>
                          <Link
                            variant="h3"
                            href=""
                            onClick={(e) => e.preventDefault()}
                            sx={{
                              '&:hover': {
                                color: 'secondary.main',
                              },
                            }}
                            color="text.primary"
                          >
                            {product.name}
                          </Link>
                        </Box>
                        <Typography
                          sx={{ pt: 1 }}
                          variant="subtitle1"
                          color="text.secondary"
                        >
                          {product.summary}
                        </Typography>
                        <Box py={2}>
                          <Typography
                            component="span"
                            variant={product.sale_price !== 0 ? 'h4' : 'h3'}
                            sx={{
                              pr: 2,
                              textDecorationLine: product.sale_price !== 0 ? 'line-through' : '',
                            }}
                          >
                            ${numeral(product.price).format(`0,0.00`)}
                          </Typography>
                          {product.sale_price !== 0 && (
                            <Typography
                              component="span"
                              variant="h3"
                              color="error.main"
                            >
                              ${numeral(product.sale_price).format(`0,0.00`)}
                            </Typography>
                          )}
                        </Box>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                          >
                            <Button
                              sx={{
                                mr: 1,
                              }}
                              variant="outlined"
                              onClick={handleCart}
                            >
                              {t('Add to cart')}
                            </Button>
                            <ButtonIcon
                              variant="outlined"
                              color="error"
                            >
                              <FavoriteTwoToneIcon fontSize="small" />
                            </ButtonIcon>
                          </Box>

                          <Typography
                            variant="subtitle2"
                            sx={{ display: 'flex', alignItems: 'center' }}
                          >
                            {t('In Stock')}:{' '}
                            <Typography
                              sx={{ pl: 0.5 }}
                              component="span"
                              color="text.primary"
                              variant="h4"
                            >
                              {product.stock}
                            </Typography>
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                );
              })}
              <Grid xs={12}>
                <Card
                  sx={{
                    p: 1,
                    '& .MuiTablePagination-select': {
                      py: 0.55,
                    },
                  }}
                >
                  <TablePagination
                    component="div"
                    count={filteredProducts.length}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[4, 8, 12]}
                    slotProps={{
                      select: {
                        variant: 'outlined',
                        size: 'small',
                        sx: {
                          p: 0,
                        },
                      },
                    }}
                  />
                </Card>
              </Grid>
            </>
          )}
        </>
      )}
      {!toggleView && (
        <Grid xs={12}>
          <Card
            sx={{
              textAlign: 'center',
              p: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              align="center"
              variant="h4"
              color="text.secondary"
              sx={{
                my: 5,
              }}
              gutterBottom
            >
              {t('Choose between table or grid views for displaying products.')}
            </Typography>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

Results.propTypes = {
  products: PropTypes.array.isRequired,
};

Results.defaultProps = {
  products: [],
};

export default Results;
