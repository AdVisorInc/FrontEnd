import { alpha, Box, Card, Container, Divider, lighten, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { type FC, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useMobileNav } from 'src/hooks/use-mobile-nav';
import { MenuItem } from 'src/router/menuItem';
import { Header } from './header';

interface StackedShellsTopNavWide {
  children?: ReactNode;
  menuItems?: MenuItem[];
}

export const StackedShellsTopNavWide: FC<StackedShellsTopNavWide> = (props) => {
  const { children, menuItems } = props;
  const mobileNav = useMobileNav();
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <>
      <Box
        flex={1}
        overflow="hidden"
      >
        <Box
          flex={1}
          sx={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              pb: (theme) => theme.spacing(32),
              background: (theme) => theme.palette.neutral[900],
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                zIndex: 2,
                width: '100%',
                height: '100%',
                background:
                  theme.palette.mode === 'dark'
                    ? `linear-gradient(0deg, ${alpha(
                        lighten(theme.palette.neutral[800], 0.7),
                        0.16
                      )} 0%, ${alpha(theme.palette.neutral[800], 0.08)} 90%)`
                    : `linear-gradient(0deg, ${alpha(
                        lighten(theme.palette.primary.main, 0.3),
                        0.12
                      )} 0%, transparent 90%)`,
              }}
            />
            <Container
              sx={{
                zIndex: 5,
                position: 'relative',
              }}
              maxWidth="xl"
            >
              <Header
                onClose={mobileNav.handleClose}
                open={mobileNav.open}
                menuItems={menuItems}
                onOpen={mobileNav.handleOpen}
              />
              <Divider
                sx={{
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.neutral[700], 0.2)
                      : alpha(theme.palette.neutral[500], 0.2),
                }}
              />
              <Typography
                variant="h1"
                fontWeight="700"
                sx={{
                  py: { xs: 3, sm: 4, md: 5 },
                  lineHeight: 1,
                  color: (theme) => theme.palette.neutral[100],
                }}
              >
                {t('Dashboards')}
              </Typography>
            </Container>
          </Box>
          <Container
            maxWidth="xl"
            sx={{
              zIndex: 4,
              position: 'relative',
              mt: (theme) => theme.spacing(-32),
            }}
          >
            <Card
              elevation={12}
              variant={theme.palette.mode === 'dark' ? 'outlined' : 'elevation'}
              sx={{
                mb: { xs: 2, sm: 3 },
              }}
            >
              {children}
            </Card>
          </Container>
        </Box>
      </Box>
    </>
  );
};

StackedShellsTopNavWide.propTypes = {
  children: PropTypes.node,
  menuItems: PropTypes.array,
};
