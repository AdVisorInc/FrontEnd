import { alpha, Card, CardActions, CardContent, Divider, TablePagination } from '@mui/material';
import React from 'react';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card>
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          justifyContent: 'center',
          '.MuiTablePagination-select': {
            py: 0.55,
          },
        }}
      >
        <TablePagination
          sx={{
            width: '100%',
          }}
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          slotProps={{
            select: {
              variant: 'outlined',
              size: 'small',
              sx: {
                p: 0,
              },
            },
          }}
        />
      </CardActions>
    </Card>
  );
};

export default Component;
