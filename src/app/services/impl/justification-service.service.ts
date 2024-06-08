import { Injectable } from '@angular/core';
import { AbstractJustification } from '../abstract-justification';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../../core/models/rest.response';
import { Justification } from '../../core/models/justification';

@Injectable({
  providedIn: 'root'
})
export class JustificationServiceService implements AbstractJustification{
  private ApiUrl=`${environment.APIURL}/justifications`
  constructor(private http:HttpClient) { }
  create(data: Justification[]): Observable<RestResponse<Justification[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<Justification[]>> {
    return this.http.get<RestResponse<Justification[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
