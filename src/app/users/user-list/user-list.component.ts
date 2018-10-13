import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  public users: UserModel[] = [];
  constructor(private _userrServie: UserService) { }

  ngOnInit() {
    this._userrServie.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
