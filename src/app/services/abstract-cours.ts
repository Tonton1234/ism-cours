import { Observable } from "rxjs";
import { Cours, CoursCreate } from "../core/models/cours.response";
import { RestResponse } from "../core/models/rest.response";
import { AbstractService } from "./abstract-service";

export interface AbstractCours extends AbstractService<Cours[]>{
    add(data:CoursCreate):Observable<RestResponse<CoursCreate>>;
}
