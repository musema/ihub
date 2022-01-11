import { IIdea } from "../../../models/idea";

export enum GetIdeasActionType {
    GET_IDEAS_REQUEST = 'GET_IDEAS_REQUEST',
    GET_IDEAS_SUCCESS = 'GET_IDEAS_SUCCESS',
    GET_IDEAS_FAILURE = 'GET_IDEAS_SUCCESS'
}

interface IGetIdeasRequestAction {
    type: GetIdeasActionType.GET_IDEAS_REQUEST;
}
interface IGetIdeasSuccessAction {
    type: GetIdeasActionType.GET_IDEAS_SUCCESS;
    payload: IIdea[];
} 
interface IGetIdeasFailureAction {
    type: GetIdeasActionType.GET_IDEAS_FAILURE;
    payload: string;
}

export enum CreateIdeaActionType {
    CREATE_IDEA_REQUEST = 'CREATE_IDEA_REQUEST',
    CREATE_IDEA_SUCCESS = 'CREATE_IDEA_SUCCESS',
    CREATE_IDEA_FAILURE = 'CREATE_IDEA_FAILURE'
}

interface ICreateIdeaRequestAction {
    type: CreateIdeaActionType.CREATE_IDEA_REQUEST;
}
interface ICreateIdeaSuccessAction {
    type: CreateIdeaActionType.CREATE_IDEA_SUCCESS;
    payload: {
        idea: IIdea
    }
}
interface ICreateIdeaFailureAction {
    type: CreateIdeaActionType.CREATE_IDEA_FAILURE;
    payload: {
        error: string
    }
}
export type GetIdeasAction = IGetIdeasRequestAction | IGetIdeasSuccessAction | IGetIdeasFailureAction;
export type CreateIdeaAction = ICreateIdeaRequestAction | ICreateIdeaSuccessAction | ICreateIdeaFailureAction;