
import { ProfesseurRelation } from "./Professeur.response.relation"
import { AnneeScolaire } from "./anneeScolaire"
import { AnneeScolaireRelation } from "./anneeScolaireRelation"
import { Classe } from "./classe.response"
import { ClasseRelation } from "./classe.response.relation"
import { Module } from "./module.response"
import { ModuleRelation } from "./module.response.relation"
import { Professeur } from "./professeur.response"
import { Semestre } from "./semestre.response"
import { SemestreRelation } from "./semestre.response.relation"
import { SessionRelation } from "./session.response.relation"
import { SessionCours } from "./sessionCours.response"

export interface Cours{
    id:number,
    libelle:string,
    nbreHeureGlobal:number,
    nbreHeurePlanifier:number,
    nbreHeureRestante:number,
    etat:EtatCours,
    semestres: SemestreRelation[]
    classes:ClasseRelation[],
    sessionCours: SessionRelation[],
     module:ModuleRelation,
     professeur:  ProfesseurRelation,
   anneeScolaire:AnneeScolaireRelation,
    active:boolean
}
export interface CoursCreate{
    nbreHeureGlobal?:number| null | undefined,
    classes?:number[]| null | undefined,
    module:number| null | undefined,
    semestre:number| null | undefined,
    professeur:number| null | undefined,
}

export enum EtatCours{
    Planifier,Terminer
}