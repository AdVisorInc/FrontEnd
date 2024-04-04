import { Avatar, Box, Typography } from '@mui/material';

const EmptyStateImageTitle = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        color="text.primary"
        variant="h3"
        fontWeight={600}
      >
        Hang tight, we're currently down for maintenance
      </Typography>
      <Avatar
        sx={{
          width: '100%',
          height: 274,
        }}
        src="/placeholders/illustrations/i1.svg"
      />
    </Box>
  );
};

export default EmptyStateImageTitle;
