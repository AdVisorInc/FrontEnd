import { alpha, MenuList, styled } from '@mui/material';

type Variant = 'pills' | 'square' | 'indicator' | 'rounded';
type Color = 'primary' | 'secondary' | 'error' | 'success';

const generateBaseStyles = (theme: any, color: Color, variant: Variant) => {
  const commonStyles = {
    padding: theme.spacing(1, 1, 1, 2),
    marginBottom: '1px',
    minWidth: 240,
    position: 'relative',
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[700] : theme.palette.neutral[600],
    '&:last-child': {
      marginBottom: 0,
    },

    '&.Mui-selected, &.Mui-selected:hover, &:hover, &.MuiButtonBase-root:active': {
      background: alpha(theme.palette[color].main, 0.06),
      color: theme.palette[color].main,
    },
  };

  switch (variant) {
    case 'pills':
      return {
        ...commonStyles,
        borderRadius: '50px',
      };
    case 'rounded':
      return {
        ...commonStyles,
        borderRadius: theme.shape.borderRadius,
      };
    case 'square':
      return {
        ...commonStyles,
        borderRadius: 0,
      };
    case 'indicator':
      return {
        ...commonStyles,
        borderRadius: theme.shape.borderRadius,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        '&::before': {
          left: 0,
          width: 0,
          background: theme.palette[color].main,
          content: '" "',
          top: '50%',
          marginTop: '-10px',
          height: 0,
          transition: theme.transitions.create(['all']),
          opacity: 0,
          position: 'absolute',
          borderTopRightRadius: theme.shape.borderRadius,
          borderBottomRightRadius: theme.shape.borderRadius,
        },
        '&.Mui-selected, &:hover, &.MuiButtonBase-root:active': {
          color: theme.palette[color].main,
          background: alpha(theme.palette[color].main, 0.06),
          '&::before': {
            height: '100%',
            opacity: 1,
            width: '4px',
            margin: 0,
            top: 0,
          },
        },
      };
  }
};

export const MenuListWrapperPillsSecondary = styled(MenuList)(({ theme }) => ({
  '& .MuiMenuItem-root': generateBaseStyles(theme, 'secondary', 'pills'),
}));

export const MenuListWrapperPillsPrimary = styled(MenuList)(({ theme }) => ({
  '& .MuiMenuItem-root': generateBaseStyles(theme, 'primary', 'pills'),
}));

export const MenuListWrapperRoundedSecondary = styled(MenuList)(({ theme }) => ({
  '& .MuiMenuItem-root': generateBaseStyles(theme, 'secondary', 'rounded'),
}));

export const MenuListWrapperRoundedPrimary = styled(MenuList)(({ theme }) => ({
  '& .MuiMenuItem-root': generateBaseStyles(theme, 'primary', 'rounded'),
}));

export const MenuListWrapperSquareSecondary = styled(MenuList)(({ theme }) => ({
  '& .MuiMenuItem-root': generateBaseStyles(theme, 'secondary', 'square'),
}));

export const MenuListWrapperSquarePrimary = styled(MenuList)(({ theme }) => ({
  '& .MuiMenuItem-root': generateBaseStyles(theme, 'primary', 'square'),
}));

export const MenuListWrapperIndicatorPrimary = styled(MenuList)(({ theme }) => ({
  '& .MuiMenuItem-root': generateBaseStyles(theme, 'primary', 'indicator'),
}));

export const MenuListWrapperIndicatorSecondary = styled(MenuList)(({ theme }) => ({
  '& .MuiMenuItem-root': generateBaseStyles(theme, 'secondary', 'indicator'),
}));

export const MenuListWrapperIndicatorSuccess = styled(MenuList)(({ theme }) => ({
  '& .MuiMenuItem-root': generateBaseStyles(theme, 'success', 'indicator'),
}));

export const MenuListWrapperIndicatorError = styled(MenuList)(({ theme }) => ({
  '& .MuiMenuItem-root': generateBaseStyles(theme, 'error', 'indicator'),
}));
