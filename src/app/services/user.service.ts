import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api';

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this._http.get<UserModel[]>(`${this.url}/users?per_page=6&delay=4`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  getUserById(id: string): Observable<UserModel> {
    return this._http.get<UserModel>(`${this.url}/users/${id}`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

}
