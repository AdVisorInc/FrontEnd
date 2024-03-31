import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { Avatar, Box, Link, Typography } from '@mui/material';

const EmptyStateTitleDescriptionAction = () => {
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
          width: '80%',
          height: 212,
        }}
        src="/placeholders/illustrations/i3.svg"
      />
      <Link
        href=""
        onClick={(e) => e.preventDefault()}
        underline="hover"
        color="primary"
        fontWeight={500}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        View updates
        <ArrowForwardTwoToneIcon
          sx={{ ml: 0.5 }}
          fontSize="small"
        />
      </Link>
    </Box>
  );
};

export default EmptyStateTitleDescriptionAction;
