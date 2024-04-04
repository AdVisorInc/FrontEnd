import ChartPieIcon from '@heroicons/react/24/outline/ChartPieIcon';
import { alpha, Box, Card, Divider, Stack, Typography, useTheme } from '@mui/material';
import BreadcrumbRounded from 'src/components/application-ui/breadcrumbs/rounded/rounded';
import ComposedWithSelectMedium from 'src/components/application-ui/input/composed/composed-with-select-medium';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';

const Component = () => {
  const theme = useTheme();

  const backgroundColor =
    theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[500], 0.04) : 'neutral.25';

  return (
    <Card>
      <Box
        p={2}
        display="flex"
        alignItems="flex-start"
      >
        <BreadcrumbRounded />
      </Box>
      <Divider />
      <PageHeading
        sx={{
          '& .PageTitleContent': {
            p: 2,
          },
        }}
        iconBox={
          <AvatarState
            isSoft
            state="error"
            sx={{
              height: theme.spacing(7),
              width: theme.spacing(7),
              minWidth: theme.spacing(7),
              p: 1.5,
            }}
            variant="rounded"
          >
            <ChartPieIcon />
          </AvatarState>
        }
        title="Dashboards"
        background={backgroundColor}
        description="Tailor your dashboard experience by focusing on the metrics that matter most"
        actions={
          <Stack
            px={2}
            pb={2}
            pt={{ xs: 0, md: 2 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            whiteSpace="nowrap"
            alignItems="center"
            width={{ xs: '100%', sm: 'auto' }}
          >
            <ComposedWithSelectMedium />
          </Stack>
        }
      />
      <Divider />
      <Box
        px={2}
        py={{ xs: 2, sm: 3, md: 5 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography
            variant="h3"
            color="text.secondary"
            align="center"
            fontWeight={500}
          >
            Page content
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default Component;
