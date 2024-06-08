import { Observable } from "rxjs";
import { Module, ModuleCreate } from "../core/models/module.response";
import { AbstractService } from "./abstract-service";
import { RestResponse } from "../core/models/rest.response";

export interface AbstractModule extends AbstractService<Module[]>{
    add(data:ModuleCreate):Observable<RestResponse<ModuleCreate>>;
}
