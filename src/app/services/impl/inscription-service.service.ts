import { Injectable } from '@angular/core';
import { AbstractEtudiant } from '../abstract-etudiant';
import { environment } from '../../../environments/environment.development';
import { AbstractInscription } from '../abstract-inscription';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../../core/models/rest.response';
import { Inscription } from '../../core/models/inscription.response';

@Injectable({
  providedIn: 'root'
})
export class InscriptionServiceService implements AbstractInscription{
  private ApiUrl=`${environment.APIURL}/inscriptions`
  constructor(private http:HttpClient) { }
  create(data: Inscription[]): Observable<RestResponse<Inscription[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<Inscription[]>> {
    return this.http.get<RestResponse<Inscription[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
