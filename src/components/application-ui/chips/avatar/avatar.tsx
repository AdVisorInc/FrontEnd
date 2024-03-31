import { Avatar, Chip, Divider, Stack } from '@mui/material';

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
          avatar={<Avatar>AB</Avatar>}
          color="primary"
          label="Chip"
        />
        <Chip
          avatar={<Avatar>C</Avatar>}
          color="secondary"
          label="Chip"
        />
        <Chip
          avatar={<Avatar>D</Avatar>}
          color="info"
          label="Chip"
        />
        <Chip
          avatar={<Avatar>E</Avatar>}
          color="warning"
          label="Chip"
        />
        <Chip
          avatar={<Avatar>F</Avatar>}
          color="error"
          label="Chip"
        />
        <Chip
          avatar={<Avatar>G</Avatar>}
          color="success"
          label="Chip"
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
          avatar={
            <Avatar
              src="/avatars/1.png"
              alt="..."
            />
          }
          color="primary"
          label="Chip"
        />
        <Chip
          avatar={
            <Avatar
              src="/avatars/2.png"
              alt="..."
            />
          }
          color="secondary"
          label="Chip"
        />
        <Chip
          avatar={
            <Avatar
              src="/avatars/3.png"
              alt="..."
            />
          }
          color="info"
          label="Chip"
        />
        <Chip
          avatar={
            <Avatar
              src="/avatars/4.png"
              alt="..."
            />
          }
          color="warning"
          label="Chip"
        />
        <Chip
          avatar={
            <Avatar
              src="/avatars/5.png"
              alt="..."
            />
          }
          color="error"
          label="Chip"
        />
      </Stack>
    </>
  );
};

export default Component;
