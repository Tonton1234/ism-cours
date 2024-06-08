import { Observable } from "rxjs";
import { Abscence } from "../core/models/abscence";
import { ClasseCreate } from "../core/models/classe.response";
import { AbstractService } from "./abstract-service";
import { RestResponse } from "../core/models/rest.response";

export interface AbstractAbscence extends AbstractService<Abscence[]>{

}
