import { Box, Card, Stack, Theme, useMediaQuery } from '@mui/material';
import { ButtonLight } from 'src/components/base/styles/button';
import { DividerLight } from 'src/components/base/styles/card';
import { TooltipLight } from 'src/components/base/styles/tooltips';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Card
      variant="outlined"
      elevation={0}
      sx={{
        border: 0,
        backgroundColor: 'neutral.900',
      }}
    >
      <Box py={6}>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <DividerLight
              flexItem
              orientation={smUp ? 'vertical' : 'horizontal'}
            />
          }
          spacing={2}
        >
          <TooltipLight
            placement="top"
            arrow
            title="Tooltip with arrow, top positioned"
          >
            <ButtonLight
              variant="outlined"
              color="secondary"
            >
              Tooltip hover
            </ButtonLight>
          </TooltipLight>
          <TooltipLight
            placement="bottom"
            title="Bottom tooltip without arrow"
          >
            <ButtonLight
              variant="outlined"
              color="secondary"
            >
              Tooltip hover
            </ButtonLight>
          </TooltipLight>
        </Stack>
      </Box>
    </Card>
  );
};

export default Component;
