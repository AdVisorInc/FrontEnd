import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  ListItemButton,
  ListItemText,
  PaletteMode,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import type { FC, ReactElement } from 'react';
import { AvatarState } from 'src/components/base/styles/avatar';
import { VisuallyHiddenRadio } from 'src/components/base/styles/visually-hidden';

interface Option {
  label: string;
  value: PaletteMode;
  icon: ReactElement;
}

const options: Option[] = [
  {
    label: 'Day',
    value: 'light',
    icon: <LightModeTwoToneIcon fontSize="small" />,
  },
  {
    label: 'Night',
    value: 'dark',
    icon: <DarkModeTwoToneIcon fontSize="small" />,
  },
];

interface OptionsColorPresetProps {
  onChange?: (value: PaletteMode) => void;
  value?: PaletteMode;
}

export const OptionsColorPreset: FC<OptionsColorPresetProps> = (props) => {
  const { onChange, value } = props;
  const theme = useTheme();

  return (
    <>
      <Box p={{ xs: 2, md: 3 }}>
        <Typography variant="h5">Color Preset</Typography>
        <Typography
          color="text.secondary"
          noWrap
        >
          Switch between light (day) and dark (night) modes
        </Typography>
      </Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        flexWrap="wrap"
        px={{ xs: 2, md: 3 }}
        pb={{ xs: 2, md: 3 }}
        gap={{ xs: 1, md: 2 }}
      >
        {options.map((option) => (
          <Card
            key={option.value}
            elevation={0}
            sx={{
              border: 0,
            }}
          >
            <ListItemButton
              sx={{
                px: 2,
                py: 1,
                borderRadius: 'inherit',
                transition: 'none',
                boxShadow: `0 0 0 1px ${alpha(theme.palette.primary.main, 0.3)} inset`,

                '&:hover': {
                  backgroundColor: 'background.paper',
                  boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.6)} inset`,
                },

                '&.Mui-selected': {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  boxShadow: `0 0 0 5px ${alpha(theme.palette.primary.main, 0.5)}`,

                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                },
              }}
              selected={option.value === value}
              onClick={() => onChange?.(option.value)}
            >
              <ListItemText
                disableTypography
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: 160,
                }}
                primary={
                  <>
                    <AvatarState
                      state={option.value === value ? 'light' : 'primary'}
                      isSoft={option.value === value ? false : true}
                      sx={{ mb: 1 }}
                    >
                      {option.icon}
                    </AvatarState>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      color={option.value === value ? 'common.white' : theme.palette.primary.main}
                    >
                      {option.label}
                    </Typography>
                  </>
                }
              />
              <VisuallyHiddenRadio
                onChange={() => onChange?.(option.value)}
                value={option.value}
                name="radio-buttons"
                inputProps={{ 'aria-label': option.label }}
                color="primary"
                checked={option.value === value}
              />
            </ListItemButton>
          </Card>
        ))}
      </Stack>
    </>
  );
};

OptionsColorPreset.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOf(['light', 'dark']),
};
