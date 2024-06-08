import { Injectable } from '@angular/core';
import { AbstractSalle } from '../abstract-salle';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../../core/models/rest.response';
import { Salle, SalleCreate } from '../../core/models/salle.response';

@Injectable({
  providedIn: 'root'
})
export class SalleServiceService implements AbstractSalle{
  private ApiUrl=`${environment.APIURL}/salles`
  constructor(private http:HttpClient) { }
  add(data: SalleCreate): Observable<RestResponse<SalleCreate>> {
    return  this.http.post<RestResponse<SalleCreate>>(`${this.ApiUrl}`,data)
  }
  create(data: Salle[]): Observable<RestResponse<Salle[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<Salle[]>> {
    return this.http.get<RestResponse<Salle[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
