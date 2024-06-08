import { Observable } from "rxjs";
import { Salle, SalleCreate } from "../core/models/salle.response";
import { AbstractService } from "./abstract-service";
import { RestResponse } from "../core/models/rest.response";

export interface AbstractSalle extends AbstractService<Salle[]>{
    add(data:SalleCreate):Observable<RestResponse<SalleCreate>>;
}
