import { alpha, styled, Tabs } from '@mui/material';

export const TabsLineAlternate = styled(Tabs)(({ theme }) => ({
  '.MuiTabs-indicator': {
    height: 4,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    '&::after': {
      content: '""',
      height: 4,
      width: 34,
      borderRadius: 'inherit',
      background: theme.palette.secondary.main,
    },
  },
}));

export const TabsRounded = styled(Tabs)(({ theme }) => ({
  overflow: 'visible',
  minHeight: 0,

  '.MuiTabs-flexContainer': {
    position: 'relative',
    zIndex: 6,
  },

  '.MuiTabs-scroller': {
    overflow: 'visible !important',
  },

  '.MuiTab-root': {
    padding: theme.spacing(1, 2),
    transition: theme.transitions.create(['color', 'background-color'], {
      duration: theme.transitions.duration.standard,
    }),
    fontWeight: 600,
    minHeight: 0,
    height: 44,
    margin: theme.spacing(0, 0.5),

    '&.Mui-selected': {
      color: theme.palette.primary.main,
    },
  },
  '.MuiTabs-indicator': {
    height: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    '&::after': {
      content: '""',
      height: 44,
      width: '100%',
      position: 'absolute',
      top: -44,
      borderRadius: theme.shape.borderRadius,
      background: alpha(theme.palette.primary.main, 0.08),
    },
  },
}));

export const TabsShadow = styled(Tabs)(({ theme }) => ({
  overflow: 'visible',
  minHeight: 0,

  '.MuiTabs-flexContainer': {
    position: 'relative',
    zIndex: 6,
  },

  '.MuiTabs-scroller': {
    overflow: 'visible !important',
  },

  '.MuiTab-root': {
    padding: theme.spacing(1, 2),
    transition: theme.transitions.create(['color', 'background-color'], {
      duration: theme.transitions.duration.standard,
    }),
    minHeight: 0,
    height: 44,
    fontWeight: 600,
    margin: theme.spacing(0, 0.5),

    '&.Mui-selected': {
      color: theme.palette.primary.contrastText,
    },
  },
  '.MuiTabs-indicator': {
    height: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    '&::after': {
      content: '""',
      height: 44,
      width: '100%',
      position: 'absolute',
      top: -44,
      borderRadius: 'inherit',
      background: theme.palette.primary.main,
      boxShadow: theme.shadows[1],
    },
  },
}));

export const TabsAlternate = styled(Tabs)(({ theme }) => ({
  overflow: 'visible',
  minHeight: 0,

  '.MuiTabs-flexContainer': {
    position: 'relative',
    zIndex: 6,
  },

  '.MuiTabs-scroller': {
    overflow: 'visible !important',
  },

  '.MuiTab-root': {
    padding: theme.spacing(1, 2),
    transition: theme.transitions.create(['color', 'background-color'], {
      duration: theme.transitions.duration.standard,
    }),
    minHeight: 0,
    height: 44,
    fontWeight: 600,
    margin: theme.spacing(0, 0.5),

    '&.Mui-selected': {
      color: theme.palette.primary.contrastText,
    },
  },
  '.MuiTabs-indicator': {
    height: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    '&::after': {
      content: '""',
      height: 44,
      width: '100%',
      position: 'absolute',
      top: -44,
      borderRadius: theme.shape.borderRadius,
      background: theme.palette.primary.main,
      boxShadow: theme.shadows[1],
    },
  },
}));

export const TabsPills = styled(Tabs)(({ theme }) => ({
  overflow: 'visible',
  minHeight: 0,

  '.MuiTabs-flexContainer': {
    position: 'relative',
    zIndex: 6,
  },

  '.MuiTabs-scroller': {
    overflow: 'visible !important',
  },

  '.MuiTab-root': {
    padding: theme.spacing(1, 2),
    transition: theme.transitions.create(['color', 'background-color'], {
      duration: theme.transitions.duration.standard,
    }),
    fontWeight: 600,
    margin: theme.spacing(0),
    minHeight: 0,
    fontSize: 13,
    textTransform: 'uppercase',

    '&.Mui-selected': {
      color: theme.palette.primary.main,
    },
  },
  '.MuiTabs-indicator': {
    height: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    '&::after': {
      content: '""',
      height: 38,
      width: '100%',
      position: 'absolute',
      top: -38,
      borderRadius: theme.shape.borderRadius * 5,
      background: alpha(theme.palette.primary.main, 0.08),
    },
  },
}));
