import { 
  GetIdeasActionType,
  GetIdeasAction,
  CreateIdeaAction,
  CreateIdeaActionType
} from './ideas.actions.types';
import * as api from '../../../api';
import { Dispatch } from 'react';
import { IIdea } from '../../../models/idea';


export const getIdeas = () => async (dispatch: Dispatch<GetIdeasAction>) => {
    dispatch({
      type: GetIdeasActionType.GET_IDEAS_REQUEST
    });
    api.fetchIdeas()
        .then((ideas: IIdea[]) => {
          dispatch({ type: GetIdeasActionType.GET_IDEAS_SUCCESS, payload: ideas });
        })
        .catch((e) => {
          dispatch({ type: GetIdeasActionType.GET_IDEAS_FAILURE, payload: e.message});
        });
};

export const createIdeas = (newIdea: Partial<IIdea>) => async (dispatch: Dispatch<CreateIdeaAction>) => {
  dispatch({
    type: CreateIdeaActionType.CREATE_IDEA_REQUEST
  });
  api.createIdea(newIdea)
      .then((response) => {
        dispatch({ type: CreateIdeaActionType.CREATE_IDEA_SUCCESS, payload: { idea: response.data } });
      })
      .catch((e) => {
        dispatch({ type: CreateIdeaActionType.CREATE_IDEA_FAILURE, payload: {error: e.message}});
      });
};