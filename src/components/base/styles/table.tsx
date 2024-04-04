import { alpha, styled, Table, TableHead, TableRow } from '@mui/material';

export const TableWrapper = styled(Table)(({ theme }) => ({
  'thead tr th': {
    border: 0,
  },
  'tbody tr td': {
    position: 'relative',
    border: 0,
    '& > div': {
      position: 'relative',
      zIndex: 5,
    },
    '&::before': {
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
      content: '""',
      borderTop: `1px solid ${alpha(theme.palette.common.black, 0.1)}`,
      borderBottom: `1px solid ${alpha(theme.palette.common.black, 0.1)}`,
      pointerEvents: 'none',
      zIndex: 4,
    },
    '&:first-of-type:before': {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderLeft: `1px solid ${alpha(theme.palette.common.black, 0.1)}`,
    },
    '&:last-child:before': {
      borderTopRightRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
      borderRight: `1px solid ${alpha(theme.palette.common.black, 0.1)}`,
    },
  },
  'tbody tr:hover td::before': {
    background: alpha(theme.palette.primary.main, 0.02),
    borderColor: `${alpha(theme.palette.common.black, 0.25)} !important`,
  },
}));

export const TableRowDivider = styled(TableRow)(({ theme }) => ({
  height: theme.spacing(2),
}));

export const TableHeadWrapper = styled(TableHead)(({ theme }) => ({
  '.MuiTableCell-root': {
    textTransform: 'none',
    fontWeight: 'normal',
    color: theme.palette.neutral[700],
    fontSize: theme.typography.pxToRem(16),
    padding: theme.spacing(2),
    background: 'transparent',
  },
  '.MuiTableRow-root': {
    background: 'transparent',
  },
}));
