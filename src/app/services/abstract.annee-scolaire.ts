import { Observable } from "rxjs";
import { AnneeScolaire } from "../models/anneeScolaire";
import { RestResponse } from "../models/rest.response";

export interface AbstractAnneeScolaire {
    findAll():Observable<RestResponse<AnneeScolaire[]>>;
}
