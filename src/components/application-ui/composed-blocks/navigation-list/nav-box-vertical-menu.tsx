import { Avatar, Box, Rating, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import VerticalMenuIndicatorPrimary from 'src/components/application-ui/vertical-menus/indicator/menu-indicator-primary';

function NavBoxVerticalMenu() {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <Box>
        <Box
          sx={{
            textAlign: 'center',
          }}
          py={{ xs: 2, sm: 3, md: 5 }}
          px={2}
        >
          <Avatar
            variant="square"
            sx={{
              mx: 'auto',
              mb: 2,
              width: 'auto',
              height: 32,
              background: 'transparent',
              img: {
                objectFit: 'contain',
              },
            }}
            src="/placeholders/logo/coinbase.svg"
          />
          <Rating
            defaultValue={4}
            precision={0.5}
          />
          <Typography
            sx={{
              pt: 2,
            }}
            variant="subtitle2"
            textAlign="center"
            color="text.secondary"
          >
            {t(
              'Powerful components across multiple product niches for fast & perfect apps development processes'
            )}
            .
          </Typography>
        </Box>
        <Box
          pr={2}
          pb={2}
        >
          <VerticalMenuIndicatorPrimary />
        </Box>
      </Box>
    </Box>
  );
}

export default NavBoxVerticalMenu;
