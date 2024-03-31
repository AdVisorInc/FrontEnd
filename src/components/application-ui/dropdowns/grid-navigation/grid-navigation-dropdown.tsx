import { alpha, Box, Fade, Menu, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import GridNavigation from 'src/components/application-ui/vertical-menus/grid/grid-navigation';

interface Origin {
  vertical: 'top' | 'bottom' | 'center';
  horizontal: 'left' | 'right' | 'center';
}
interface GridNavigationDropdownProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
  anchorOrigin?: Origin;
  transformOrigin?: Origin;
}

export const GridNavigationDropdown: FC<GridNavigationDropdownProps> = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const { t } = useTranslation();

  return (
    <>
      <Menu
        id="large-navigation-menu"
        anchorEl={anchorEl}
        open={!!open}
        onClose={onClose}
        anchorOrigin={props.anchorOrigin || { vertical: 'top', horizontal: 'right' }}
        transformOrigin={props.transformOrigin || { vertical: 'top', horizontal: 'right' }}
        MenuListProps={{
          'aria-labelledby': 'large-navigation-button',
          sx: {
            p: 0,
          },
        }}
        TransitionComponent={Fade}
        slotProps={{
          paper: {
            sx: {
              width: 380,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            },
          },
        }}
      >
        <Box p={2}>
          <Typography
            variant="h4"
            textAlign="center"
          >
            {t('Dashboards')}
          </Typography>
          <Typography
            variant="subtitle2"
            textAlign="center"
            color="text.secondary"
            mb={2}
          >
            {t('Subheading for this menu example')}
          </Typography>
          <GridNavigation />
        </Box>
      </Menu>
    </>
  );
};

GridNavigationDropdown.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
