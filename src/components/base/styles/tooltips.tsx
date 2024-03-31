import {
  alpha,
  PaletteColor,
  styled,
  Theme,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from '@mui/material';
import { neutral } from 'src/theme/colors';

export const TooltipLight = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
    color: neutral[900],

    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 .2rem .8rem rgba(0,0,0,.18), 0 .08rem .15rem rgba(0,0,0,.15)',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: alpha(theme.palette.common.white, 0.9),
  },
}));

const createStyledTooltip = (colorKey: keyof Theme['palette']) => {
  return styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
    />
  ))(({ theme }) => {
    const color = theme.palette[colorKey] as PaletteColor;

    return {
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: color.main,
        color: color.contrastText,
        borderRadius: theme.shape.borderRadius,
        boxShadow: `0 .2rem .8rem ${alpha(color.main, 0.18)}, 0 .08rem .15rem ${alpha(
          color.main,
          0.15
        )}`,
      },
      [`& .${tooltipClasses.arrow}`]: {
        color: color.main,
      },
    };
  });
};

// Create specific Tooltip components
export const TooltipPrimary = createStyledTooltip('primary');
export const TooltipSecondary = createStyledTooltip('secondary');
export const TooltipError = createStyledTooltip('error');
export const TooltipWarning = createStyledTooltip('warning');
export const TooltipInfo = createStyledTooltip('info');
export const TooltipSuccess = createStyledTooltip('success');
