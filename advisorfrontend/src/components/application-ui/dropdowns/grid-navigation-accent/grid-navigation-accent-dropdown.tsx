import { Box, Fade, Menu, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import GridNavigationAccent from 'src/components/application-ui/vertical-menus/grid-accent/grid-navigation-accent';

interface Origin {
  vertical: 'top' | 'bottom' | 'center';
  horizontal: 'left' | 'right' | 'center';
}
interface GridNavigationAccentDropdownProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
  anchorOrigin?: Origin;
  transformOrigin?: Origin;
}

export const GridNavigationAccentDropdown: FC<GridNavigationAccentDropdownProps> = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const { t } = useTranslation();

  return (
    <>
      <Menu
        id="large-navigation-accent-menu"
        anchorEl={anchorEl}
        open={!!open}
        onClose={onClose}
        anchorOrigin={props.anchorOrigin || { vertical: 'top', horizontal: 'right' }}
        transformOrigin={props.transformOrigin || { vertical: 'top', horizontal: 'right' }}
        MenuListProps={{
          'aria-labelledby': 'large-navigation-accent-button',
          sx: {
            p: 0,
          },
        }}
        TransitionComponent={Fade}
        slotProps={{
          paper: {
            sx: {
              width: 380,
              background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
            },
          },
        }}
      >
        <Box p={2}>
          <Typography
            variant="h4"
            textAlign="center"
            color="common.white"
          >
            {t('Dashboards')}
          </Typography>
          <Typography
            variant="subtitle2"
            textAlign="center"
            mb={2}
            color="common.white"
            sx={{ opacity: 0.7 }}
          >
            {t('Subheading for this menu example')}
          </Typography>
          <GridNavigationAccent />
        </Box>
      </Menu>
    </>
  );
};

GridNavigationAccentDropdown.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
