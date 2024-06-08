import { Injectable } from '@angular/core';
import { AbstractSessionsCours } from '../abstract-sessions-cours';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../../core/models/rest.response';
import { DtoRequestCalendar, SessionCours, SessionCoursCreate } from '../../core/models/sessionCours.response';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService implements AbstractSessionsCours{
  private ApiUrl=`${environment.APIURL}/sessions`
  constructor(private http:HttpClient) { }
  getSessionByUsername(username: string): Observable<RestResponse<DtoRequestCalendar[]>> {
    const url=`${this.ApiUrl}/user/${username}`
    return this.http.get<RestResponse<DtoRequestCalendar[]>>(url)
  }
  add(data: SessionCoursCreate): Observable<RestResponse<SessionCoursCreate>> {
    return  this.http.post<RestResponse<SessionCoursCreate>>(`${this.ApiUrl}`,data)
  }
  annuler(page: number, id: number | null): Observable<RestResponse<SessionCours[]>> {
    const url=`${this.ApiUrl}/annuler/${id}?page=${page}`
      return this.http.get<RestResponse<SessionCours[]>>(url)
  }
  create(data: SessionCours[]): Observable<RestResponse<SessionCours[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0,keyword:string |null): Observable<RestResponse<SessionCours[]>> {
    const url:string=keyword=="all"
        ?`${this.ApiUrl}?page=${page}`
        :`${this.ApiUrl}/cours/${keyword}?page=${page}`
    return this.http.get<RestResponse<SessionCours[]>>(url)
   // return this.http.get<RestResponse<SessionCours[]>>(`${this.ApiUrl}?page=${page}`)
  }
  
}
