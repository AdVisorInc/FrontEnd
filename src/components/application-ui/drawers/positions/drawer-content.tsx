import { alpha, Box, CardContent, Container, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Box
      height="100%"
      minWidth={340}
      display="flex"
      flexDirection="column"
    >
      <CardContent sx={{ px: 0 }}>
        <Container
          maxWidth="md"
          sx={{ flex: 1 }}
        >
          <PlaceholderBox
            height={32}
            flex={1}
          />
        </Container>
      </CardContent>

      <Divider />
      <Container
        maxWidth="md"
        sx={{ flex: 1 }}
      >
        <CardContent sx={{ height: '100%', px: 0 }}>
          <PlaceholderBox
            height={64}
            flex={1}
          />
        </CardContent>
      </Container>
      <Divider />
      <CardContent
        sx={{
          px: 0,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Container
          maxWidth="md"
          sx={{ flex: 1 }}
        >
          <PlaceholderBox
            height={16}
            flex={1}
          />
        </Container>
      </CardContent>
    </Box>
  );
};

export default Component;
