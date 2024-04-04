import { alpha, MenuItem, styled } from '@mui/material';

const menuItemStyles =
  (color) =>
  ({ theme }) => ({
    '&.MuiButtonBase-root': {
      padding: theme.spacing(1, 1, 1, 1.5),
    },
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.neutral[900] : theme.palette.neutral[50],
    border: `${theme.palette.divider} solid 1px`,
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(0, 0, 1),

    '&:last-child': {
      marginBottom: 0,
    },

    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > div > .MuiSvgIcon-root': {
      color:
        theme.palette.mode === 'dark' ? theme.palette.neutral[600] : theme.palette.neutral[500],
    },

    '.MuiListItemAvatar-root': {
      display: 'flex',
    },
    '&:hover, &.MuiMenuItem-root.Mui-selected': {
      backgroundColor: alpha(theme.palette[color].main, 0.08),
      borderColor: alpha(theme.palette[color].main, 0.3),
      color: theme.palette[color].main,

      '& > div > .MuiSvgIcon-root': {
        color: theme.palette[color].main,
      },
    },
  });

export const MenuItemPrimary = styled(MenuItem)(menuItemStyles('primary'));
export const MenuItemSecondary = styled(MenuItem)(menuItemStyles('secondary'));
export const MenuItemError = styled(MenuItem)(menuItemStyles('error'));
export const MenuItemSuccess = styled(MenuItem)(menuItemStyles('success'));
export const MenuItemWarning = styled(MenuItem)(menuItemStyles('warning'));
export const MenuItemInfo = styled(MenuItem)(menuItemStyles('info'));

export const MenuItemPrimaryAccent = styled(MenuItem)(({ theme }) => ({
  margin: theme.spacing(0, 0, 0.5),
  '&.Mui-selected, &.Mui-selected:hover': {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    '.MuiTypography-root': {
      color: 'inherit',
    },

    '&.Mui-focusVisible': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
