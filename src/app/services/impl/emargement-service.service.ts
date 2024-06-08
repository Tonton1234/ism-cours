import { Injectable } from '@angular/core';
import { AbstractEmargement } from '../abstract-emargement';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../../core/models/rest.response';
import { Emargement } from '../../core/models/emargement.response';

@Injectable({
  providedIn: 'root'
})
export class EmargementServiceService implements AbstractEmargement{
  private ApiUrl=`${environment.APIURL}/emargements`
  constructor(private http:HttpClient) { }
  create(data: Emargement[]): Observable<RestResponse<Emargement[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<Emargement[]>> {
    return this.http.get<RestResponse<Emargement[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
