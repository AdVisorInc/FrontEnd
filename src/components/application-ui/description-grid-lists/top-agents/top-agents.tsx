import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { LinearProgressAlternate } from 'src/components/base/styles/progress-bar';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

interface AgentData {
  name: string;
  avatarSrc: string;
  team: string;
  statusColor?: 'error' | 'success' | 'warning' | 'info';
  statusText: string;
  statusTime: string;
  capacity: number;
  maxCapacity: number;
  productivity: number;
}

const agents: AgentData[] = [
  {
    name: 'Maren Lipshutz',
    avatarSrc: '/avatars/5.png',
    team: 'eCommerce Senior Team',
    statusColor: 'error',
    statusText: 'offline',
    statusTime: '3:53',
    capacity: 3,
    maxCapacity: 10,
    productivity: 83,
  },
  {
    name: 'Zain Vetrovs',
    avatarSrc: '/avatars/4.png',
    team: 'Technical Support Team',
    statusColor: 'success',
    statusText: 'online',
    statusTime: '0:58',
    capacity: 7,
    maxCapacity: 10,
    productivity: 67,
  },
];

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

function TopAgents1() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid xs={12}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4">{t('Top Agents')}</Typography>
          <Button
            color="primary"
            variant="outlined"
            size="small"
          >
            {t('View all')}
          </Button>
        </Box>
      </Grid>

      {agents.map((agent, index) => (
        <Grid
          key={index}
          xs={12}
          md={6}
        >
          <Card>
            <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
              <AvatarWrapper
                sx={{ mb: 2 }}
                variant="rounded"
                src={agent.avatarSrc}
              />
              <Typography variant="h4">{agent.name}</Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                {t(agent.team)}
              </Typography>

              <Typography
                variant="body2"
                sx={{ pt: 0.5, display: 'flex', alignItems: 'center' }}
              >
                <InlineBadge>
                  <PulseBadge
                    variant="dot"
                    color={agent.statusColor}
                    sx={{
                      mr: 1,
                    }}
                  />
                  {t(agent.statusText)}
                </InlineBadge>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  component="span"
                >
                  &nbsp; - {agent.statusTime}
                </Typography>
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
              <Grid
                spacing={{ xs: 2, sm: 3 }}
                container
              >
                <Grid
                  xs={12}
                  md={6}
                >
                  <Typography
                    variant="caption"
                    sx={{ pb: 1 }}
                    color="text.secondary"
                    fontWeight={600}
                    component="div"
                  >
                    {t('Capacity')}
                  </Typography>
                  <Box>
                    <Typography
                      color="text.primary"
                      variant="h2"
                      sx={{ pr: 0.5, display: 'inline-flex' }}
                    >
                      {agent.capacity}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="h4"
                      sx={{ pb: 1, pr: 2, display: 'inline-flex' }}
                    >
                      /{agent.maxCapacity}
                    </Typography>
                    <LinearProgressAlternate
                      value={(agent.capacity / agent.maxCapacity) * 100}
                      color="primary"
                      variant="determinate"
                    />
                  </Box>
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                >
                  <Typography
                    variant="caption"
                    sx={{ pb: 1 }}
                    color="text.secondary"
                    fontWeight={600}
                    component="div"
                  >
                    {t('Productivity')}
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <AvatarState
                      isSoft
                      sx={{
                        width: 64,
                        height: 64,
                      }}
                      state="primary"
                    >
                      <WorkTwoToneIcon />
                    </AvatarState>
                    <Typography
                      variant="h3"
                      sx={{ pl: 1 }}
                      component="div"
                    >
                      {agent.productivity}%
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default TopAgents1;
