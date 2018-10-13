import { Action } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export const GET_USERS = '[USERS] Get Users';
export const GET_USERS_FAIL = '[USERS] Get Users Fail';
export const GET_USERS_SUCCESSS = '[USERS] Get Users Success';

export class GetUsersAction implements Action {
    readonly type = GET_USERS;
}


export class GetUsersFailAction implements Action {
    readonly type = GET_USERS_FAIL;
    constructor(public payload: any) { }
}


export class GetUsersSuccessAction implements Action {
    readonly type = GET_USERS_SUCCESSS;
    constructor(public users: UserModel[]) { }
}


export type actions = GetUsersAction |
    GetUsersFailAction |
    GetUsersSuccessAction;
