import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import {
  alpha,
  Box,
  Button,
  CardHeader,
  Chip,
  Divider,
  Fade,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  Theme,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

type MenuItemType = {
  labelKey: string;
  selected?: boolean;
  disabled?: boolean;
  hot?: boolean;
};

const MENU_ITEMS: MenuItemType[][] = [
  [
    { labelKey: 'Automation', selected: true },
    { labelKey: 'Analytics' },
    { labelKey: 'Banking', disabled: true },
    { labelKey: 'Commerce' },
    { labelKey: 'Crypto' },
  ],
  [
    { labelKey: 'Finance', selected: true },
    { labelKey: 'Fitness', hot: true },
    { labelKey: 'Healthcare', disabled: true },
    { labelKey: 'Helpdesk' },
    { labelKey: 'Learning' },
  ],
  [
    { labelKey: 'Calendar', selected: true },
    { labelKey: 'File Manager' },
    { labelKey: 'Jobs Platform', disabled: true },
    { labelKey: 'Messenger' },
    { labelKey: 'Projects Board' },
  ],
];

interface Origin {
  vertical: 'top' | 'bottom' | 'center';
  horizontal: 'left' | 'right' | 'center';
}
interface MegaMenuDropdownProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
  anchorOrigin?: Origin;
  transformOrigin?: Origin;
}

export const MegaMenuDropdown: FC<MegaMenuDropdownProps> = (props) => {
  const { anchorEl, onClose, open, ...other } = props;

  const { t } = useTranslation();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <>
      <Menu
        id="mega-menu-menu"
        anchorEl={anchorEl}
        open={!!open}
        onClose={onClose}
        anchorOrigin={props.anchorOrigin || { vertical: 'top', horizontal: 'right' }}
        transformOrigin={props.transformOrigin || { vertical: 'top', horizontal: 'right' }}
        MenuListProps={{
          'aria-labelledby': 'mega-menu-button',
          sx: { p: 0 },
        }}
        TransitionComponent={Fade}
        {...other}
      >
        <CardHeader
          title="Mega Menu"
          titleTypographyProps={{
            sx: { pr: { xs: 0, sm: 2 } },
          }}
          subheaderTypographyProps={{
            sx: { pr: { xs: 0, sm: 2 } },
          }}
          subheader="This is an example for creating a responsive mega menu dropdown component."
          action={
            <ButtonIcon
              size="small"
              variant="outlined"
              startIcon={<ChevronRightTwoToneIcon />}
            />
          }
        />
        <Divider />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              flexItem
              orientation={smUp ? 'vertical' : 'horizontal'}
            />
          }
          justifyContent="stretch"
        >
          {MENU_ITEMS.map((section, idx) => (
            <MenuList
              key={idx}
              sx={{
                p: { xs: 1, sm: 2 },
                width: '100%',
                '.MuiMenuItem-root': {
                  pr: 0.5,
                },
              }}
            >
              {section.map((item) => (
                <MenuItem
                  key={item.labelKey}
                  selected={item.selected}
                  disabled={item.disabled}
                >
                  <ListItemText primary={t(item.labelKey)} />
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    {item.hot && (
                      <Chip
                        label={t('Hot')}
                        color="primary"
                      />
                    )}
                    <ChevronRightTwoToneIcon />
                  </Box>
                </MenuItem>
              ))}
            </MenuList>
          ))}
        </Stack>
        <Divider />
        <Box
          sx={{
            p: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
            textAlign: 'center',
          }}
        >
          <Button color="secondary">{t('View more')}</Button>
        </Box>
      </Menu>
    </>
  );
};

MegaMenuDropdown.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
