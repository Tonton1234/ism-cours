import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractRole } from '../abstract-role';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { RestResponse } from '../../core/models/rest.response';
import { Role } from '../../core/models/role.response';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService implements AbstractRole {
  private ApiUrl=`${environment.APIURL}/roles`
  constructor(private http:HttpClient) { }
  create(data: Role[]): Observable<RestResponse<Role[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<Role[]>> {
    return this.http.get<RestResponse<Role[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
