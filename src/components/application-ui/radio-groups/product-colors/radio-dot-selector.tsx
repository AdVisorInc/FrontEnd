import { Box, styled, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { VisuallyHiddenRadio } from 'src/components/base/styles/visually-hidden';

export interface DotItem {
  id: number;
  color: string;
}

interface DotProps {
  size: number;
}

interface RadioDotSelectorProps {
  dotItems: DotItem[];
  size: number;
}

const resolveThemeColor = (theme, colorKey) => {
  const colorPath = colorKey.split('.');
  let resolvedColor = theme.palette;
  for (const key of colorPath) {
    resolvedColor = resolvedColor[key];
    if (!resolvedColor) return null;
  }
  return resolvedColor;
};

const Dot = styled(Box)<DotProps>(({ theme, size }) => ({
  transform: 'scale(1)',
  transition: theme.transitions.create(['transform', 'box-shadow'], {
    duration: theme.transitions.duration.shortest,
  }),
  cursor: 'pointer',
  width: `${size}px`,
  height: `${size}px`,
  border: `${theme.palette.background.paper} solid 2px`,
  transformOrigin: 'center',
  borderRadius: '50px',
  margin: theme.spacing(0, 1, 0, 0),

  '&:last-child': {
    marginRight: 0,
  },

  '&.active, &:hover': {
    transform: `scale(${1 + 0.3 * (10 / size)})`,
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
  },
}));

const RadioDotSelector: React.FC<RadioDotSelectorProps> = ({ dotItems, size }) => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState<number>(dotItems[0].id);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(parseInt(event.target.value));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {dotItems.map((item) => {
        const backgroundColor = resolveThemeColor(theme, item.color) || item.color;

        return (
          <Dot
            key={item.id}
            size={size}
            sx={{
              background: backgroundColor,
              boxShadow: selectedValue === item.id ? `0 0 0 2px ${theme.palette.primary.main}` : '',
            }}
            onClick={() => setSelectedValue(item.id)}
          >
            <VisuallyHiddenRadio
              checked={selectedValue === item.id}
              onChange={handleChange}
              value={item.id}
              name="dot-radio-buttons"
              inputProps={{ 'aria-label': `Dot color ${item.color}` }}
              color="primary"
            />
          </Dot>
        );
      })}
    </Box>
  );
};

export default RadioDotSelector;
