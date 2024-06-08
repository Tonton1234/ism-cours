import { Observable } from "rxjs";
import { Etudiant, EtudiantCreate } from "../core/models/etudiant.response";
import { AbstractService } from "./abstract-service";
import { RestResponse } from "../core/models/rest.response";

export interface AbstractEtudiant extends AbstractService<Etudiant[]>{
    add(data:EtudiantCreate):Observable<RestResponse<EtudiantCreate>>;
    findByClasse(page:number,idClasse:string | null):Observable<RestResponse<Etudiant[]>>;
    importStudents(file: File): Observable<any>
}
