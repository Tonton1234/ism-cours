import { CoursRelation } from "./cours.response.relation";
import { ProfesseurClasseModulesRelation } from "./professeur.classe.modules.response.relation";
import { SessionRelation } from "./session.response.relation";

export interface Module{
    id:number,
    libelle:string,
    active:boolean,
    cours:CoursRelation[],
    sessionCours:SessionRelation[],
    professeurClasseModules:ProfesseurClasseModulesRelation[]
}


export interface ModuleCreate{
    libelle:string,
   
}