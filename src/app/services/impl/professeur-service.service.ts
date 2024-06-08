import { Injectable } from '@angular/core';
import { AbstractProfesseur } from '../abstract-professeur';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { RestResponse } from '../../core/models/rest.response';
import { Observable } from 'rxjs';
import { Professeur, ProfesseurCreate } from '../../core/models/professeur.response';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurServiceService implements AbstractProfesseur{
  private ApiUrl=`${environment.APIURL}/professeurs`
  constructor(private http:HttpClient) { }
  add(data: ProfesseurCreate): Observable<RestResponse<ProfesseurCreate>> {
    console.log(data)
    return  this.http.post<RestResponse<ProfesseurCreate>>(`${this.ApiUrl}`,data)
  }
  create(data: Professeur[]): Observable<RestResponse<Professeur[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<Professeur[]>> {
    return this.http.get<RestResponse<Professeur[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
