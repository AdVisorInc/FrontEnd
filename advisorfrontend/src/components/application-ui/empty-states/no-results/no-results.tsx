import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import SearchWithButton from 'src/components/application-ui/input/search/search-with-button';
import { AvatarState } from 'src/components/base/styles/avatar';

const EmptyStateNoResults = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      direction="column"
      textAlign="center"
    >
      <AvatarState
        state="warning"
        isSoft
        sx={{
          width: 84,
          height: 84,
        }}
      >
        <WarningTwoToneIcon fontSize="large" />
      </AvatarState>
      <Stack spacing={{ xs: 2, sm: 3 }}>
        <Box>
          <Typography
            color="text.primary"
            variant="h2"
            fontWeight={700}
            gutterBottom
            sx={{
              px: { xs: 0, sm: 2, md: 3 },
            }}
          >
            We moved the content to a different page
          </Typography>
          <Typography
            color="text.secondary"
            variant="h5"
            fontWeight={500}
          >
            The search below should help!
          </Typography>
        </Box>
        <SearchWithButton />
        <Divider>
          <Divider
            sx={{
              borderWidth: 4,
              width: 60,
              borderRadius: 22,
              borderColor: 'primary.main',
            }}
          />
        </Divider>
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<WestRoundedIcon />}
          >
            Go to homepage
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default EmptyStateNoResults;
