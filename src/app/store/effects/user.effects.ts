import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as userActions from '../actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private _userService: UserService
    ) { }

    @Effect()
    getUsers$ = this.actions$.ofType(userActions.GET_USER)
        .pipe(
            switchMap((action: userActions.GetUserAction) => {
                return this._userService.getUserById(action.id)
                    .pipe(
                        map(user => new userActions.GetUserSuccessAction(user)),
                        catchError(error => of(new userActions.GetUserFailAction(error))
                        ));
            })
        );


}
