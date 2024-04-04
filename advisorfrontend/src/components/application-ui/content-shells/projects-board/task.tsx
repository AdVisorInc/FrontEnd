import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import AttachFileTwoToneIcon from '@mui/icons-material/AttachFileTwoTone';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  List as ListWrapper,
  Menu,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import clsx from 'clsx';
import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';
import { FC, forwardRef, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';
import type { List, Member, Task as TaskType } from 'src/models/projects_board';
import { useSelector } from 'src/store';
import type { RootState } from 'src/store';

interface TaskProps {
  taskId: string;
  dragging: boolean;
  index?: number;
  list: List;
}

interface PopulatedTask extends TaskType {
  members: Member[];
}

const taskSelector = (state: RootState, taskId: string): PopulatedTask => {
  const { tasks, members } = state.projectsBoard;
  const task = tasks.byId[taskId];

  return {
    ...task,
    members: task.memberIds.map((memberId: string) => members.byId[memberId]),
  };
};

const Task: FC<TaskProps> = forwardRef(({ taskId, dragging, index, list, ...rest }, ref) => {
  const task = useSelector((state) => taskSelector(state, taskId));
  const { t } = useTranslation();

  const [onMenuOpen, menuOpen] = useState<boolean>(false);
  const moreRef = useRef<HTMLButtonElement | null>(null);

  const openMenu = (): void => {
    menuOpen(true);
  };

  const closeMenu = (): void => {
    menuOpen(false);
  };

  return (
    <>
      <Box
        key={taskId}
        ref={ref}
        {...rest}
      >
        <Card
          sx={{
            p: 2,
          }}
          className={clsx({ dragging: dragging })}
          raised={dragging}
          variant={dragging ? 'elevation' : 'outlined'}
          elevation={dragging ? 14 : 0}
        >
          <Typography
            variant="h5"
            gutterBottom
            fontWeight={500}
            noWrap
          >
            {task.name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {task.description}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            py={1}
          >
            {task.comments > 0 && (
              <Tooltip
                placement="top"
                arrow
                title={t('Comments')}
              >
                <ButtonIcon
                  size="small"
                  color="secondary"
                >
                  <CommentTwoToneIcon
                    fontSize="small"
                    sx={{ mr: 0.5, color: 'text.secondary' }}
                  />
                  {task.comments}
                </ButtonIcon>
              </Tooltip>
            )}
            {task.attachments != null && task.attachments > 0 && (
              <Tooltip
                placement="top"
                arrow
                title={t('File attachments')}
              >
                <ButtonIcon
                  size="small"
                  color="secondary"
                >
                  <AttachFileTwoToneIcon
                    fontSize="small"
                    sx={{ mr: 0.5, color: 'text.secondary' }}
                  />
                  {task.attachments}
                </ButtonIcon>
              </Tooltip>
            )}
            {task.sub_items > 0 && (
              <Tooltip
                placement="top"
                arrow
                title={t('Subtasks')}
              >
                <ButtonIcon
                  size="small"
                  color="secondary"
                >
                  <FormatListBulletedTwoToneIcon
                    fontSize="small"
                    sx={{ mr: 0.5, color: 'text.secondary' }}
                  />
                  {task.sub_items}
                </ButtonIcon>
              </Tooltip>
            )}
          </Stack>
          <Box>
            <Typography
              gutterBottom
              variant="subtitle2"
            >
              {task.due_date && t('Due')}{' '}
              {task.due_date && formatDistance(task.due_date, new Date(), { addSuffix: true })}
            </Typography>
            <LinearProgressSlim
              value={task.progress}
              color="primary"
              variant="determinate"
            />
          </Box>
          <Box
            pt={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              {task.members.length > 0 && (
                <AvatarGroup max={4}>
                  {task.members.map((member) => (
                    <Tooltip
                      arrow
                      placement="top"
                      key={member.name}
                      title={member.name}
                    >
                      <Avatar
                        sx={{
                          width: 30,
                          height: 30,
                        }}
                        key={member.id}
                        src={member.avatar}
                      />
                    </Tooltip>
                  ))}
                </AvatarGroup>
              )}
            </Box>
            <ButtonIcon
              color="primary"
              size="small"
              onClick={openMenu}
              ref={moreRef}
            >
              <MoreHorizTwoToneIcon />
            </ButtonIcon>
          </Box>
        </Card>
      </Box>
      <Menu
        disableScrollLock
        keepMounted
        anchorEl={moreRef.current}
        open={onMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <ListWrapper
          sx={{
            p: 0,
            '& .MuiListItemButton-root': {
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            },
          }}
          component="nav"
        >
          <ListItemButton>
            <ListItemAvatar sx={{ minWidth: 36, display: 'flex' }}>
              <VisibilityTwoToneIcon />
            </ListItemAvatar>
            <ListItemText primary={t('View details')} />
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar sx={{ minWidth: 36, display: 'flex' }}>
              <ArchiveTwoToneIcon />
            </ListItemAvatar>
            <ListItemText primary={t('Move to archive')} />
          </ListItemButton>
          <ListItemButton>
            <ListItemAvatar sx={{ minWidth: 36, display: 'flex' }}>
              <DeleteForeverTwoToneIcon />
            </ListItemAvatar>
            <ListItemText primary={t('Delete')} />
          </ListItemButton>
        </ListWrapper>
      </Menu>
    </>
  );
});

Task.propTypes = {
  taskId: PropTypes.string.isRequired,
  dragging: PropTypes.bool.isRequired,
  index: PropTypes.number,
  // @ts-ignore
  list: PropTypes.object.isRequired,
};

Task.defaultProps = {
  dragging: false,
};

export default Task;
