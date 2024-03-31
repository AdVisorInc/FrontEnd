import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import { Chip, Divider, Stack } from '@mui/material';

const handleClick = () => {
  console.info('You clicked the Chip.');
};

const Component = () => {
  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Chip
          size="small"
          color="primary"
          label="Chip"
          onClick={handleClick}
        />
        <Chip
          size="small"
          color="secondary"
          label="Chip"
          onClick={handleClick}
        />
        <Chip
          size="small"
          color="info"
          label="Chip"
          onClick={handleClick}
        />
        <Chip
          size="small"
          color="warning"
          label="Chip"
          onClick={handleClick}
        />
        <Chip
          size="small"
          color="error"
          label="Chip"
          deleteIcon={<RemoveCircleTwoToneIcon />}
          onClick={handleClick}
          onDelete={handleClick}
        />
        <Chip
          size="small"
          color="success"
          label="Chip"
          deleteIcon={<DeleteTwoToneIcon />}
          onClick={handleClick}
          onDelete={handleClick}
        />
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Chip
          color="primary"
          label="Chip"
          onDelete={handleClick}
        />
        <Chip
          color="secondary"
          label="Chip"
          onDelete={handleClick}
        />
        <Chip
          color="info"
          label="Chip"
          onDelete={handleClick}
        />
        <Chip
          color="warning"
          label="Chip"
          onClick={handleClick}
          onDelete={handleClick}
        />
        <Chip
          color="error"
          label="Chip"
          deleteIcon={<RemoveCircleTwoToneIcon />}
          onClick={handleClick}
          onDelete={handleClick}
        />
        <Chip
          color="success"
          label="Chip"
          deleteIcon={<DeleteTwoToneIcon />}
          onClick={handleClick}
          onDelete={handleClick}
        />
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Chip
          label="Chip"
          variant="outlined"
          onDelete={handleClick}
        />
        <Chip
          color="primary"
          label="Chip"
          variant="outlined"
          onDelete={handleClick}
        />
        <Chip
          color="secondary"
          label="Chip"
          variant="outlined"
          onDelete={handleClick}
        />
        <Chip
          color="info"
          label="Chip"
          variant="outlined"
          onDelete={handleClick}
        />
        <Chip
          color="warning"
          label="Chip"
          variant="outlined"
          onClick={handleClick}
          onDelete={handleClick}
        />
        <Chip
          color="error"
          label="Chip"
          variant="outlined"
          deleteIcon={<RemoveCircleTwoToneIcon />}
          onClick={handleClick}
          onDelete={handleClick}
        />
        <Chip
          color="success"
          label="Chip"
          variant="outlined"
          deleteIcon={<DeleteTwoToneIcon />}
          onClick={handleClick}
          onDelete={handleClick}
        />
      </Stack>
    </>
  );
};

export default Component;
