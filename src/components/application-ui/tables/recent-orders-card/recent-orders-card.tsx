import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import {
  alpha,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Divider,
  styled,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface ProductData {
  arrowDirection: 'up' | 'down';
  productName: string;
  labelColor: 'warning' | 'success';
  status: string;
  price: string;
  textColor: 'error.main' | 'primary.main' | 'success.main';
  priceStatus: string;
}

const products: ProductData[] = [
  {
    arrowDirection: 'up',
    productName: 'Macbook Laptop',
    labelColor: 'warning',
    status: 'Pending',
    price: '$6,384',
    textColor: 'error.main',
    priceStatus: 'Increased',
  },
  {
    arrowDirection: 'down',
    productName: 'iPhone 15 Pro',
    labelColor: 'success',
    status: 'Completed',
    price: '$1,594',
    textColor: 'primary.main',
    priceStatus: 'Regular',
  },
  {
    arrowDirection: 'up',
    productName: 'Desktop PC',
    labelColor: 'success',
    status: 'Completed',
    price: '$3,594',
    textColor: 'primary.main',
    priceStatus: 'Regular',
  },
];

const BoxComposed = styled(Box)(() => ({
  position: 'relative',
}));

const BoxComposedContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 7,

  '.MuiTypography-root': {
    color: theme.palette.primary.contrastText,

    '& + .MuiTypography-root': {
      color: alpha(theme.palette.primary.contrastText, 0.7),
    },
  },
}));

const BoxComposedImage = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 5,
  filter: 'grayscale(80%)',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const BoxComposedBg = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 6,
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 2,
      }}
    >
      <BoxComposed
        sx={{
          borderRadius: theme.shape.borderRadius + 'px',
          background: 'linear-gradient(60deg, #29323c 0%, #485563 100%) !important',
        }}
      >
        <BoxComposedBg
          sx={{
            opacity: 0.1,
            background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
          }}
        />
        <BoxComposedImage
          sx={{
            opacity: 0.2,
            backgroundImage: 'url("/placeholders/covers/5.jpg")',
          }}
        />
        <BoxComposedContent py={3}>
          <Typography
            textAlign="center"
            variant="h4"
          >
            {t('Recent Orders')}
          </Typography>
          <Typography
            textAlign="center"
            fontWeight={400}
            variant="h5"
          >
            {t('Check latest status updates')}
          </Typography>
        </BoxComposedContent>
      </BoxComposed>
      <Box py={2}>
        <TableContainer>
          <Table>
            {products.map((product, index) => (
              <TableRow
                key={index}
                hover
              >
                <TableCell padding="checkbox">
                  <Checkbox sx={{ padding: 0.5 }} />
                </TableCell>
                <TableCell sx={{ pl: 0 }}>
                  <Box
                    pb={0.5}
                    display="flex"
                    alignItems="center"
                  >
                    {product.arrowDirection === 'up' ? (
                      <ArrowUpwardTwoToneIcon
                        sx={{
                          color: 'success.main',
                        }}
                        fontSize="small"
                      />
                    ) : (
                      <ArrowDownwardTwoToneIcon
                        sx={{
                          color: 'error.main',
                        }}
                        fontSize="small"
                      />
                    )}
                    <Typography
                      sx={{ pl: 0.5 }}
                      variant="h5"
                      noWrap
                    >
                      {product.productName}
                    </Typography>
                  </Box>
                  <Chip
                    size="small"
                    label={t(product.status)}
                    color={product.labelColor}
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h5">{product.price}</Typography>
                  <Typography color={product.textColor}>{t(product.priceStatus)}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </TableContainer>
      </Box>
      <Divider />
      <Box
        sx={{
          textAlign: 'center',
          pt: 2,
        }}
      >
        <Badge
          color="success"
          variant="dot"
        >
          <Button variant="contained">{t('View all')}</Button>
        </Badge>
      </Box>
    </Card>
  );
}

export default Component;
