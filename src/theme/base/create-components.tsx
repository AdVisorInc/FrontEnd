import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {
  backdropClasses,
  createTheme,
  inputLabelClasses,
  SliderThumb,
  tableCellClasses,
} from '@mui/material';
import type { Components } from '@mui/material/styles/components';
import { BORDER_RADIUS, SPACING_UNIT } from '../utils';

const muiTheme = createTheme();

interface ThumbComponentProps extends React.HTMLAttributes<unknown> {}

function ThumbComponent(props: ThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <i />
    </SliderThumb>
  );
}

export const createComponents = (): Components => {
  return {
    MuiChartsLegend: {
      styleOverrides: {
        root: {
          '& .MuiChartsLegend-mark': {
            rx: BORDER_RADIUS / 2,
          },
        },
      },
    },
    MuiTimeline: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS,
        },
      },
    },
    MuiPickersYear: {
      styleOverrides: {
        yearButton: {
          borderRadius: BORDER_RADIUS,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          [`&:not(.${backdropClasses.invisible})`]: {
            backdropFilter: 'blur(5px)',
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        circle: {
          strokeLinecap: 'round',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 10,
          borderRadius: BORDER_RADIUS,
        },
        bar: {
          borderRadius: BORDER_RADIUS,
        },
        dashed: {
          backgroundSize: '8px 8px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '18px 14px',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          [`& .${tableCellClasses.root}`]: {
            fontSize: 13,
            lineHeight: 1,
            textTransform: 'uppercase',
            paddingTop: 16,
            paddingBottom: 16,
          },
          [`& .${tableCellClasses.paddingCheckbox}`]: {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        elevation: 24,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          paddingRight: 0,
        },
        label: {
          fontWeight: 500,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& > label.MuiTypography-gutterBottom': {
            marginBottom: SPACING_UNIT,
          },
        },
      },
    },
    MuiSlider: {
      defaultProps: {
        slots: {
          thumb: ThumbComponent,
        },
      },
      styleOverrides: {
        root: {
          height: 6,
          padding: '13px 0',

          '& .MuiSlider-mark': {
            height: 2,
            width: 2,
          },

          '& .MuiSlider-markActive': {
            height: 4,
            width: 2,
          },

          '& .MuiSlider-thumb': {
            height: 27,
            width: 27,

            '& .MuiSlider-valueLabel': {
              fontWeight: 500,
              borderRadius: BORDER_RADIUS,
              minWidth: 38,
              padding: '4px 6px',
            },

            '&:after': {
              display: 'none',
            },

            '& i': {
              height: 6,
              width: 6,
              marginLeft: 1,
              marginRight: 1,
              borderRadius: BORDER_RADIUS,
              opacity: 0.6,
              transition: muiTheme.transitions.create(['opacity'], {
                duration: 150,
              }),
            },

            '&:hover, &.Mui-focusVisible': {
              '& i': {
                opacity: 1,
              },
            },
          },
          '& .MuiSlider-track': {
            height: 6,
          },
          '& .MuiSlider-rail': {
            opacity: 1,
            height: 3,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        sizeSmall: {
          width: 30,
          height: 18,

          '&:active': {
            '& .MuiSwitch-thumb': {
              width: 16,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
              transform: 'translateX(10px)',
            },
          },
          '& .MuiSwitch-thumb': {
            width: 14,
            height: 14,
          },

          '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
              transform: 'translateX(12px)',
            },
          },
        },
        root: {
          width: 44,
          height: 24,
          padding: 0,
          margin: SPACING_UNIT / 2,
          display: 'flex',

          '&:active': {
            '& .MuiSwitch-thumb': {
              width: 22,
            },
            '& .MuiSwitch-switchBase.Mui-checked:not(.Mui-disabled)': {
              transform: 'translateX(16px)',
            },
            '& .MuiSwitch-switchBase.Mui-disabled .MuiSwitch-thumb': {
              width: 18,
            },
          },
          '& .MuiSwitch-switchBase': {
            padding: 3,
            '&.Mui-checked': {
              transform: 'translateX(20px)',

              '& + .MuiSwitch-track': {
                opacity: 1,
              },
            },
          },
          '& .MuiSwitch-thumb': {
            width: 18,
            height: 18,
            borderRadius: 32,
            transition: muiTheme.transitions.create(['width', 'translateX'], {
              duration: 150,
            }),
          },
          '& .MuiSwitch-track': {
            borderRadius: 32,
            opacity: 1,
            transition: muiTheme.transitions.create(['background-color'], {
              duration: 150,
            }),
            boxSizing: 'border-box',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',

            '& > span': {
              borderRadius: 24,
            },
          },
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        checkedIcon: <CheckBoxRoundedIcon />,
        icon: <CheckBoxOutlineBlankRoundedIcon />,
        indeterminateIcon: <IndeterminateCheckBoxRoundedIcon />,
      },
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: SPACING_UNIT * 2,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: SPACING_UNIT * 2,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: SPACING_UNIT * 2,
        },
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        variant: 'standard',
      },
      styleOverrides: {
        root: {
          textTransform: 'initial',
          marginTop: '5px',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '.MuiInputBase-root': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,

          [`&.${inputLabelClasses.shrink}`]: {
            [`&.${inputLabelClasses.filled}`]: {
              fontSize: 17,

              '&.MuiInputLabel-sizeSmall': {
                fontSize: 15,
              },

              '&.MuiInputLabel-sizeMedium + .MuiOutlinedInput-root > .MuiOutlinedInput-input': {
                paddingTop: 24,
                paddingBottom: 8,
                paddingLeft: 12,
              },

              '&.MuiInputLabel-sizeSmall + .MuiOutlinedInput-root .MuiOutlinedInput-input': {
                paddingTop: 20,
                paddingBottom: 6,
                paddingLeft: 12,
              },
            },
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: KeyboardArrowDownRoundedIcon,
      },
      styleOverrides: {
        select: {
          fontWeight: 500,
        },
        root: {
          '&.Mui-focused': {
            zIndex: 1,
          },
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <KeyboardArrowDownRoundedIcon />,
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
            right: 14,
          },

          '& .MuiOutlinedInput-root .MuiInputBase-inputSizeSmall + .MuiAutocomplete-endAdornment': {
            right: 7,
          },
        },
        clearIndicator: { marginRight: 0 },
        listbox: {
          padding: SPACING_UNIT,

          '& .MuiAutocomplete-option': {
            borderRadius: BORDER_RADIUS,
            fontWeight: 500,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontWeight: 500,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS,
          transition: 'none',
          borderStyle: 'solid',
          borderWidth: 1,
          overflow: 'hidden',
          '&:before, &:after': {
            display: 'none',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before, &:after': {
            display: 'none',
          },
        },
      },
    },
    MuiNativeSelect: {
      defaultProps: {
        IconComponent: KeyboardArrowDownRoundedIcon,
      },
      styleOverrides: {
        outlined: {
          '&.MuiInput-input': {
            borderRadius: BORDER_RADIUS,
            transition: 'none',
            borderStyle: 'solid',
            borderWidth: 1,
            overflow: 'hidden',
            fontWeight: 500,
            paddingLeft: 14,
            paddingRight: 14,
            paddingTop: 16,
            paddingBottom: 16,
            '&.MuiInputBase-inputSizeSmall': {
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 8,
              paddingBottom: 8,
            },
          },
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          paddingTop: SPACING_UNIT,
          paddingBottom: SPACING_UNIT,
          justifyContent: 'center',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontWeight: 600,
          fontSize: 14,
          marginTop: `12px !important`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: 0,
          minWidth: 0,
          marginLeft: SPACING_UNIT * 1.5,
          marginRight: SPACING_UNIT * 1.5,
          fontWeight: 500,

          '&:first-of-type': {
            marginLeft: 0,
          },

          '&:last-of-type': {
            marginRight: 0,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& + .MuiDivider-root': {
            marginTop: '-1px',
          },
        },

        indicator: {
          borderRadius: 12,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          flex: 1,

          p: {
            margin: 0,
          },

          '.MuiTablePagination-toolbar': {
            minHeight: 0,
            margin: 0,
            padding: 0,
          },
        },

        actions: {
          '.MuiButtonBase-root': {
            padding: SPACING_UNIT / 2,
          },
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 16,
      },
      styleOverrides: {
        list: {
          padding: SPACING_UNIT,
          minWidth: 240,
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          transition: 'none !important',
        },
        focusHighlight: {
          transition: 'none',
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 8,
        disableGutters: true,
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          '.MuiListItem-root, .MuiListItemButton-root': {
            '&:last-of-type + .MuiDivider-root': {
              display: 'none',
            },
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          lineHeight: '36px',
          textTransform: 'uppercase',
          fontSize: 13,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: muiTheme.shape.borderRadius,
          fontWeight: 500,
          paddingTop: `calc(${SPACING_UNIT / 1.2}px - 1px)`,
          paddingBottom: `calc(${SPACING_UNIT / 1.2}px - 1px)`,
          fontSize: 14,
          marginTop: '1px',
          marginBottom: '1px',

          '&:hover .MuiListItemIcon-root, &.Mui-selected .MuiListItemIcon-root': {
            color: 'inherit',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        wrapper: {
          display: 'flex',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: SPACING_UNIT * 2,

          '&:last-child': {
            paddingBottom: SPACING_UNIT * 2,
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          paddingLeft: SPACING_UNIT * 2,
          paddingRight: SPACING_UNIT * 2,
          paddingTop: SPACING_UNIT * 1.5,
          paddingBottom: SPACING_UNIT * 1.5,
          alignSelf: 'flex-start',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: SPACING_UNIT * 2,
          [muiTheme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
          },
        },
        action: {
          display: 'flex',
          gap: SPACING_UNIT,
          marginRight: 0,
          alignSelf: 'center',
          [muiTheme.breakpoints.down('sm')]: {
            marginTop: SPACING_UNIT * 1.5,
            alignSelf: 'flex-start',
          },
        },
        content: {
          overflow: 'hidden',
          width: '100%',
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: muiTheme.shape.borderRadius,
          boxShadow: 'none',
          border: '1px solid',
          borderColor: muiTheme.palette.divider,
        },
        grouped: {
          border: 0,
          '&.Mui-disabled': {
            border: 0,
          },
          '&:not(:first-of-type)': {
            borderRadius: muiTheme.shape.borderRadius,
          },
          '&:first-of-type': {
            borderRadius: muiTheme.shape.borderRadius,
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          margin: SPACING_UNIT / 3,
          border: 0,
          borderRadius: muiTheme.shape.borderRadius,
          textTransform: 'none',
          fontWeight: 600,
          paddingTop: SPACING_UNIT / 2,
          paddingBottom: SPACING_UNIT / 2,
          paddingLeft: SPACING_UNIT,
          paddingRight: SPACING_UNIT,
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          paddingLeft: SPACING_UNIT,
          paddingRight: SPACING_UNIT,
          fontWeight: 500,
        },
        deleteIcon: {
          color: 'inherit',
          fontSize: 16,
          opacity: 0.8,
          '&:hover': {
            color: 'inherit',
            opacity: 1,
          },
        },
        labelMedium: {
          paddingLeft: SPACING_UNIT * 1.5,
          paddingRight: SPACING_UNIT * 1.5,
        },
        avatar: {
          borderRadius: 'inherit',

          color: 'inherit',
          backgroundColor: 'inherit',
        },
        avatarMedium: {
          marginLeft: SPACING_UNIT / 3,
          marginRight: -SPACING_UNIT / 1.5,
        },
        avatarSmall: {
          marginLeft: 0,
          marginRight: 0,
        },
        icon: {
          marginLeft: SPACING_UNIT,
          marginRight: -SPACING_UNIT / 2,
        },
        root: {
          fontWeight: 600,
          fontSize: 12,
          borderRadius: muiTheme.shape.borderRadius,
          transition: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
        sizeMedium: {
          height: SPACING_UNIT * 3,
        },
        sizeSmall: {
          height: SPACING_UNIT * 2.5,
        },
        //@ts-ignore
        outlinedDefault: {
          borderColor: muiTheme.palette.divider,
          borderRadius: 50,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        standard: {
          fontWeight: 600,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          transition: 'none',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 21,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 8,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableElevation: true,
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          transition: 'none',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          transition: 'none',
          fontWeight: 600,
        },
        sizeSmall: {
          padding: '4px 12px',
          fontSize: 13,
        },
        sizeMedium: {
          padding: '8px 16px',
        },
        sizeLarge: {
          padding: '10px 20px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: muiTheme.shape.borderRadius,
          transition: 'none',
          '.MuiTouchRipple-root > *': {
            display: 'none',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
        },

        '#__next': {
          display: 'flex',
          minHeight: '100vh',
        },

        '#nprogress': {
          pointerEvents: 'none',
        },
        '#nprogress .bar': {
          height: 4,
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2000,
        },
      },
    },
  };
};
