// AlertCompletedAlternate.tsx
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import DoneIcon from '@mui/icons-material/Done';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';
import {useRouter} from "../../../../hooks/use-router";
import {routes} from "../../../../router/routes";

interface AlertCompletedAlternateOrgProps {
  organizationId: number;
}

const AlertCompletedAlternateOrg: React.FC<AlertCompletedAlternateOrgProps> = ({ organizationId }) => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push(routes.blueprints['generic-admin-dashboard'].dashboards.organization.replace('[organizationId]', String(organizationId)));
  };
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <AvatarState
        state="success"
        isSoft
        sx={{
          width: 90,
          height: 90,
        }}
      >
        <DoneIcon fontSize="large" />
      </AvatarState>
      <Box textAlign="center">
        <Typography
          color="success.main"
          variant="h4"
          gutterBottom
        >
          Organization Successfully Created!
        </Typography>
        <Typography
          color="text.secondary"
          variant="subtitle1"
        >
          Your organization is ready to use. Begin exploring features and settings.
        </Typography>
      </Box>
      <Box width="100%">
        <Divider
          flexItem
          sx={{ width: '60%', mx: 'auto' }}
        />
      </Box>
      <Button
        variant="outlined"
        endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        color="secondary"
        onClick={handleGetStarted}
      >
        Go to Organization
      </Button>
    </Stack>
  );
};

export default AlertCompletedAlternateOrg;
