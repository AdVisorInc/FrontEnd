import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  alpha,
  Box,
  Container,
  Divider,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useCustomization } from 'src/hooks/use-customization';
import { useRefMounted } from 'src/hooks/use-ref-mounted';
import { useSidebarDrawer } from 'src/hooks/use-sidebar-drawer';
import { productsApi } from 'src/mocks/products';
import { Product } from 'src/models/product';
import Results from './results';
import { StorefrontSidebar } from './sidebar';

const Component = () => {
  const { t } = useTranslation();
  const customization = useCustomization();
  const parentRef = useRef<HTMLDivElement | null>(null);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const sidebarDrawer = useSidebarDrawer();
  const theme = useTheme();

  const isMountedRef = useRefMounted();
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await productsApi.getProducts();

      if (isMountedRef()) {
        setProducts(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Box minWidth="100%">
      <Box
        p={{ xs: 2, sm: 3 }}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 3 }}
          alignItems="center"
          divider={
            <Divider
              flexItem
              orientation="vertical"
            />
          }
        >
          <ButtonIcon
            onClick={sidebarDrawer.handleToggle}
            color="secondary"
            variant="outlined"
            sx={{ width: 44, height: 44 }}
          >
            <MenuRoundedIcon />
          </ButtonIcon>
          <Box>
            <Typography
              variant="h3"
              noWrap
              component="h2"
              sx={{ pb: 0.3 }}
            >
              {t('Storefront')}
            </Typography>
            <Typography
              variant="h5"
              noWrap
              fontWeight={400}
              color="text.secondary"
            >
              {t('Browse our products and start ordering')}
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Divider />
      <Box
        flex={1}
        position="relative"
        display="flex"
      >
        <StorefrontSidebar
          parentContainer={parentRef.current}
          onClose={sidebarDrawer.handleClose}
          onOpen={sidebarDrawer.handleOpen}
          open={sidebarDrawer.open}
        />
        <Box
          flex={1}
          position="relative"
          zIndex={5}
          sx={{
            ml: sidebarDrawer.open ? 0 : lgUp ? '-360px' : 0,
            transition: sidebarDrawer.open
              ? theme.transitions.create('margin', {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
                })
              : theme.transitions.create('margin', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
          }}
        >
          <Box p={{ xs: 2, sm: 3 }}>
            <Container
              disableGutters
              maxWidth={customization.stretch ? false : 'xl'}
            >
              {products && <Results products={products} />}
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Component;
