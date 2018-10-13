import * as fromUser from '../actions/users.actions';
import { UserModel } from 'src/app/models/user.model';


export interface UsersState {
    users: UserModel[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

export function usersReducer(state = initState, actions: fromUser.actions): UsersState {
    switch (actions.type) {

        case fromUser.GET_USERS:
            return {
                ...state,
                error: null,
                loading: true
            };

        case fromUser.GET_USERS_SUCCESSS:

            return {
                ...state,
                loading: false,
                error: null,
                loaded: true,
                users: [...actions.users]
            };

        case fromUser.GET_USERS_FAIL:

            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    url: actions.payload.url,
                    message: actions.payload.message,
                    name: actions.payload.name,
                    status: actions.payload.status,
                }
            };

        default:
            return state;
    }
}
