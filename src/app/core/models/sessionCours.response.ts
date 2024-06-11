import { ProfesseurRelation } from "./Professeur.response.relation";
import { CoursRelation } from "./cours.response.relation";
import { ModuleRelation } from "./module.response.relation";
import { Salle } from "./salle.response";
import { EtatLieu, EtatSessionsCours } from "./session.response.relation";

export interface SessionCours{
    id:number,
    date:string,
    libelle:string,
    heureDebut:string,
    heureFin:string,
    etat:EtatSessionsCours,
    active:boolean,
    lieu:EtatLieu,
    cours:CoursRelation,
    sallescours:Salle,
    professeur:ProfesseurRelation,
    module:ModuleRelation
}

export interface SessionCoursCreate{
    date?:string| null | undefined,
    heureDebut?:string| null | undefined,
    heureFin?:string| null | undefined,
    cours?:number| null | undefined,
    salle?:number| null | undefined,
   
}
export interface DtoRequestCalendar {
    id:number;
    module:String;
    semestre:String;
    professeur:String;
    lieu:String;
    debut:String;
    fin:String;
    duree:String;
    date:String;
    jourActuel:String;
    classeList:String;
    isArchived:number;
  }

