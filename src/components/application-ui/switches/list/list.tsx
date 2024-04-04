import { InfoRounded } from '@mui/icons-material';
import { Box, Button, Stack, Switch, Tooltip, Typography } from '@mui/material';

const Component = () => {
  return (
    <Stack spacing={{ xs: 2, sm: 3 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <Switch
            defaultChecked
            id="switch-spatial-audio"
          />
          <Box
            pl={1}
            overflow="hidden"
          >
            <Stack
              spacing={0.5}
              direction="row"
              alignItems="center"
            >
              <Typography
                component="label"
                htmlFor="switch-spatial-audio"
                variant="h5"
                sx={{ whiteSpace: 'nowrap' }}
              >
                Spatial audio
              </Typography>
              <Tooltip
                title="Apply a smooth effect to your appearance."
                arrow
                placement="top"
              >
                <InfoRounded
                  fontSize="small"
                  sx={{
                    color: 'neutral.400',
                    '&:hover': {
                      color: 'neutral.600',
                    },
                  }}
                />
              </Tooltip>
            </Stack>

            <Typography
              variant="body1"
              color="text.secondary"
              noWrap
            >
              More immersive sound in meetings.
            </Typography>
          </Box>
        </Box>
        <Button
          color="secondary"
          variant="outlined"
        >
          View details
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <Switch id="switch-music-mode" />
          <Box
            pl={1}
            overflow="hidden"
          >
            <Typography
              component="label"
              htmlFor="switch-music-mode"
              variant="h5"
              sx={{ whiteSpace: 'nowrap' }}
            >
              Music mode
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              noWrap
            >
              Deliver high fidelity sound in meetings.
            </Typography>
          </Box>
        </Box>
        <Button
          color="secondary"
          variant="outlined"
        >
          View details
        </Button>
      </Box>
    </Stack>
  );
};

export default Component;
