import { Injectable } from '@angular/core';
import { AbstractModule } from '../abstract-module';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestResponse } from '../../core/models/rest.response';
import { Module, ModuleCreate } from '../../core/models/module.response';

@Injectable({
  providedIn: 'root'
})
export class ModuleServiceService implements AbstractModule{
  private ApiUrl=`${environment.APIURL}/modules`
  constructor(private http:HttpClient) { }
  add(data: ModuleCreate): Observable<RestResponse<ModuleCreate>> {
    return  this.http.post<RestResponse<ModuleCreate>>(`${this.ApiUrl}`,data)
  }
  create(data: Module[]): Observable<RestResponse<Module[]>> {
    throw new Error('Method not implemented.');
  }
  findAll(page:number=0): Observable<RestResponse<Module[]>> {
    return this.http.get<RestResponse<Module[]>>(`${this.ApiUrl}?page=${page}`)
  }
}
