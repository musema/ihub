import { 
  GetIdeasActionType,
  GetIdeasAction
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
