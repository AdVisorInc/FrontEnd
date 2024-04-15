import AssignmentIcon from '@mui/icons-material/Assignment';
import DoneIcon from '@mui/icons-material/Done';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ScheduleIcon from '@mui/icons-material/Schedule';
import UpdateIcon from '@mui/icons-material/Update';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import {
  alpha,
  Box,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Chip,
  FormControlLabel,
  LinearProgress, Menu, MenuItem,
  Skeleton,
  styled,
  Typography,
} from '@mui/material';
import {ReactNode, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {RootState, useDispatch, useSelector} from "../../../../store";
import { markNotificationAsRead } from 'src/slices/notifications';

const BoxComposed = styled(Box)(() => ({
  position: 'relative',
}));

const BoxComposedContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 7,

  '.MuiTypography-root': {
    color: theme.palette.primary.contrastText,

    '& + .MuiTypography-root': {
      color: alpha(theme.palette.primary.contrastText, 0.7),
    },
  },
}));

const BoxComposedImage = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 5,
  filter: 'grayscale(80%)',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const BoxComposedBg = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 6,
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

interface TaskEvent {
  id: number;
  time: string;
  title: string;
  description: ReactNode;
  icon: ReactNode;
  iconColor: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  actions?: { label: string; onClick: () => void }[];
}

interface TaskEvent {
  id: number;
  time: string;
  title: string;
  description: ReactNode;
  icon: ReactNode;
  iconColor: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  actions?: { label: string; onClick: () => void }[];
}

interface TaskEvent {
  id: number;
  time: string;
  title: string;
  description: ReactNode;
  icon: ReactNode;
  iconColor: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  actions?: { label: string; onClick: () => void }[];
}

function Component() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const notifications = useSelector((state: RootState) => state.notification.notifications);
  const isLoading = useSelector((state: RootState) => state.notification.isLoading);
  const taskNotifications = notifications.filter((notification) => notification.notification_type === 'task_assigned');

  const tasks: TaskEvent[] = taskNotifications.map((notification) => ({
    id: notification.id,
    time: new Date(notification.created_at).toLocaleDateString(),
    title: notification.data.task_title,
    description: (
      <div>
        <Typography>You have been assigned a new task.</Typography>
        <Button size="small" variant="outlined" onClick={() => dispatch(markNotificationAsRead(notification.id))}>
          View Task
        </Button>
      </div>
    ),
    icon: <AssignmentIcon fontSize="small" />,
    iconColor: 'primary',
    actions: [
      { label: 'Mark as Done', onClick: () => console.log('Mark as Done clicked') },
      { label: 'Snooze', onClick: () => console.log('Snooze clicked') },
    ],
  }));

  return (
    <Card>
      <CardHeader
        sx={{
          p: { xs: 2, sm: 3 },
        }}
        disableTypography
        action={
          <div>
            <Button
              endIcon={<KeyboardArrowDownTwoToneIcon />}
              variant="outlined"
              size="small"
              aria-controls={open ? 'task-actions-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {t('Actions')}
            </Button>
            <Menu
              id="task-actions-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'task-actions-button',
              }}
            >
              <MenuItem onClick={handleClose}>Edit Tasks</MenuItem>
              <MenuItem onClick={handleClose}>Delete Completed</MenuItem>
              <MenuItem onClick={handleClose}>Share Tasks</MenuItem>
            </Menu>
          </div>
        }
        title={
          <>
            <Typography variant="h5">{t('Assigned Tasks')}</Typography>
          </>
        }
      />
      <BoxComposed
        sx={{
          background: 'linear-gradient(135deg, #61aff7 0%, #6173f7 100%) !important',
        }}
      >
        <BoxComposedBg
          sx={{
            opacity: 0.1,
            background: 'linear-gradient(60deg, #29323c 0%, #485563 100%) !important',
          }}
        />
        <BoxComposedImage
          sx={{
            opacity: 0.1,
            backgroundImage: 'url("/placeholders/covers/2.jpg")',
          }}
        />
        <BoxComposedContent py={{ xs: 2, sm: 3 }}>
          <Typography textAlign="center" variant="h4">
            {t('Notifications')}
          </Typography>
          <Typography textAlign="center" fontWeight={400} variant="h5">
            {t('You have')} <b>{notifications.length}</b> {t('notifications')}
          </Typography>
        </BoxComposedContent>
      </BoxComposed>
      <Box p={2}>
        {isLoading ? (
          <Box>
            <Skeleton variant="text" height={40} />
            <Skeleton variant="rectangular" height={200} />
          </Box>
        ) : tasks.length === 0 ? (
          <Typography variant="body1" align="center">
            {t('No pending tasks assigned to you.')}
          </Typography>
        ) : (
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            {tasks.map((task) => (
              <TimelineItem key={task.id}>
                <TimelineOppositeContent
                  sx={{
                    pr: 2,
                    py: 0,
                    justifyContent: 'center',
                    display: { xs: 'none', sm: 'flex' },
                    alignItems: 'center',
                    minWidth: 140,
                  }}
                  noWrap
                  variant="subtitle2"
                  fontWeight={600}
                >
                  {task.time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color={task.iconColor} variant="filled" sx={{ p: 1, boxShadow: 'none' }}>
                    {task.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ p: 2 }}>
                  <Typography variant="h6" component="span">
                    {task.title}
                  </Typography>
                  {task.description}
                  {task.actions && (
                    <Box mt={2}>
                      {task.actions.map((action, actionIndex) => (
                        <Button
                          key={actionIndex}
                          size="small"
                          variant="outlined"
                          onClick={action.onClick}
                          sx={{ mr: 1 }}
                        >
                          {action.label}
                        </Button>
                      ))}
                    </Box>
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        )}
      </Box>
    </Card>
  );
}

export default Component;
