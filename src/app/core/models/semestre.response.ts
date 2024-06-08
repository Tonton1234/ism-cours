import { Niveau } from "./classe.response";
import { CoursRelation } from "./cours.response.relation";

export interface Semestre{
    id:number,
    libelle:string,
    niveau:Niveau,
    active:boolean,
    cours:CoursRelation
}

export interface SemestreCreate{
    libelle:string,
    niveau:Niveau,
  
}