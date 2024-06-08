import { EtudiantRelation } from "./etudiant.relation.response";
import { JustificationRelation } from "./justification.response.relation";
import { SessionRelation } from "./session.response.relation";

export interface Abscence{
    id:number,
    date:string,
    active:boolean,
    abscence:boolean,
    etudiant:EtudiantRelation,
    sessionCours:SessionRelation,
    justification:JustificationRelation

}