'use client';

import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { type FC, type ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { RtlDirection } from 'src/components/base/rtl-direction';
import { Toastr } from 'src/components/base/toastr';
import { AuthProvider } from 'src/contexts/auth/auth-context';
import { CustomizationConsumer, CustomizationProvider } from 'src/contexts/customization';
import { SidebarProvider } from 'src/contexts/sidebar-context';
import { store } from 'src/store';
import { createTheme } from 'src/theme';
import { NextAppDirEmotionCacheProvider } from 'tss-react/next/appDir';
import 'src/i18n/i18n';
import 'src/global.css';
import type { Customization } from 'src/contexts/customization';

const CUSTOMIZATION_STORAGE_KEY = 'uifort.customization';

const updateCustomization = (customization: Customization): void => {
  try {
    Cookies.set(CUSTOMIZATION_STORAGE_KEY, JSON.stringify(customization));
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
};

const resetCustomization = (): void => {
  try {
    Cookies.remove(CUSTOMIZATION_STORAGE_KEY);
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
};

interface LayoutProps {
  children: ReactNode;
  customization?: Customization;
}

export const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children, customization } = props;

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'uifort' }}>
      <ReduxProvider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <AuthProvider>
            <SidebarProvider>
              <CustomizationProvider
                onReset={resetCustomization}
                onUpdate={updateCustomization}
                settings={customization}
              >
                <CustomizationConsumer>
                  {(settings) => {
                    const theme = createTheme({
                      colorPreset: settings.colorPreset,
                      direction: settings.direction,
                      paletteMode: settings.paletteMode,
                      layout: settings.layout,
                    });

                    return (
                      <ThemeProvider theme={theme}>
                        <Head>
                          <meta
                            name="color-scheme"
                            content={settings.paletteMode}
                          />
                          <meta
                            name="theme-color"
                            content={theme.palette.primary.main}
                          />
                        </Head>
                        <RtlDirection direction={settings.direction}>
                          <CssBaseline />
                          <Box
                            display="flex"
                            minHeight="100vh"
                          >
                            {children}
                          </Box>
                          <Toastr />
                        </RtlDirection>
                      </ThemeProvider>
                    );
                  }}
                </CustomizationConsumer>
              </CustomizationProvider>
            </SidebarProvider>
          </AuthProvider>
        </LocalizationProvider>
      </ReduxProvider>
    </NextAppDirEmotionCacheProvider>
  );
};
