import { Observable } from "rxjs";
import { ProfesseurClasseModules, ProfesseurClasseModulesCreate } from "../core/models/professeurClasseModules.response";
import { RestResponse } from "../core/models/rest.response";
import { AbstractService } from "./abstract-service";
import { Professeur } from "../core/models/professeur.response";
import { Classe } from "../core/models/classe.response";

export interface AbstractProfesseurClasseModules extends AbstractService<ProfesseurClasseModules[]>{
    add(data:ProfesseurClasseModulesCreate):Observable<RestResponse<ProfesseurClasseModulesCreate>>;
    findByProfesseur(page:number,idProfesseur:string | null):Observable<RestResponse<ProfesseurClasseModules[]>>;
    findByModule(page:number,idModule:string | null):Observable<RestResponse<Professeur[]>>;
    findByModuleandProf(page:number,idModule:string | null,idProfesseur:string | null):Observable<RestResponse<Classe[]>>;

}
