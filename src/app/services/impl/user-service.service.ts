import { Injectable } from '@angular/core';
import { AbstractUser } from '../abstract-user';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../../core/models/rest.response';
import { User } from '../../core/models/user.response';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements AbstractUser{
  private ApiUrl=`${environment.APIURL}/users`
  constructor(private http:HttpClient) { }
  create(data: User[]): Observable<RestResponse<User[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<User[]>> {
    return this.http.get<RestResponse<User[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
