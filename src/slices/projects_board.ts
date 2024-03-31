import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { projects_board } from 'src/mocks/projects_board';
import type { List, Member, Project, Task } from 'src/models/projects_board';
import type { AppThunk } from 'src/store';
import objectArray from 'src/utils/objectArray';

interface ProjectsBoardState {
  isLoaded: boolean;
  lists: {
    byId: Record<string, List>;
    allIds: string[];
  };
  tasks: {
    byId: Record<string, Task>;
    allIds: string[];
  };
  members: {
    byId: Record<string, Member>;
    allIds: string[];
  };
}

const initialState: ProjectsBoardState = {
  isLoaded: false,
  lists: {
    byId: {},
    allIds: [],
  },
  tasks: {
    byId: {},
    allIds: [],
  },
  members: {
    byId: {},
    allIds: [],
  },
};

const slice = createSlice({
  name: 'projects_board',
  initialState,
  reducers: {
    getProject(state: ProjectsBoardState, action: PayloadAction<Project>): void {
      const project = action.payload;

      state.lists.byId = objectArray(project.lists);
      state.lists.allIds = Object.keys(state.lists.byId);
      state.tasks.byId = objectArray(project.tasks);
      state.tasks.allIds = Object.keys(state.tasks.byId);
      state.members.byId = objectArray(project.members);
      state.members.allIds = Object.keys(state.members.byId);
      state.isLoaded = true;
    },
    updateList(state: ProjectsBoardState, action: PayloadAction<List>): void {
      const list = action.payload;
      state.lists.byId[list.id] = list;
    },

    moveTask(
      state: ProjectsBoardState,
      action: PayloadAction<{
        taskId: string;
        position: number;
        listId?: string;
      }>
    ): void {
      const { taskId, position, listId } = action.payload;
      const sourceListId = state.tasks.byId[taskId].listId;

      state.lists.byId[sourceListId].taskIds = state.lists.byId[sourceListId].taskIds.filter(
        (_taskId) => _taskId !== taskId
      );

      if (listId) {
        state.tasks.byId[taskId].listId = listId;
        state.lists.byId[listId].taskIds.splice(position, 0, taskId);
      } else {
        state.lists.byId[sourceListId].taskIds.splice(position, 0, taskId);
      }
    },
  },
});

export const { reducer } = slice;

export const getProject =
  (): AppThunk =>
  async (dispatch): Promise<void> => {
    const response = await projects_board.getProject();
    dispatch(slice.actions.getProject(response));
  };

export const updateList =
  (listId: string, update: any): AppThunk =>
  async (dispatch): Promise<void> => {
    const response = await projects_board.updateList({ listId, update });
    dispatch(slice.actions.updateList(response));
  };

export const moveTask =
  (taskId: string, position: number, listId?: string): AppThunk =>
  async (dispatch): Promise<void> => {
    await projects_board.moveTask({ taskId, position, listId });
    dispatch(
      slice.actions.moveTask({
        taskId,
        position,
        listId,
      })
    );
  };
