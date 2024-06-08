import { Injectable } from '@angular/core';
import { AbstractEtudiant } from '../abstract-etudiant';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../../core/models/rest.response';
import { Etudiant, EtudiantCreate } from '../../core/models/etudiant.response';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService implements AbstractEtudiant{
  private ApiUrl=`${environment.APIURL}/etudiants`
  constructor(private http:HttpClient) { }
  importStudents(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
   
    return this.http.post(`${this.ApiUrl}/import`, formData, { headers: headers });
  }
  add(data: EtudiantCreate): Observable<RestResponse<EtudiantCreate>> {
    return  this.http.post<RestResponse<EtudiantCreate>>(`${this.ApiUrl}`,data)
  }
  create(data: Etudiant[]): Observable<RestResponse<Etudiant[]>> {
    throw new Error('Method not implemented.');
  }
  findByClasse(page: number, idClasse: string | null): Observable<RestResponse<Etudiant[]>> {
    const url=`${this.ApiUrl}/classe/${idClasse}?page=${page}`
    return this.http.get<RestResponse<Etudiant[]>>(url)
   
  }
  findAll(page:number=0,keyword:string |null): Observable<RestResponse<Etudiant[]>> {
    const url:string=keyword=="all"
        ?`${this.ApiUrl}?page=${page}`
        :`${this.ApiUrl}/cours/${keyword}?page=${page}`
    return this.http.get<RestResponse<Etudiant[]>>(url)
    //return this.http.get<RestResponse<Etudiant[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
