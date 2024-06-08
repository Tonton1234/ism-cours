import { Injectable } from '@angular/core';
import { AbstractProfesseurClasseModules } from '../abstract-professeur-classe-modules';
import { Observable } from 'rxjs';
import { ProfesseurClasseModules, ProfesseurClasseModulesCreate } from '../../core/models/professeurClasseModules.response';
import { RestResponse } from '../../core/models/rest.response';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Professeur } from '../../core/models/professeur.response';
import { Classe } from '../../core/models/classe.response';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurClasseModulesServiceService implements AbstractProfesseurClasseModules{
  private ApiUrl=`${environment.APIURL}/professeurClasseModules`
  constructor(private http:HttpClient) { }
  findByModule(page: number, idModule: string | null): Observable<RestResponse<Professeur[]>> {
    const url=`${this.ApiUrl}/module/${idModule}?page=${page}`
    return this.http.get<RestResponse<Professeur[]>>(url)
  }
  findByModuleandProf(page: number, idModule: string | null, idProfesseur: string | null): Observable<RestResponse<Classe[]>> {
    
    const url=`${this.ApiUrl}/professeurr/${idProfesseur}?idMod=${idModule}`
    return this.http.get<RestResponse<Classe[]>>(url)
   
  }
  findByProfesseur(page: number, idProfesseur: string | null): Observable<RestResponse<ProfesseurClasseModules[]>> {
    throw new Error('Method not implemented.');
  }
  add(data: ProfesseurClasseModulesCreate): Observable<RestResponse<ProfesseurClasseModulesCreate>> {
    return  this.http.post<RestResponse<ProfesseurClasseModulesCreate>>(`${this.ApiUrl}`,data)
  }
  
  create(data: ProfesseurClasseModules[]): Observable<RestResponse<ProfesseurClasseModules[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<ProfesseurClasseModules[]>> {
    return this.http.get<RestResponse<ProfesseurClasseModules[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
