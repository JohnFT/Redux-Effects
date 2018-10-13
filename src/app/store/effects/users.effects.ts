import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as usuariosActions from '../actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private _userService: UserService
    ) { }

    @Effect()
    getUsers$ = this.actions$.ofType(usuariosActions.GET_USERS)
        .pipe(
            switchMap(() => {
                return this._userService.getUsers()
                    .pipe(
                        map(users => new usuariosActions.GetUsersSuccessAction(users)),
                        catchError(error => of(new usuariosActions.GetUsersFailAction(error))
                        ));
            })
        );


}
