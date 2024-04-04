import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  List,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ListItemButtonWrapper } from 'src/components/base/styles/list-item-button';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';

type Task = {
  tooltipTitle: string;
  initials: string;
  avatarStyle: any;
  taskTitle: string;
  progress: number;
  progressStyle: any;
  progressStatus: string;
  progressColor: string;
  dueDate: string;
};

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const tasks: Task[] = [
    {
      tooltipTitle: t('Task assigned to Gary Albright'),
      initials: 'GA',
      avatarStyle: {
        background: theme.palette.warning.main,
        color: theme.palette.warning.contrastText,
      },
      taskTitle: t('Presentation UI'),
      progress: 73,
      progressStyle: LinearProgressSlim,
      progressStatus: 'Completed',
      progressColor: 'success.main',
      dueDate: '15th Sep',
    },
    {
      tooltipTitle: t('Task assigned to Therry Hefaistos'),
      initials: 'TH',
      avatarStyle: {
        background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
        color: theme.palette.warning.contrastText,
      },
      taskTitle: t('Review Comps.'),
      progress: 29,
      progressStyle: LinearProgressSlim,
      progressStatus: 'In progress',
      progressColor: 'info.main',
      dueDate: '12th Aug',
    },
    {
      tooltipTitle: t('Task assigned to Benjamin Wallace'),
      initials: 'JD',
      avatarStyle: {
        background: theme.palette.success.main,
        color: theme.palette.success.contrastText,
      },
      taskTitle: t('Finalize Backend APIs'),
      progress: 42,
      progressStyle: LinearProgressSlim,
      progressStatus: 'Ongoing',
      progressColor: 'text.secondary',
      dueDate: '20th Oct',
    },
    {
      tooltipTitle: t('Task assigned to Jane Smith'),
      initials: 'JS',
      avatarStyle: {
        background: 'linear-gradient(60deg, #ffa726 0%, #fb8c00 100%)',
        color: theme.palette.error.contrastText,
      },
      taskTitle: t('Design Landing Page'),
      progress: 85,
      progressStyle: LinearProgressSlim,
      progressStatus: 'Near completion',
      progressColor: 'text.primary',
      dueDate: '25th Oct',
    },
  ];

  return (
    <Card
      sx={{
        overflow: 'visible',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Box>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            {t('Status')}
          </Typography>
          <Typography variant="h5">{t('Team Performance')}</Typography>
        </Box>
        <IconButton
          size="small"
          color="primary"
        >
          <MoreVertTwoToneIcon fontSize="small" />
        </IconButton>
      </Box>
      <List disablePadding>
        <Divider />
        {tasks.map((task, index) => (
          <ListItemButtonWrapper
            key={index}
            sx={{
              display: { xs: 'block', sm: 'flex' },
              py: 1.4,
              px: 2.5,
            }}
          >
            <ListItemAvatar
              sx={{
                minWidth: 'auto',
                mr: 2,
                mb: { xs: 2, sm: 0 },
              }}
            >
              <Tooltip
                arrow
                placement="top"
                title={t(task.tooltipTitle)}
              >
                <Avatar
                  sx={{
                    ...task.avatarStyle,
                    width: 54,
                    height: 54,
                  }}
                >
                  {task.initials}
                </Avatar>
              </Tooltip>
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  color="text.primary"
                  variant="h5"
                >
                  {task.taskTitle}
                </Typography>
              }
              secondary={
                <>
                  <task.progressStyle
                    sx={{
                      mt: 1,
                      mb: 0.5,
                    }}
                    variant="determinate"
                    value={task.progress}
                  />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="subtitle2"
                      color={task.progressColor}
                    >
                      {t(task.progressStatus)}
                    </Typography>
                    <Typography variant="subtitle2">{task.dueDate}</Typography>
                  </Box>
                </>
              }
            />
          </ListItemButtonWrapper>
        ))}
      </List>
    </Card>
  );
}

export default Component;
