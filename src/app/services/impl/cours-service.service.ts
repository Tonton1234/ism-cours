import { Injectable } from '@angular/core';
import { AbstractCours } from '../abstract-cours';
import { Observable } from 'rxjs';
import { Cours, CoursCreate } from '../../core/models/cours.response';
import { RestResponse } from '../../core/models/rest.response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoursServiceService implements AbstractCours {
  private ApiUrl=`${environment.APIURL}/cours`
  constructor(private http:HttpClient) { }
  add(data: CoursCreate): Observable<RestResponse<CoursCreate>> {
    return  this.http.post<RestResponse<CoursCreate>>(`${this.ApiUrl}`,data)
  }
  create(data: Cours[]): Observable<RestResponse<Cours[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page: number=0,keyword:string |null): Observable<RestResponse<Cours[]>> {
    return this.http.get<RestResponse<Cours[]>>(`${this.ApiUrl}?page=${page}&keyword=${keyword}`)
  }
}
