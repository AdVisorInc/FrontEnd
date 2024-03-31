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
  LinearProgress,
  styled,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

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
  time: string;
  title: string;
  description: ReactNode;
  icon: ReactNode;
  iconColor: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

function Component() {
  const { t } = useTranslation();

  const tasks: TaskEvent[] = [
    {
      time: 'Today',
      title: t('Complete Design Mockups'),
      description: (
        <div>
          <Typography>Finalize the UI/UX designs for the new landing page.</Typography>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{ my: 1.5 }}
          />
          <Button
            size="small"
            variant="outlined"
          >
            View Designs
          </Button>
        </div>
      ),
      icon: <AssignmentIcon fontSize="small" />,
      iconColor: 'primary',
    },
    {
      time: 'Tomorrow',
      title: t('Client Meeting'),
      description: (
        <div>
          <Typography>Discuss project milestones and deliverables.</Typography>
          <FormControlLabel
            control={<Checkbox checked={true} />}
            label="Prepare Slides"
          />
          <Chip
            label="Online Meeting"
            color="info"
            size="small"
          />
        </div>
      ),
      icon: <UpdateIcon fontSize="small" />,
      iconColor: 'info',
    },
    {
      time: 'Friday',
      title: t('Code Review'),
      description: (
        <div>
          <Typography gutterBottom>Review the recent pull requests in the repository.</Typography>
          <Button
            size="small"
            variant="contained"
            color="success"
          >
            Start Review
          </Button>
        </div>
      ),
      icon: <DoneIcon fontSize="small" />,
      iconColor: 'success',
    },
    {
      time: 'Next Week',
      title: t('Plan Sprint'),
      description: (
        <div>
          <Typography gutterBottom>Organize tasks for the next development sprint.</Typography>
          <Chip
            label="Planning Session"
            color="secondary"
            variant="filled"
            size="small"
          />
        </div>
      ),
      icon: <ScheduleIcon fontSize="small" />,
      iconColor: 'secondary',
    },
    {
      time: 'No Due Date',
      title: t('Update Documentation'),
      description: (
        <div>
          <Typography>Ensure all project documentation is up to date.</Typography>
          <FormControlLabel
            control={<Checkbox />}
            label="Update Wiki"
          />
        </div>
      ),
      icon: <PriorityHighIcon fontSize="small" />,
      iconColor: 'warning',
    },
  ];

  return (
    <Card>
      <CardHeader
        sx={{
          p: { xs: 2, sm: 3 },
        }}
        disableTypography
        action={
          <Button
            endIcon={<KeyboardArrowDownTwoToneIcon />}
            variant="outlined"
            size="small"
          >
            {t('Actions')}
          </Button>
        }
        title={
          <>
            <Typography variant="h5">{t('Remaining tasks')}</Typography>
          </>
        }
      />
      <BoxComposed
        sx={{
          background: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%) !important',
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
          <Typography
            textAlign="center"
            variant="h4"
          >
            {t('Notifications')}
          </Typography>
          <Typography
            textAlign="center"
            fontWeight={400}
            variant="h5"
          >
            {t('You have')} <b>574</b> {t('notifications')}
          </Typography>
        </BoxComposedContent>
      </BoxComposed>
      <Box p={2}>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {tasks.map((task, index) => (
            <TimelineItem key={index}>
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
                <TimelineDot
                  color={task.iconColor}
                  variant="filled"
                  sx={{ p: 1, boxShadow: 'none' }}
                >
                  {task.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                >
                  {task.title}
                </Typography>
                {task.description}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Card>
  );
}

export default Component;
