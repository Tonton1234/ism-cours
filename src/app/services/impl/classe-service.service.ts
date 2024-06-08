import { Injectable } from '@angular/core';
import { AbstractClasses } from '../abstract-classes';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../../core/models/rest.response';
import { Classe, ClasseCreate } from '../../core/models/classe.response';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService implements AbstractClasses{

  private ApiUrl=`${environment.APIURL}/classes`
  constructor(private http:HttpClient) { }
  findByLibelle(libelle: string): Observable<RestResponse<Classe>> {
    return this.http.get<RestResponse<Classe>>(`${this.ApiUrl}?keyword=${libelle}`)
  }
  add(data: ClasseCreate): Observable<RestResponse<ClasseCreate>> {
    return  this.http.post<RestResponse<ClasseCreate>>(`${this.ApiUrl}`,data)
  }
  create(data: Classe[]): Observable<RestResponse<Classe[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<Classe[]>> {
    return this.http.get<RestResponse<Classe[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
