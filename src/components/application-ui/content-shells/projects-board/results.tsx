import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import {
  Box,
  Button,
  Chip,
  ClickAwayListener,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { CardBorderColor } from 'src/components/base/styles/card-border-color';
import type { List as ListType } from 'src/models/projects_board';
import { updateList } from 'src/slices/projects_board';
import { useDispatch, useSelector } from 'src/store';
import type { RootState } from 'src/store';
import Task from './task';

interface ResultsProps {
  listId: string;
}

const listSelector = (state: RootState, listId: string): ListType => {
  const { lists } = state.projectsBoard;

  return lists.byId[listId];
};

const Results: FC<ResultsProps> = ({ listId }) => {
  const { t } = useTranslation();

  const list = useSelector((state) => listSelector(state, listId));
  const dispatch = useDispatch();
  const [name, setName] = useState<string>(list.name);
  const [isRenaming, setRename] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setName(event.target.value);
  };

  const handleRenameInit = (): void => {
    setRename(true);
  };

  const handleRename = async (): Promise<void> => {
    try {
      if (!name) {
        setName(list.name);
        setRename(false);
        return;
      }

      const update = { name };

      setRename(false);
      await dispatch(updateList(list.id, update));
      toast.success(t('Project board updated successfully!'));
    } catch (err) {
      console.error(err);
      toast.error(t('There was an error, try again later'));
    }
  };

  return (
    <CardBorderColor
      elevation={7}
      borderColor={list.color}
      borderPosition="top"
      sx={{
        minWidth: { xs: 'none', sm: 320 },
        width: { xs: 'auto', md: 320 },
        mr: { xs: 0, md: 3 },
        mb: { xs: 2, md: '2px' },
        ml: '2px',
      }}
    >
      <Box
        px={2}
        pt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {isRenaming ? (
          <ClickAwayListener onClickAway={handleRename}>
            <TextField
              value={name}
              size="small"
              onBlur={handleRename}
              onChange={handleChange}
              variant="outlined"
              margin="none"
              fullWidth
            />
          </ClickAwayListener>
        ) : (
          <Typography
            color="inherit"
            variant="h4"
            noWrap
            fontWeight={500}
            onClick={handleRenameInit}
          >
            {list.name}
          </Typography>
        )}
        <Stack
          spacing={0.5}
          direction="row"
          alignItems="center"
          pl={0.5}
        >
          <Tooltip
            arrow
            placement="top"
            title={t('Rename')}
          >
            <ButtonIcon
              size="small"
              startIcon={<EditTwoToneIcon fontSize="small" />}
              onClick={handleRenameInit}
            />
          </Tooltip>
          <Chip
            size="small"
            variant="outlined"
            label={list.taskIds.length}
            color="primary"
          />
        </Stack>
      </Box>
      <Box
        px={2}
        pt={2}
      >
        <Tooltip
          placement="top"
          arrow
          title={t('Add new task')}
        >
          <Button
            variant="outlined"
            color="primary"
            fullWidth
          >
            <AddTwoToneIcon fontSize="small" />
          </Button>
        </Tooltip>
      </Box>
      {list.taskIds.length === 0 && (
        <Box
          p={{ xs: 2, sm: 3, md: 4 }}
          textAlign="center"
        >
          <Typography variant="subtitle2">
            {t('Drag tasks here to assign them to this board')}
          </Typography>
        </Box>
      )}
      <Droppable droppableId={list.id}>
        {(provided) => (
          <Stack
            p={2}
            spacing={{ xs: 2, sm: 3 }}
            sx={{
              minHeight: 260,
            }}
            ref={provided.innerRef}
          >
            {list.taskIds.map((taskId, index) => (
              <Draggable
                draggableId={taskId}
                index={index}
                key={taskId}
              >
                {(provided, snapshot) => (
                  <Task
                    taskId={taskId}
                    dragging={snapshot.isDragging}
                    index={index}
                    key={taskId}
                    list={list}
                    // @ts-ignore
                    ref={provided.innerRef}
                    style={{ ...provided.draggableProps.style }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Stack>
        )}
      </Droppable>
      <Box
        px={2}
        pb={2}
      >
        <Tooltip
          placement="top"
          arrow
          title={t('Add new task')}
        >
          <Button
            color="primary"
            variant="outlined"
            fullWidth
          >
            <AddTwoToneIcon fontSize="small" />
          </Button>
        </Tooltip>
      </Box>
    </CardBorderColor>
  );
};

Results.propTypes = {
  listId: PropTypes.string.isRequired,
};

export default Results;
