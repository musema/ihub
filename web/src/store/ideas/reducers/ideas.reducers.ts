import { IIdea } from "../../../models/idea";
import {
      GetIdeasActionType,
      GetIdeasAction
    } from "../actions/ideas.actions.types";
    
    interface IIdeasState {
      ideas: IIdea[];
      isGettingIdeas: boolean;
      error: string | undefined;
    }
    const initialState: IIdeasState = {
      ideas: [],
      isGettingIdeas: false,
      error: undefined
    };
    
    export const ideas = (state: IIdeasState = initialState, action: GetIdeasAction) => {
      switch (action.type) {
        case GetIdeasActionType.GET_IDEAS_REQUEST:
          return {
            ...state,
            isGettingIdeas: true
          };
        case GetIdeasActionType.GET_IDEAS_SUCCESS:
          return {
            ...state, isGettingIdeas: false,
            ideas: action.payload
          };
        case GetIdeasActionType.GET_IDEAS_FAILURE:
          return {
            ...state,
            isGettingIdeas: false,
            products: action.payload
          };
        default:
          return state;
      }
    };
    