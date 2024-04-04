import { alpha, Box, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { FC } from 'react';

interface PlaceholderBoxProps {
  title?: string;
  height?: number;
  fixedHeight?: number;
  flex?: number;
  dark?: boolean;
  disableHover?: boolean;
  sx?: SxProps<Theme>;
}

const PlaceholderBox: FC<PlaceholderBoxProps> = (props) => {
  const { title, height, disableHover, fixedHeight, flex, dark = false, sx, ...other } = props;
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === 'dark' || dark;

  const darkBackground = `repeating-linear-gradient(
    -55deg,
    ${alpha(theme.palette.common.black, 0.3)} 0px,
    ${alpha(theme.palette.common.black, 0.3)} 4px,
    ${alpha(theme.palette.neutral[900], 0.3)} 4px,
    ${alpha(theme.palette.neutral[900], 0.3)} 8px
  )`;

  const lightBackground = `repeating-linear-gradient(
    -55deg,
    ${alpha(theme.palette.common.white, 0.7)} 0px,
    ${alpha(theme.palette.common.white, 0.7)} 4px,
    ${alpha(theme.palette.neutral[100], 0.7)} 4px,
    ${alpha(theme.palette.neutral[100], 0.7)} 8px
  )`;

  return (
    <Box
      sx={{
        ...sx,
        flex: flex ? 1 : 0,
        borderRadius: theme.shape.borderRadius + 'px',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor:
          theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.neutral[500],
        minHeight: height ? height : 40,
        height: fixedHeight ? fixedHeight : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDarkMode ? darkBackground : lightBackground,

        '&:hover': {
          borderColor: !disableHover
            ? theme.palette.primary.main
            : dark
              ? theme.palette.neutral[400]
              : theme.palette.neutral[25],
          boxShadow: !disableHover && theme.shadows[7],
        },
      }}
      {...other}
    >
      {title && (
        <Typography
          variant="h3"
          fontWeight={600}
        >
          {title}
        </Typography>
      )}
    </Box>
  );
};

export default PlaceholderBox;
