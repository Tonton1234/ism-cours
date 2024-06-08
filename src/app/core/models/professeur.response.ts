import { CoursRelation } from "./cours.response.relation";
import { ProfesseurClasseModulesRelation } from "./professeur.classe.modules.response.relation";
import { SessionRelation } from "./session.response.relation";

export interface Professeur{
    id:number,
    nom:string,
    prenom:string,
    username:string,
    password:string,
    grade:string,
    specialite:string,
    active:boolean,
    professeurClasseModules:ProfesseurClasseModulesRelation[],
    cours:CoursRelation[],
   sessioncours: SessionRelation[]
}

export interface ProfesseurCreate{
   
    nom:string,
    prenom:string,
    username:string,
    password:string,
    grade:string,
    specialite:string,
  
}