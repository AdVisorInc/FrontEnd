import PanoramaVerticalTwoToneIcon from '@mui/icons-material/PanoramaVerticalTwoTone';
import PanoramaWideAngleTwoToneIcon from '@mui/icons-material/PanoramaWideAngleTwoTone';
import {
  alpha,
  Box,
  Card,
  ListItemButton,
  ListItemText,
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
  value: boolean;
  icon: ReactElement;
}

const options: Option[] = [
  {
    label: 'Compact',
    value: false,
    icon: <PanoramaVerticalTwoToneIcon />,
  },
  {
    label: 'Wide',
    value: true,
    icon: <PanoramaWideAngleTwoToneIcon />,
  },
];

interface OptionsStretchProps {
  onChange?: (value: boolean) => void;
  value?: boolean;
}

export const OptionsStretch: FC<OptionsStretchProps> = (props) => {
  const { onChange, value } = props;
  const theme = useTheme();

  return (
    <Box>
      <Box
        textAlign="center"
        p={{ xs: 2, md: 3 }}
      >
        <Typography variant="h5">Stretch Content</Typography>
        <Typography
          color="text.secondary"
          noWrap
        >
          Fluid content area that fills larger width viewports
        </Typography>
      </Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        px={{ xs: 2, md: 3 }}
        pb={{ xs: 2, md: 3 }}
        gap={{ xs: 1, md: 2 }}
      >
        {options.map((option) => (
          <Card
            key={option.label}
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
                  minWidth: 132,
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
    </Box>
  );
};

OptionsStretch.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.bool,
};
