import { Cours } from "./cours.response"
import { CoursRelation } from "./cours.response.relation";
import { Inscription } from "./inscription.response"
import { InscriptionRelation } from "./inscription.response.relation";
import { ProfesseurClasseModules } from "./professeurClasseModules.response"

export interface Classe{
    id:number,
    libelle:string,
    place:number,
    filiere:Filiere,
    niveau:Niveau,
    // inscriptionResponseDto:InscriptionRelation[],
    // professeurClasseModulesRelationResponseDtos:ProfesseurClasseModules[];
    // cours:CoursRelation[]
    active:boolean
}

export interface ClasseCreate{
    libelle:string,
    place:number,
    filiere:string,
    niveau:string,
   
}


export enum Filiere{
    GLRS,ETSE,MAIE,TTL,CPD,CDSD,IAGE
}

export enum Niveau{
    L1,L2,L3
}
