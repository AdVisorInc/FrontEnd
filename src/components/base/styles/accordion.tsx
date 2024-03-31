import { Accordion, alpha, styled } from '@mui/material';

export const AccordionAlternate = styled(Accordion)(({ theme }) => ({
  '.MuiAccordionSummary-root': {
    flexDirection: 'row-reverse',
    paddingLeft: theme.spacing(1),
    borderRadius: 'inherit',

    '&:hover': {
      backgroundColor:
        theme.palette.mode === 'dark'
          ? alpha(theme.palette.neutral[25], 0.02)
          : theme.palette.neutral[25],
    },

    '.MuiAccordionSummary-expandIconWrapper': {
      marginRight: theme.spacing(1),
    },
  },

  '.MuiAccordionDetails-root': {
    paddingLeft: theme.spacing(4.5),
  },

  '&.Mui-expanded': {
    '.MuiAccordionSummary-root': {
      backgroundColor: 'inherit',
    },
  },

  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
}));

export const AccordionPrimary = styled(Accordion)(({ theme }) => ({
  '.MuiAccordionSummary-expandIconWrapper': {
    borderRadius: '50%',
    border:
      theme.palette.mode === 'dark'
        ? `1px solid ${theme.palette.neutral[300]}`
        : `1px solid ${theme.palette.neutral[800]}`,
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&.Mui-expanded': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },

  '.MuiAccordionSummary-root:hover': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.neutral[25], 0.02)
        : theme.palette.neutral[25],
  },

  '.MuiAccordionSummary-root, .MuiAccordionDetails-root': {
    borderLeft: '3px solid transparent',
  },

  '&.Mui-expanded': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.neutral[25], 0.02)
        : theme.palette.neutral[25],

    '.MuiAccordionSummary-content .MuiTypography-root': {
      color: theme.palette.primary.main,
    },

    '.MuiAccordionSummary-root, .MuiAccordionDetails-root': {
      borderLeftColor: theme.palette.primary.main,
    },
  },
}));

export const AccordionPlus = styled(Accordion)(({ theme }) => ({
  '.MuiAccordionSummary-expandIconWrapper': {
    borderRadius: '50%',
    border:
      theme.palette.mode === 'dark'
        ? `1px solid ${theme.palette.neutral[100]}`
        : `1px solid ${theme.palette.neutral[900]}`,
    width: 28,
    height: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.neutral[100] : theme.palette.neutral[900],
    color: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
  },

  '.MuiAccordionSummary-content': {
    padding: theme.spacing(1, 0),
  },

  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',

  '.MuiAccordionSummary-root': {
    flexDirection: 'row-reverse',
    padding: theme.spacing(0),
    border: 'none',

    '.MuiAccordionSummary-expandIconWrapper': {
      marginRight: theme.spacing(1),
    },
  },
}));

export const AccordionMinimal = styled(Accordion)(({ theme }) => ({
  borderRadius: '0px !important',
  boxShadow: 'none',

  '.MuiAccordionSummary-root': {
    flexDirection: 'row',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(2),

    '&:hover': {
      backgroundColor:
        theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
    },
  },

  '.MuiAccordionDetails-root': {
    padding: 0,
  },

  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
}));
