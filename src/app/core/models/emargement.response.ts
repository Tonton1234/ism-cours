import { EtudiantRelation } from "./etudiant.relation.response";
import { SessionRelation } from "./session.response.relation";

export interface Emargement{
    id:number,
    date:string,
    present:boolean,
    etudiant:EtudiantRelation,
    sessionCours:SessionRelation,

}