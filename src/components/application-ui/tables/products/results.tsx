import { DeleteRounded, MoreVertRounded } from '@mui/icons-material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
  Box,
  Card,
  Checkbox,
  Chip,
  IconButton,
  InputAdornment,
  Link,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import type { Product } from 'src/models/product';

const ImgWrapper = styled('img')(
  ({ theme }) => `
      width: ${theme.spacing(7)};
      height: auto;
      border-radius: ${theme.shape.borderRadius}px;
`
);

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
  const [selectedItems, setSelectedProducts] = useState<string[]>([]);
  const { t } = useTranslation();
  const theme = useTheme();

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [query, setQuery] = useState<string>('');

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllProducts = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedProducts(event.target.checked ? products.map((product) => product.id) : []);
  };

  const handleSelectOneProduct = (
    _event: ChangeEvent<HTMLInputElement>,
    productId: string
  ): void => {
    if (!selectedItems.includes(productId)) {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    } else {
      setSelectedProducts((prevSelected) => prevSelected.filter((id) => id !== productId));
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredProducts = applyFilters(products, query);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeProducts = selectedItems.length > 0 && selectedItems.length < products.length;
  const selectedAllProducts = selectedItems.length === products.length;
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
        display="flex"
        pb={2}
        alignItems="center"
        justifyContent="space-between"
      >
        {selectedBulkActions ? (
          <>
            <ButtonSoft
              color="error"
              variant="contained"
              startIcon={<DeleteRounded />}
              sx={{
                fontWeight: 500,
              }}
            >
              Delete selected
            </ButtonSoft>
            <ButtonIcon
              color="secondary"
              startIcon={<MoreVertRounded />}
            />
          </>
        ) : (
          <Box
            flex={1}
            display={{ xs: 'block', md: 'flex' }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                mb: { xs: 2, md: 0 },
              }}
            >
              <TextField
                size="small"
                fullWidth={mobile}
                onChange={handleQueryChange}
                value={query}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ my: '2px' }}
                placeholder={t('Filter by product name')}
              />
            </Box>
          </Box>
        )}
      </Box>

      {paginatedProducts.length === 0 ? (
        <Typography
          sx={{
            py: { xs: 2, sm: 3, md: 6, lg: 10 },
          }}
          variant="h3"
          color="text.secondary"
          align="center"
          fontWeight={500}
        >
          {t("We couldn't find any products matching your search criteria")}
        </Typography>
      ) : (
        <>
          <Card>
            <TableContainer sx={{ mb: '-1px' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedAllProducts}
                        indeterminate={selectedSomeProducts}
                        onChange={handleSelectAllProducts}
                      />
                    </TableCell>
                    <TableCell>{t('Product name')}</TableCell>
                    <TableCell>{t('Price')}</TableCell>
                    <TableCell align="center">{t('Stock')}</TableCell>
                    <TableCell align="center">{t('Rating')}</TableCell>
                    <TableCell align="center">{t('Orders')}</TableCell>
                    <TableCell>{t('Categories')}</TableCell>
                    <TableCell align="center">{t('Actions')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedProducts.map((product) => {
                    const isProductSelected = selectedItems.includes(product.id);
                    return (
                      <TableRow
                        hover
                        key={product.id}
                        selected={isProductSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isProductSelected}
                            onChange={(event) => handleSelectOneProduct(event, product.id)}
                            value={isProductSelected}
                          />
                        </TableCell>
                        <TableCell>
                          <Box
                            display="flex"
                            alignItems="center"
                          >
                            <ImgWrapper src={product.images[0]} />
                            <Box
                              pl={1}
                              sx={{
                                width: 280,
                              }}
                            >
                              <Link
                                href=""
                                onClick={(e) => e.preventDefault()}
                                variant="h5"
                              >
                                {product.name}
                              </Link>
                              <Typography
                                variant="subtitle1"
                                noWrap
                              >
                                {product.summary}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography
                            color="text.secondary"
                            sx={{
                              textDecorationLine: product.sale_price !== 0 ? 'line-through' : '',
                            }}
                          >
                            ${numeral(product.price).format(`0,0.00`)}
                          </Typography>
                          {product.sale_price !== 0 && (
                            <Typography
                              fontWeight={500}
                              color="error.main"
                            >
                              ${numeral(product.sale_price).format(`0,0.00`)}
                            </Typography>
                          )}
                        </TableCell>
                        <TableCell align="center">
                          <Chip
                            variant="outlined"
                            label={product.stock}
                            color="secondary"
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Box
                            display="flex"
                            alignItems="center"
                          >
                            <LocalFireDepartmentTwoToneIcon
                              sx={{
                                color: 'warning.main',
                              }}
                              fontSize="small"
                            />
                            <Typography
                              variant="h5"
                              sx={{
                                pl: 0.5,
                              }}
                            >
                              {product.rating}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="h6">{product.orders}</Typography>
                        </TableCell>
                        <TableCell>
                          {product.categories.map((value) => {
                            return (
                              <span key={value}>
                                <Link
                                  href=""
                                  variant="subtitle2"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {value}
                                </Link>
                                ,{' '}
                              </span>
                            );
                          })}
                        </TableCell>
                        <TableCell align="center">
                          <Typography noWrap>
                            <Tooltip
                              title={t('View')}
                              arrow
                            >
                              <IconButton
                                component={Link}
                                href=""
                                onClick={(e) => e.preventDefault()}
                                color="primary"
                              >
                                <LaunchTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip
                              title={t('Delete')}
                              arrow
                            >
                              <IconButton color="secondary">
                                <DeleteTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
          <Box
            p={2}
            sx={{
              '.MuiTablePagination-select': {
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
              rowsPerPageOptions={[5, 10, 15]}
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
          </Box>
        </>
      )}
    </>
  );
};

Results.propTypes = {
  products: PropTypes.array.isRequired,
};

Results.defaultProps = {
  products: [],
};

export default Results;
