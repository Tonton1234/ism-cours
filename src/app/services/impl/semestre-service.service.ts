import { Injectable } from '@angular/core';
import { AbstractSemestre } from '../abstract-semestre';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../../core/models/rest.response';
import { Semestre } from '../../core/models/semestre.response';

@Injectable({
  providedIn: 'root'
})
export class SemestreServiceService implements AbstractSemestre{

  private ApiUrl=`${environment.APIURL}/semestres`
  constructor(private http:HttpClient) { }
  create(data: Semestre[]): Observable<RestResponse<Semestre[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<Semestre[]>> {
    return this.http.get<RestResponse<Semestre[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
