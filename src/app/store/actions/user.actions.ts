import { Action } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export const GET_USER = '[USER] Get User';
export const GET_USER_FAIL = '[USER] Get User Fail';
export const GET_USER_SUCCESSS = '[USER] Get User Success';

export class GetUserAction implements Action {
    readonly type = GET_USER;
    constructor(public id: string) { }
}


export class GetUserFailAction implements Action {
    readonly type = GET_USER_FAIL;
    constructor(public payload: any) { }
}


export class GetUserSuccessAction implements Action {
    readonly type = GET_USER_SUCCESSS;
    constructor(public user: UserModel) { }
}


export type userActions = GetUserAction |
    GetUserFailAction |
    GetUserSuccessAction;
