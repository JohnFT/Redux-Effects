import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { GetUsersAction } from 'src/app/store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  private subscribe: Subscription = new Subscription();

  public users: UserModel[] = [];
  public isloading: boolean;
  public error: any;


  constructor(private _store: Store<AppState>) { }

  ngOnInit() {

    this.subscribe = this._store.select('users').subscribe(res => {
      this.users = res.users;
      this.isloading = res.loading;
      this.error = res.error;
    });

    this._store.dispatch(new GetUsersAction());
  }

}
