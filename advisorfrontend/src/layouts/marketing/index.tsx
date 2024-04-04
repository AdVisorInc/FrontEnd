import { Box, ThemeProvider } from '@mui/material';
import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';
import { useCustomization } from 'src/hooks/use-customization';
import { createTheme } from 'src/theme';
import { Header } from './header';

interface MarketingLayoutProps {
  children?: ReactNode;
}

export const MarketingLayout: FC<MarketingLayoutProps> = ({ children }) => {
  const customization = useCustomization();

  const theme = createTheme({
    colorPreset: customization.colorPreset,
    direction: customization.direction,
    paletteMode: 'dark',
    layout: customization.layout,
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        flex={1}
        display="block"
        width="100%"
        sx={{
          backgroundColor: 'background.paper',
        }}
      >
        <Header />
        <Box
          position="relative"
          zIndex={5}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

MarketingLayout.propTypes = {
  children: PropTypes.node,
};
