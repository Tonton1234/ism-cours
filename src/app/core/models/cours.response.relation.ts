
import { AnneeScolaire } from "./anneeScolaire"
import { Classe } from "./classe.response"
import { EtatCours } from "./cours.response"
import { Module } from "./module.response"
import { Professeur } from "./professeur.response"
import { Semestre } from "./semestre.response"
import { SessionCours } from "./sessionCours.response"

export interface CoursRelation{
    id:number,
    libelle:string,
    nbreHeureGlobal:number,
    nbreHeurePlanifier:number,
    nbreHeureRestante:number,
    etat:EtatCours,
    active:boolean
}
