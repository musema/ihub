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

export type GetIdeasAction = IGetIdeasRequestAction | IGetIdeasSuccessAction | IGetIdeasFailureAction;