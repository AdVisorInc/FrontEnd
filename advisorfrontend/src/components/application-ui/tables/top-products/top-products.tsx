import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRefMounted } from 'src/hooks/use-ref-mounted';
import { topProductsApi } from 'src/mocks/top_products';
import { TopProduct } from 'src/models/top_products';

function TopProducts() {
  const isMountedRef = useRefMounted();
  const [products, setProducts] = useState<TopProduct[]>([]);
  const { t } = useTranslation();
  const theme = useTheme();

  const getTopProducts = useCallback(async () => {
    try {
      const response = await topProductsApi.getTopProducts();

      if (isMountedRef()) {
        setProducts(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getTopProducts();
  }, [getTopProducts]);

  return (
    <Card>
      <CardHeader
        title={t('Top Products')}
        action={
          <Button
            variant="contained"
            size="small"
            endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
          >
            {t('Create Product')}
          </Button>
        }
      />
      <Divider />
      <TableContainer
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ py: 3 }}>{t('Product')}</TableCell>
              <TableCell
                sx={{ py: 3 }}
                align="right"
              >
                {t('Orders')}
              </TableCell>
              <TableCell
                sx={{ py: 3 }}
                align="right"
              >
                {t('Revenue')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.slice(0, 3).map((product) => (
              <TableRow
                hover
                key={product.id}
              >
                <TableCell sx={{ py: 1.5 }}>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar
                      sx={{
                        mr: 1,
                        width: theme.spacing(6),
                        height: theme.spacing(6),
                        background: 'transparent',
                      }}
                      variant="rounded"
                      alt={product.name}
                      src={product.image}
                    />

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 'normal',
                      }}
                      noWrap
                    >
                      {product.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="h5"
                    lineHeight={1}
                  >
                    {product.orders}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    noWrap
                    color="text.secondary"
                  >
                    {product.inventory} {t('units')}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="h5"
                    lineHeight={1}
                  >
                    {numeral(product.revenue).format(`${product.currency}0,0.00`)}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    noWrap
                    color="text.secondary"
                  >
                    {product.revenuePercent}
                    {t('% of sales')}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        p={2}
        display="flex"
        justifyContent="center"
      >
        <Button variant="outlined">{t('View all Products')}</Button>
      </Box>
    </Card>
  );
}

TopProducts.propTypes = {
  className: PropTypes.string,
};

export default TopProducts;
