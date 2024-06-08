import { Observable } from "rxjs";
import { Professeur, ProfesseurCreate } from "../core/models/professeur.response";
import { RestResponse } from "../core/models/rest.response";
import { AbstractService } from "./abstract-service";

export interface AbstractProfesseur extends AbstractService<Professeur[]>{
    add(data:ProfesseurCreate):Observable<RestResponse<ProfesseurCreate>>;
}
