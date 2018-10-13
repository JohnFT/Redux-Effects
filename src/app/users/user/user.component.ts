import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { GetUserAction } from 'src/app/store/actions';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  public user: UserModel;
  public isloading: boolean;
  public error: any;

  constructor(private _route: ActivatedRoute,
    private _store: Store<AppState>) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const id = params['id'];
      const action = new GetUserAction(id);
      this._store.dispatch(action);
    });

    this._store.select('user').subscribe(res => {
      this.user = res.user;
      this.isloading = res.loading;
      this.error = res.error;
    });


  }

}
