import { alpha, Avatar, AvatarProps, PaletteColor, styled, Theme } from '@mui/material';

type PaletteColorKey = 'success' | 'error' | 'warning' | 'info' | 'primary' | 'secondary';

interface AvatarStateProps extends AvatarProps {
  state?: PaletteColorKey | 'light';
  useShadow?: boolean;
  isSoft?: boolean;
  isUpload?: boolean;
}

const getStateStyles = (
  theme: Theme,
  state?: AvatarStateProps['state'],
  useShadow?: boolean,
  isSoft?: boolean
) => {
  let backgroundColor: string | undefined;
  let boxShadow: string | undefined;
  let color: string;

  const getColorAndShadow = (colorName: PaletteColorKey, shadowStrength: number) => {
    const paletteColor: PaletteColor = theme.palette[colorName] as PaletteColor;
    backgroundColor = isSoft ? alpha(paletteColor.main, 0.08) : paletteColor.main;
    color = isSoft ? paletteColor.main : paletteColor.contrastText;
    boxShadow = useShadow && !isSoft ? theme.shadows[shadowStrength] : undefined;
  };

  const shadowStrengths: Record<PaletteColorKey, number> = {
    success: 2,
    error: 3,
    warning: 4,
    info: 5,
    primary: 1,
    secondary: 16,
  };

  switch (state) {
    case 'success':
    case 'error':
    case 'warning':
    case 'info':
    case 'primary':
    case 'secondary':
      getColorAndShadow(state, shadowStrengths[state]);
      break;
    case 'light':
      backgroundColor = alpha(theme.palette.common.white, 0.1);
      color = theme.palette.common.white;
      boxShadow = undefined;
      break;
    default:
      backgroundColor = theme.palette.background.paper;
      color = theme.palette.text.secondary;
      boxShadow = undefined;
      break;
  }

  return { backgroundColor, boxShadow, color };
};

export const AvatarState = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'state' && prop !== 'useShadow' && prop !== 'isSoft',
})<AvatarStateProps>(({ theme, state, useShadow, isSoft }) => {
  const { backgroundColor, boxShadow, color } = getStateStyles(theme, state, useShadow, isSoft);
  return {
    backgroundColor,
    boxShadow,
    color,
  };
});

export const AvatarGradient = styled(Avatar)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.info.main} 100%)`,
  color: theme.palette.common.white,
}));
