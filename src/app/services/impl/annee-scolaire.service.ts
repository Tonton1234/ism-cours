import { Injectable } from '@angular/core';
import { AbstractAnneeScolaire } from '../abstract.annee-scolaire';
import { Observable } from 'rxjs';
import { AnneeScolaire } from '../../models/anneeScolaire';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnneeScolaireService implements AbstractAnneeScolaire {
  private ApiUrl=`${environment.APIURL}/anneeScolaire`
  constructor(private http:HttpClient) { }
  findAll(): Observable<RestResponse<AnneeScolaire[]>> {
    return this.http.get<RestResponse<AnneeScolaire[]>>(this.ApiUrl)
  }
}
