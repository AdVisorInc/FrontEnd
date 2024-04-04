import { Avatar, Box, Typography } from '@mui/material';

const EmptyStateTitleDescription = () => {
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
      <Typography
        sx={{ py: 2 }}
        color="text.primary"
        variant="subtitle1"
      >
        We apologize for any inconvenience this may have caused. We hope to be back online soon.
      </Typography>
      <Avatar
        sx={{
          width: '100%',
          height: 274,
        }}
        src="/placeholders/illustrations/i2.svg"
      />
    </Box>
  );
};

export default EmptyStateTitleDescription;
