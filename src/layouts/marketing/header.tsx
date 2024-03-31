import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import {
  alpha,
  AppBar,
  Box,
  Button,
  ButtonBase,
  Container,
  Divider,
  IconButton,
  Stack,
  SwipeableDrawer,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
// import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from 'src/components/application-ui/dropdowns/language/language-dropdown';
import CustomizationButton from 'src/components/base/customization';
import { Logo } from 'src/components/base/logo';
import { RouterLink } from 'src/components/base/router-link';
import { Scrollbar } from 'src/components/base/scrollbar';
import { useCustomization } from 'src/hooks/use-customization';
import { usePathname } from 'src/hooks/use-pathname';
import useScrollDirection from 'src/hooks/use-scroll-direction';
import { routes } from 'src/router/routes';
import { createTheme } from 'src/theme';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from 'src/theme/utils';

export const Header = () => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const scroll = useScrollDirection();

  const isActive = (route: string) => {
    return pathname.startsWith(route);
  };

  const customization = useCustomization();

  const theme = createTheme({
    colorPreset: customization.colorPreset,
    direction: customization.direction,
    paletteMode: 'dark',
    layout: customization.layout,
  });
  const themeDark = createTheme({
    colorPreset: customization.colorPreset,
    direction: customization.direction,
    paletteMode:
      pathname === routes.components.index
        ? customization.paletteMode === 'dark'
          ? 'dark'
          : 'light'
        : 'dark',
    layout: customization.layout,
  });
  const purchaseButton = (
    <Button
      size="small"
      fullWidth={!lgUp}
      variant={lgUp ? 'outlined' : 'contained'}
      color={lgUp ? 'secondary' : 'primary'}
      component={RouterLink}
      href={routes.website.pricing}
      // href=""
      // target="_blank"
      // rel="noopener"
      // endIcon={<LaunchRoundedIcon fontSize="small" />}
      sx={{
        height: 38,
        px: 1.5,
        fontSize: 14,
        fontWeight: 500,
      }}
    >
      {lgUp ? 'Purchase now' : 'Buy now'}
    </Button>
  );

  const headerMenu = (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      sx={{
        '.MuiButtonBase-root': {
          color: 'neutral.500',
          fontSize: 16,
          fontWeight: 600,
          p: 1,
          width: { xs: '100%', md: 'auto' },
          justifyContent: 'flex-start',

          span: {
            position: 'relative',

            '&::after': {
              content: '" "',
              position: 'absolute',
              left: 0,
              display: { xs: 'none', md: 'flex' },
              bottom: -6,
              width: 38,
              height: 3,
              borderRadius: theme.shape.borderRadius,
              backgroundColor: alpha(theme.palette.common.white, 0.32),
              opacity: 0,
              visibility: 'hidden',
              transform: 'scaleX(0)',
              transition: theme.transitions.create(['opacity', 'visibility', 'transform']),
            },
          },

          '&:hover': {
            color: 'common.white',

            '& span::after': {
              opacity: 1,
              visibility: 'initial',
              transform: 'scaleX(1)',
            },
          },

          '&.active': {
            color: 'common.white',

            '& span::after': {
              backgroundColor: 'common.white',
              opacity: 1,
              visibility: 'initial',
              transform: 'scaleX(1)',
            },
          },
        },
      }}
      spacing={1.5}
    >
      <ButtonBase
        className={isActive(routes.components.index) ? 'active' : ''}
        component={RouterLink}
        href={routes.components.index}
      >
        <span>{t('Components')}</span>
      </ButtonBase>
      <ButtonBase
        className={isActive(routes.blueprints.index) ? 'active' : ''}
        component={RouterLink}
        href={routes.blueprints.index}
      >
        <span>{t('Blueprints')}</span>
      </ButtonBase>
      <ButtonBase
        className={isActive(routes.website.pricing) ? 'active' : ''}
        component={RouterLink}
        href={routes.website.pricing}
      >
        <span>{t('Pricing')}</span>
      </ButtonBase>
    </Stack>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        elevation={0}
        role="banner"
        sx={{
          height:
            scroll === 'down'
              ? mdUp
                ? HEADER_HEIGHT * 1.2
                : HEADER_HEIGHT * 1.08
              : HEADER_HEIGHT * 1.8,
          pt: 1,
          width: '100%',
          display: 'flex',
          position: 'fixed',
          backgroundColor: scroll === 'down' ? 'neutral.900' : 'transparent',
          transition: theme.transitions.create(['height', 'background-color']),

          '&::after': {
            content: '" "',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '100%',
            bottom: 0,
            backgroundColor: alpha(theme.palette.background.default, 0.55),
            zIndex: 4,
            backdropFilter: 'blur(40px)',
            mask: `linear-gradient(${theme.palette.background.default},${alpha(
              theme.palette.background.default,
              0.9
            )} 50%, transparent 100%)`,
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 5,
          }}
        >
          <Stack
            flex={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}
            >
              <Logo dark />
              {mdUp && headerMenu}
            </Stack>
            <Stack
              display="flex"
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              alignItems="center"
            >
              <Stack
                display="flex"
                spacing={1}
                direction="row"
                alignItems="center"
              >
                {mdUp && (
                  <LanguageDropdown
                    color="inherit"
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 21,
                      },
                      height: 38,
                      width: 38,
                      p: 0,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.common.white, 0.08),
                      },
                    }}
                  />
                )}
                <ThemeProvider theme={themeDark}>
                  <CustomizationButton
                    color="inherit"
                    sx={{
                      height: 38,
                      width: 38,
                      p: 0,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.common.white, 0.08),
                      },
                    }}
                  />
                </ThemeProvider>
              </Stack>
              {purchaseButton}
              {!mdUp && (
                <IconButton
                  onClick={handleOpen}
                  color="inherit"
                  sx={{
                    height: 38,
                    width: 38,
                    p: 0,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.common.white, 0.08),
                    },
                  }}
                >
                  <MenuTwoToneIcon />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Container>
      </AppBar>
      {!mdUp && (
        <SwipeableDrawer
          anchor="left"
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: SIDEBAR_WIDTH,
              backgroundColor: 'neutral.900',
            },
          }}
          variant="temporary"
        >
          <Box
            p={2}
            sx={{
              background: alpha(theme.palette.common.white, 0.02),
            }}
          >
            <Logo dark />
          </Box>
          <Divider />
          <Box
            flex={1}
            overflow="auto"
          >
            <Scrollbar dark>
              <Box p={2}>{headerMenu}</Box>
            </Scrollbar>
          </Box>
          <Divider />
          <Box
            p={2}
            sx={{
              background: alpha(theme.palette.common.white, 0.02),
            }}
          >
            {purchaseButton}
          </Box>
        </SwipeableDrawer>
      )}
    </ThemeProvider>
  );
};
