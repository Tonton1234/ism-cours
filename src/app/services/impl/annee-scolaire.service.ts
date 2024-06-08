import { Injectable } from '@angular/core';
import { AbstractAnneeScolaire } from '../abstract.annee-scolaire';
import { Observable } from 'rxjs';
import { AnneeScolaire, AnneeScolaireCreate } from '../../core/models/anneeScolaire';
import { RestResponse } from '../../core/models/rest.response';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnneeScolaireService implements AbstractAnneeScolaire {
  private ApiUrl=`${environment.APIURL}/anneeScolaire`
  constructor(private http:HttpClient) { }
  add(data: AnneeScolaireCreate): Observable<RestResponse<AnneeScolaireCreate>> {
    return  this.http.post<RestResponse<AnneeScolaireCreate>>(`${this.ApiUrl}`,data)
  }
  create(data: AnneeScolaire[]): Observable<RestResponse<AnneeScolaire[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<AnneeScolaire[]>> {
    return this.http.get<RestResponse<AnneeScolaire[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
