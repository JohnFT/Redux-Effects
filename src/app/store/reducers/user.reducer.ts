import * as fromUser from '../actions/user.actions';
import { UserModel } from 'src/app/models/user.model';


export interface UserState {
    user: UserModel;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UserState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export function userReducer(state = initState, actions: fromUser.userActions): UserState {
    switch (actions.type) {

        case fromUser.GET_USER:
            return {
                ...state,
                error: null,
                loading: true
            };

        case fromUser.GET_USER_SUCCESSS:

            return {
                ...state,
                loading: false,
                error: null,
                loaded: true,
                user: actions.user
            };

        case fromUser.GET_USER_FAIL:

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
