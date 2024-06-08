import { Observable } from "rxjs";
import { Classe, ClasseCreate } from "../core/models/classe.response";
import { AbstractService } from "./abstract-service";
import { RestResponse } from "../core/models/rest.response";

export interface AbstractClasses extends AbstractService<Classe[]>{
    add(data:ClasseCreate):Observable<RestResponse<ClasseCreate>>;
    findByLibelle(libelle:string):Observable<RestResponse<Classe>>;
}
