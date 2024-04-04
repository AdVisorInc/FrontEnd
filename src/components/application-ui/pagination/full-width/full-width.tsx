import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { Button, Card, CardActions, CardContent, Divider, Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  const [page, setPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Card>
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          startIcon={<ArrowBackTwoToneIcon />}
        >
          Previous
        </Button>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexGrow={1}
        >
          <Pagination
            shape="rounded"
            count={totalPages}
            color="primary"
            page={page}
            onChange={handlePageChange}
            hideNextButton
            hidePrevButton
          />
        </Stack>

        <Button
          variant="outlined"
          color="secondary"
          size="small"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          endIcon={<ArrowForwardTwoToneIcon />}
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
};

export default Component;
