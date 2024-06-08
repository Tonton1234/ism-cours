import { Observable } from "rxjs";
import { AnneeScolaire, AnneeScolaireCreate } from "../core/models/anneeScolaire";
import { RestResponse } from "../core/models/rest.response";
import { AbstractService } from "./abstract-service";

export interface AbstractAnneeScolaire extends AbstractService<AnneeScolaire[]>{
    add(data:AnneeScolaireCreate):Observable<RestResponse<AnneeScolaireCreate>>;
}
