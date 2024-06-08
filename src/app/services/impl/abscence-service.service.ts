import { Injectable } from '@angular/core';
import { AbstractAbscence } from '../abstract-abscence';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RestResponse } from '../../core/models/rest.response';
import { Abscence } from '../../core/models/abscence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbscenceServiceService implements AbstractAbscence{

  private ApiUrl=`${environment.APIURL}/abscences`
  constructor(private http:HttpClient) { }
  create(data: Abscence[]): Observable<RestResponse<Abscence[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<Abscence[]>> {
    return this.http.get<RestResponse<Abscence[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
