import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  TablePagination,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { ChangeEvent } from 'react';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

interface PaginationActionsProps {
  count: number;
  page: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export const PaginationActions: React.FC<PaginationActionsProps> = ({
  count,
  page,
  onPageChange,
}) => {
  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Stack
      direction="row"
      spacing={1}
    >
      {smUp ? (
        <>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={handleBackButtonClick}
            disabled={page === 0}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / 10) - 1}
          >
            Next
          </Button>
        </>
      ) : (
        <>
          <ButtonIcon
            variant="outlined"
            color="secondary"
            size="small"
            onClick={handleBackButtonClick}
            disabled={page === 0}
            startIcon={<ChevronLeftRoundedIcon />}
          />
          <ButtonIcon
            variant="outlined"
            color="secondary"
            size="small"
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / 10) - 1}
            startIcon={<ChevronRightRoundedIcon />}
          />
        </>
      )}
    </Stack>
  );
};

const Component = () => {
  const [page, setPage] = React.useState<number>(2);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          '.MuiTablePagination-toolbar': {
            justifyContent: 'space-between',
          },

          '.MuiTablePagination-spacer': {
            display: 'none',
          },
        }}
      >
        <Typography
          sx={{ pr: 1 }}
          variant="subtitle2"
          color="text.secondary"
        >
          Showing
        </Typography>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[]}
          ActionsComponent={PaginationActions}
        />
      </CardActions>
    </Card>
  );
};

export default Component;
