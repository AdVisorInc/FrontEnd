import { backdropClasses, tableCellClasses } from '@mui/material';
import { common } from '@mui/material/colors';
import { alpha, darken, lighten } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';
import type { PaletteColor, PaletteOptions } from '@mui/material/styles/createPalette';
import { neutral } from 'src/theme/colors';

interface ComponentsConfig {
  palette: PaletteOptions;
}

export const createComponents = ({ palette }: ComponentsConfig): Components => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none !important',
          backgroundColor: lighten(palette.neutral![900], 0.035),
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha(lighten(palette.neutral![900], 0.035), 0.88),
          backdropFilter: 'blur(18px)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha(lighten(palette.neutral![900], 0.035), 0.88),
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
            filter: `drop-shadow(5px -5px 5px rgba(0,0,0,0.16))`,
          },
        },
      },
    },
    MuiLineElement: {
      styleOverrides: {
        root: {
          filter: `drop-shadow(2px 5px 5px rgba(0,0,0,0.20))`,
        },
      },
    },
    //@ts-ignore
    MuiChartsAxis: {
      styleOverrides: {
        root: {
          '& .MuiChartsAxis-tickLabel': {
            fill: palette.neutral![600],
            fontFamily: 'Inter',
          },
          '& .MuiChartsAxis-line': {
            stroke: palette.neutral![800],
            strokeWidth: 2,
          },
          '& .MuiChartsAxis-tick': {
            stroke: palette.neutral![600],
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
            boxShadow: `0px 4px 3px ${alpha(
              darken(palette.neutral![900], 0.5),
              0.1
            )}, 0px 2px 5px ${alpha(darken(palette.neutral![900], 0.1), 0.1)}`,
          },
        },
        table: {
          borderRadius: 4,
          boxShadow: `0px 4px 3px ${alpha(
            darken(palette.neutral![900], 0.5),
            0.1
          )}, 0px 2px 5px ${alpha(darken(palette.neutral![900], 0.1), 0.1)}`,

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
            backgroundColor: alpha(palette.neutral![100], 0.04),
            color: palette.neutral![25],
            borderBottomColor: palette.divider,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.MuiTableRow-hover:hover': {
            backgroundColor: alpha(palette.neutral![900], 0.34),
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(palette.neutral![800], 0.16),
          boxShadow: `${alpha(palette.neutral![900], 0.64)} 0 1px 3px`,
          borderColor: palette.neutral![800],

          '&:hover': {
            backgroundColor: palette.background!.paper,
            borderColor: palette.neutral![700],
          },
          '&.Mui-focused': {
            backgroundColor: palette.background!.paper,
            borderColor: (palette.primary as PaletteColor).main,
            boxShadow: `${(palette.primary as PaletteColor).main} 0 0px 0 1px inset`,
          },
          '&.Mui-disabled': {
            backgroundColor: palette.neutral![900],
            borderColor: palette.neutral![800],
            boxShadow: `${alpha(palette.neutral![900], 0.3)} 0 1px 3px`,
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
          boxShadow: `${alpha(palette.neutral![900], 0.64)} 0 1px 3px`,
          backgroundColor: palette.background!.paper,

          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: palette.neutral![700],
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
            backgroundColor: palette.neutral![900],
            boxShadow: `${alpha(palette.neutral![900], 0.3)} 0 1px 3px, ${alpha(
              palette.neutral![800],
              0.3
            )} 0 1px 3px inset`,

            '.MuiOutlinedInput-notchedOutline': {
              borderColor: palette.neutral![800],
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
          borderColor: palette.neutral![800],
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          ':focus': {
            backgroundColor: lighten(palette.neutral![900], 0.1),
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        colorSecondary: {
          color: palette.neutral![600],
        },
        root: {
          '& .MuiSlider-markLabel': {
            color: palette.neutral![200],
          },

          '& .MuiSlider-markLabelActive': {
            color: 'currentColor',
          },

          '& .MuiSlider-thumb': {
            backgroundColor: palette.background!.paper,
            border: '1px solid currentColor',

            '&:before': {
              boxShadow: `0px 3px 3px ${alpha(common.black, 0.18)}, 0px 2px 4px ${alpha(
                common.black,
                0.18
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
              backgroundColor: lighten(palette.neutral![900], 0.15),
            },
          },
          '& .MuiSlider-rail': {
            color: alpha(palette.neutral![600], 0.3),
          },

          '&.Mui-disabled': {
            color: palette.neutral![800],

            '& .MuiSlider-rail': {
              color: alpha(palette.neutral![800], 0.5),
            },

            '& .MuiSlider-thumb': {
              '&:before': {
                boxShadow: 'none',
              },

              '& i': {
                backgroundColor: 'transparent',
              },

              '& > span': {
                backgroundColor: darken(palette.neutral![800], 0.4),
                color: palette.neutral![600],
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
            boxShadow: `${alpha(palette.neutral![900], 0.64)} 0 1px 3px`,
            backgroundColor: palette.background!.paper,
            borderColor: palette.neutral![800],

            '&:hover': {
              borderColor: palette.neutral![700],
            },

            '&.Mui-disabled:hover': {
              borderColor: palette.neutral![800],
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
            backgroundColor: alpha(palette.neutral![900], 0.4),
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: darken(palette.background!.paper, 0.12),
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&:hover:not(.Mui-selected)': {
            color: palette.neutral![25],
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            backgroundColor: alpha(palette.neutral![800], 0.25),
          },
          color: palette.neutral![100],
          '&:hover': {
            backgroundColor: alpha(palette.neutral![800], 0.25),
            color: palette.neutral![100],
          },
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: alpha(palette.neutral![800], 0.25),
            color: palette.neutral![100],

            '&.Mui-focusVisible': {
              backgroundColor: alpha(palette.neutral![800], 0.25),
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          '& .MuiAutocomplete-option': {
            color: palette.neutral![500],

            '&.Mui-focusVisible': {
              backgroundColor: alpha(palette.neutral![800], 0.4),
            },
            '&:hover': {
              backgroundColor: alpha(palette.neutral![800], 0.4),
              color: palette.neutral![25],
            },
            '&[aria-selected="true"], &[aria-selected="true"]:hover': {
              backgroundColor: alpha(palette.neutral![800], 0.4),
              color: palette.neutral![50],

              '&.Mui-focusVisible': {
                backgroundColor: alpha(palette.neutral![800], 0.4),
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
            backgroundColor: alpha(palette.neutral![800], 0.2),
          },
          color: palette.neutral![500],
          '&:hover': {
            backgroundColor: alpha(palette.neutral![800], 0.2),
            color: palette.neutral![25],
          },
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: alpha(palette.neutral![800], 0.2),
            color: palette.neutral![25],

            '&.Mui-focusVisible': {
              backgroundColor: alpha(palette.neutral![800], 0.2),
            },
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: lighten(palette.neutral![900], 0.035),
          color: palette.neutral![100],
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
          backgroundColor: 'transparent',
        },
        root: {
          color: palette.neutral![300],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-outlined.MuiChip-colorDefault': {
            backgroundColor: alpha(common.white, 0.06),
            borderColor: alpha(common.white, 0.18),
          },
        },
        outlinedSecondary: {
          color: neutral[400],
        },
        colorPrimary: {
          backgroundColor: alpha((palette.primary as PaletteColor).main, 0.08),
          borderColor: alpha((palette.primary as PaletteColor).main, 0.3),
          color: (palette.primary as PaletteColor).light,

          '&.MuiChip-clickable:hover': {
            backgroundColor: alpha((palette.primary as PaletteColor).main, 0.12),
          },
        },
        colorSecondary: {
          '&.MuiChip-clickable:hover': {
            backgroundColor: alpha((palette.secondary as PaletteColor).main, 0.12),
          },
        },
        colorInfo: {
          backgroundColor: alpha((palette.info as PaletteColor).main, 0.08),
          borderColor: alpha((palette.info as PaletteColor).main, 0.3),
          color: (palette.info as PaletteColor).light,
          '&.MuiChip-clickable:hover': {
            backgroundColor: alpha((palette.info as PaletteColor).main, 0.12),
          },
        },
        colorWarning: {
          backgroundColor: alpha((palette.warning as PaletteColor).main, 0.08),
          borderColor: alpha((palette.warning as PaletteColor).main, 0.3),
          color: (palette.warning as PaletteColor).light,
          '&.MuiChip-clickable:hover': {
            backgroundColor: alpha((palette.warning as PaletteColor).main, 0.12),
          },
        },
        colorError: {
          backgroundColor: alpha((palette.error as PaletteColor).main, 0.08),
          borderColor: alpha((palette.error as PaletteColor).main, 0.3),
          color: (palette.error as PaletteColor).light,
          '&.MuiChip-clickable:hover': {
            backgroundColor: alpha((palette.error as PaletteColor).main, 0.12),
          },
        },
        colorSuccess: {
          backgroundColor: alpha((palette.success as PaletteColor).main, 0.08),
          borderColor: alpha((palette.success as PaletteColor).main, 0.3),
          color: (palette.success as PaletteColor).light,
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
          background: alpha(palette.neutral![100], 0.9),
          color: palette.neutral![900],
          padding: '8px 16px',
          fontSize: 13,
        },
        arrow: {
          color: alpha(palette.neutral![100], 0.9),
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase': {
            padding: 3,
            '&.Mui-checked': {
              color: palette.background!.default,
            },
          },
          '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 2px 0 rgb(0 0 0 / 20%)',
          },
          '& .MuiSwitch-track': {
            backgroundColor: palette.neutral![800],
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorSecondary: {
          backgroundColor: darken(palette.neutral![600], 0.24),
          color: common.white,
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
          borderColor: palette.neutral![800],
          color: palette.neutral![300],
          backgroundColor: lighten(palette.background!.paper, 0.025),
          boxShadow: `${alpha((palette.secondary as PaletteColor).main, 0.08)} 0px 1px 2px 0px`,

          '&:hover': {
            borderColor: alpha(palette.neutral![700], 0.7),
            color: palette.neutral![100],
            backgroundColor: lighten(palette.background!.paper, 0.06),
          },

          '&.MuiChip-clickable:hover': {
            borderColor: palette.neutral![500],
            boxShadow: `${alpha((palette.secondary as PaletteColor).main, 0.12)} 0px 1px 2px 0px`,
          },
          '&:active': {
            boxShadow: 'none',
          },
        },
        textSecondary: {
          color: palette.neutral![300],
          '&:hover': {
            color: palette.neutral![100],
          },
        },
        outlinedPrimary: {
          boxShadow: `${alpha((palette.primary as PaletteColor).main, 0.12)} 0px 1px 2px 0px`,
          '&.MuiChip-clickable:hover': {
            boxShadow: `${alpha((palette.primary as PaletteColor).main, 0.12)} 0px 1px 2px 0px`,
          },
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorSecondary: {
          color: palette.neutral![300],
          '&:hover': {
            color: palette.neutral![100],
          },
          '&.Mui-disabled': {
            color: palette.neutral![700],
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
