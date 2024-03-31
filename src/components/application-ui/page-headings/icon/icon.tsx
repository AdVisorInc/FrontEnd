import UserIcon from '@heroicons/react/24/outline/UserIcon';
import { Box, Card, Divider, Stack, Typography, useTheme } from '@mui/material';
import AvatarGroupTooltips from 'src/components/application-ui/avatars/avatar-group-tooltips/avatar-group-tooltips';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';

const Component = () => {
  const theme = useTheme();

  return (
    <Card>
      <PageHeading
        sx={{
          '& .PageTitleContent': {
            p: 2,
          },
        }}
        iconBox={
          <AvatarState
            useShadow
            state="error"
            sx={{
              height: theme.spacing(7.5),
              width: theme.spacing(7.5),
              minWidth: theme.spacing(7.5),
              p: 2.5,
            }}
          >
            <UserIcon />
          </AvatarState>
        }
        title="Profiles"
        description="List focusing on doctor profiles, ideal for healthcare applications"
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
            <AvatarGroupTooltips />
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
