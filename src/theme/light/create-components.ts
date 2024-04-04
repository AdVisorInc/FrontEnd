import { backdropClasses, tableCellClasses } from '@mui/material';
import { alpha, darken } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';
import type { PaletteColor, PaletteOptions } from '@mui/material/styles/createPalette';

interface ComponentsConfig {
  palette: PaletteOptions;
}

export const createComponents = ({ palette }: ComponentsConfig): Components => {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha(palette.background!.paper, 0.9),
          backdropFilter: 'blur(18px)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha(palette.background!.paper, 0.9),
          backdropFilter: 'blur(18px)',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            backgroundColor: alpha((palette.primary as PaletteColor).main, 0.12),
          },
          '&:hover  > span': {
            boxShadow: `0 0 0 3px ${alpha((palette.primary as PaletteColor).main, 0.12)} inset`,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            backgroundColor: alpha((palette.primary as PaletteColor).main, 0.12),
          },
        },
      },
    },
    //@ts-ignore
    MuiChartsSurface: {
      styleOverrides: {
        root: {
          '& .MuiBarElement-root, & .MuiAreaElement-root, & .MuiPieArc-root': {
            filter: `drop-shadow(5px -5px 5px rgba(114, 117, 120,0.12))`,
          },
        },
      },
    },
    MuiLineElement: {
      styleOverrides: {
        root: {
          filter: `drop-shadow(2px 5px 5px rgba(114, 117, 120,0.16))`,
        },
      },
    },
    //@ts-ignore
    MuiChartsAxis: {
      styleOverrides: {
        root: {
          '& .MuiChartsAxis-tickLabel': {
            fill: palette.neutral![700],
            fontFamily: 'Inter',
          },
          '& .MuiChartsAxis-line': {
            stroke: palette.neutral![500],
            strokeWidth: 2,
          },
          '& .MuiChartsAxis-tick': {
            stroke: palette.neutral![500],
            strokeWidth: 2,
          },
        },
      },
    },
    //@ts-ignore
    MuiChartsTooltip: {
      styleOverrides: {
        root: {
          '& .MuiChartsTooltip-table': {
            boxShadow: `0px 4px 3px ${alpha(palette.neutral![600], 0.06)}, 0px 2px 5px ${alpha(
              palette.neutral![700],
              0.07
            )}`,
          },
        },
        table: {
          borderRadius: 4,
          boxShadow: `0px 4px 3px ${alpha(palette.neutral![600], 0.06)}, 0px 2px 5px ${alpha(
            palette.neutral![700],
            0.07
          )}`,

          '& .MuiChartsTooltip-valueCell .MuiTypography-root': {
            fontWeight: 500,
          },
        },
        mark: {
          boxShadow: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: palette.divider,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          [`& .${tableCellClasses.root}`]: {
            backgroundColor: alpha(palette.neutral![100], 0.5),
            color: palette.neutral![800],
            borderBottomColor: palette.divider,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(palette.neutral![50], 0.4),
          boxShadow: `${alpha(palette.neutral![400], 0.3)} 0 1px 3px`,
          borderColor: palette.neutral![400],

          '&:hover': {
            backgroundColor: palette.background!.paper,
            borderColor: palette.neutral![500],
          },
          '&.Mui-focused': {
            backgroundColor: palette.background!.paper,
            borderColor: (palette.primary as PaletteColor).main,
            boxShadow: `${(palette.primary as PaletteColor).main} 0 0px 0 1px inset`,
          },
          '&.Mui-disabled': {
            backgroundColor: palette.neutral![50],
            borderColor: palette.neutral![300],
            boxShadow: `${alpha(palette.neutral![400], 0.3)} 0 1px 3px`,
          },
          '&.Mui-error': {
            backgroundColor: alpha((palette.error as PaletteColor).main, 0.02),
            borderColor: (palette.error as PaletteColor).main,
            boxShadow: `${alpha((palette.error as PaletteColor).main, 0.12)} 0 1px 3px`,

            '&.Mui-focused': {
              backgroundColor: palette.background!.paper,
              boxShadow: `${(palette.error as PaletteColor).main} 0 0px 0 1px inset`,
            },

            '&:hover': {
              backgroundColor: alpha((palette.error as PaletteColor).main, 0.02),
              borderColor: (palette.error as PaletteColor).main,
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          boxShadow: `${alpha(palette.neutral![400], 0.3)} 0 1px 3px`,
          backgroundColor: palette.background!.paper,

          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: palette.neutral![500],
            },

            '&.Mui-focused': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: (palette.primary as PaletteColor).main,
              },
            },
            '&.Mui-error': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: (palette.error as PaletteColor).main,
              },
            },
          },

          '&.Mui-disabled': {
            backgroundColor: palette.neutral![25],
            boxShadow: `${alpha(palette.neutral![400], 0.3)} 0 1px 3px, ${alpha(
              palette.neutral![400],
              0.3
            )} 0 1px 3px inset`,

            '.MuiOutlinedInput-notchedOutline': {
              borderColor: palette.neutral![400],
            },
          },

          '&.Mui-error': {
            backgroundColor: alpha((palette.error as PaletteColor).main, 0.01),
            boxShadow: `${alpha((palette.error as PaletteColor).main, 0.12)} 0 1px 3px`,

            '&.Mui-focused': {
              boxShadow: 'none',
            },
          },
        },
        notchedOutline: {
          borderColor: palette.neutral![400],
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '& .MuiSlider-markLabel': {
            color: palette.neutral![700],
          },

          '& .MuiSlider-markLabelActive': {
            color: 'currentColor',
          },

          '& .MuiSlider-thumb': {
            backgroundColor: palette.background!.paper,
            border: '1px solid currentColor',

            '&:before': {
              boxShadow: `0px 3px 3px ${alpha(palette.neutral![600], 0.12)}, 0px 2px 4px ${alpha(
                palette.neutral![700],
                0.12
              )}`,
            },

            '&:hover, &.Mui-focusVisible': {
              boxShadow: '0 0 0 2px currentColor',

              '& i': {
                backgroundColor: 'currentColor',
              },
            },
            '& i': {
              backgroundColor: 'currentColor',
            },
            '& > span': {
              backgroundColor: palette.neutral![800],
            },
          },
          '& .MuiSlider-rail': {
            color: palette.neutral![400],
          },

          '&.Mui-disabled': {
            '& .MuiSlider-rail': {
              color: palette.neutral![200],
            },

            '& .MuiSlider-thumb': {
              '&:before': {
                boxShadow: 'none',
              },

              '& i': {
                backgroundColor: 'transparent',
              },

              '& > span': {
                backgroundColor: palette.neutral![200],
                color: palette.neutral![700],
              },
            },
          },
        },
      },
    },
    MuiNativeSelect: {
      styleOverrides: {
        outlined: {
          '&.MuiInput-input': {
            boxShadow: `${alpha(palette.neutral![400], 0.3)} 0 1px 3px`,
            backgroundColor: palette.background!.paper,
            borderColor: palette.neutral![400],

            '&:hover': {
              borderColor: palette.neutral![500],
            },

            '&.Mui-disabled:hover': {
              borderColor: palette.neutral![400],
            },

            '&:focus': {
              borderColor: (palette.primary as PaletteColor).main,
              boxShadow: `${(palette.primary as PaletteColor).main} 0 0px 0 1px inset`,
            },
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&.Mui-error .MuiNativeSelect-outlined': {
            borderColor: (palette.error as PaletteColor).main,
            backgroundColor: alpha((palette.error as PaletteColor).main, 0.01),
            boxShadow: `${alpha((palette.error as PaletteColor).main, 0.12)} 0 1px 3px`,
            color: (palette.error as PaletteColor).main,

            '&:hover': {
              borderColor: (palette.error as PaletteColor).main,
            },

            '&:focus': {
              borderColor: (palette.error as PaletteColor).main,
              boxShadow: 'none',
            },
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          [`&:not(.${backdropClasses.invisible})`]: {
            backgroundColor: alpha(palette.neutral![800], 0.4),
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background!.paper,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&:hover:not(.Mui-selected)': {
            color: palette.neutral![800],
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            backgroundColor: palette.neutral![50],
          },
          color: palette.neutral![700],
          '&:hover': {
            backgroundColor: palette.neutral![50],
            color: palette.neutral![900],
          },
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: palette.neutral![100],
            color: palette.neutral![900],

            '&.Mui-focusVisible': {
              backgroundColor: palette.neutral![200],
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          '& .MuiAutocomplete-option': {
            color: palette.neutral![700],

            '&.Mui-focusVisible': {
              backgroundColor: palette.neutral![50],
            },
            '&:hover': {
              backgroundColor: palette.neutral![50],
              color: palette.neutral![900],
            },
            '&[aria-selected="true"], &[aria-selected="true"]:hover': {
              backgroundColor: palette.neutral![100],
              color: palette.neutral![900],

              '&.Mui-focusVisible': {
                backgroundColor: palette.neutral![200],
              },
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            backgroundColor: palette.neutral![50],
          },
          color: palette.neutral![700],
          '&:hover': {
            backgroundColor: palette.neutral![50],
            color: palette.neutral![900],
          },
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: palette.neutral![100],
            color: palette.neutral![900],

            '&.Mui-focusVisible': {
              backgroundColor: palette.neutral![200],
            },
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: palette.neutral![900],
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          borderColor: palette.background!.paper,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: palette.background!.default,
        },
        root: {
          color: palette.neutral![800],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: alpha((palette.primary as PaletteColor).main, 0.08),
          borderColor: alpha((palette.primary as PaletteColor).main, 0.3),
          color: (palette.primary as PaletteColor).dark,

          '&.MuiChip-clickable:hover': {
            backgroundColor: alpha((palette.primary as PaletteColor).main, 0.12),
          },
        },
        colorSecondary: {
          backgroundColor: alpha((palette.secondary as PaletteColor).main, 0.08),
          borderColor: alpha((palette.secondary as PaletteColor).main, 0.3),
          color: (palette.secondary as PaletteColor).dark,
          '&.MuiChip-clickable:hover': {
            backgroundColor: alpha((palette.secondary as PaletteColor).main, 0.12),
          },
        },
        colorInfo: {
          backgroundColor: alpha((palette.info as PaletteColor).main, 0.08),
          borderColor: alpha((palette.info as PaletteColor).main, 0.3),
          color: (palette.info as PaletteColor).dark,
          '&.MuiChip-clickable:hover': {
            backgroundColor: alpha((palette.info as PaletteColor).main, 0.12),
          },
        },
        colorWarning: {
          backgroundColor: alpha((palette.warning as PaletteColor).main, 0.08),
          borderColor: alpha((palette.warning as PaletteColor).main, 0.3),
          color: (palette.warning as PaletteColor).dark,
          '&.MuiChip-clickable:hover': {
            backgroundColor: alpha((palette.warning as PaletteColor).main, 0.12),
          },
        },
        colorError: {
          backgroundColor: alpha((palette.error as PaletteColor).main, 0.08),
          borderColor: alpha((palette.error as PaletteColor).main, 0.3),
          color: (palette.error as PaletteColor).dark,
          '&.MuiChip-clickable:hover': {
            backgroundColor: alpha((palette.error as PaletteColor).main, 0.12),
          },
        },
        colorSuccess: {
          backgroundColor: alpha((palette.success as PaletteColor).main, 0.08),
          borderColor: alpha((palette.success as PaletteColor).main, 0.3),
          color: (palette.success as PaletteColor).dark,
          '&.MuiChip-clickable:hover': {
            backgroundColor: alpha((palette.success as PaletteColor).main, 0.12),
          },
        },
      },
    },
    // @ts-ignore
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: palette.divider,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backdropFilter: 'blur(6px)',
          background: alpha(palette.neutral![900], 0.9),
          padding: '8px 16px',
          fontSize: 13,
        },
        arrow: {
          color: alpha(palette.neutral![900], 0.9),
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase': {
            padding: 3,
            '&.Mui-checked': {
              color: palette.background!.paper,
            },
          },
          '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 2px 0 rgb(0 0 0 / 20%)',
          },
          '& .MuiSwitch-track': {
            backgroundColor: palette.neutral![400],
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            outline: 'solid 2px ' + (palette.primary as PaletteColor).main,
            outlineOffset: 3,
          },
        },
        outlinedSecondary: {
          borderColor: palette.neutral![400],
          backgroundColor: palette.background!.paper,
          boxShadow: `${alpha((palette.secondary as PaletteColor).main, 0.08)} 0px 1px 2px 0px`,

          '&:hover': {
            borderColor: palette.neutral![500],
            backgroundColor: darken(palette.background!.paper, 0.02),
          },
          '&.MuiChip-clickable:hover': {
            borderColor: palette.neutral![500],
            boxShadow: `${alpha((palette.secondary as PaletteColor).main, 0.08)} 0px 1px 2px 0px`,
          },
          '&:active': {
            boxShadow: 'none',
          },
        },
        outlinedPrimary: {
          boxShadow: `${alpha((palette.primary as PaletteColor).main, 0.08)} 0px 1px 2px 0px`,
          '&.MuiChip-clickable:hover': {
            boxShadow: `${alpha((palette.primary as PaletteColor).main, 0.08)} 0px 1px 2px 0px`,
          },
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '#nprogress .bar': {
          backgroundColor: (palette.primary as PaletteColor).main,
        },
        '.slick-dots li button': {
          '&:before': {
            fontSize: 10,
            color: (palette.primary as PaletteColor).main,
          },
        },
        '.slick-dots li.slick-active button': {
          '&:before': {
            color: (palette.primary as PaletteColor).main,
          },
        },
      },
    },
  };
};
