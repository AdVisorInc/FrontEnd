import { Box } from '@mui/material';
import { Logo } from 'src/components/base/logo';

function AppInit() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box py={5}>
        <Logo />
      </Box>
    </Box>
  );
}

export default AppInit;
