import { ProfesseurRelation } from "./Professeur.response.relation";
import { AnneeScolaireRelation } from "./anneeScolaireRelation";
import { ClasseRelation } from "./classe.response.relation";
import { ModuleRelation } from "./module.response.relation";
import { SemestreRelation } from "./semestre.response.relation";

export interface ProfesseurClasseModules{
    id:number,
    active:boolean,
    professeur:ProfesseurRelation,
    classe:ClasseRelation,
    modules:ModuleRelation,
    anneeScolaire:AnneeScolaireRelation,
    semestre:SemestreRelation
}

export interface ProfesseurClasseModulesCreate{
    classeId?:number| null | undefined,
    professeurId?:number| null | undefined,
    modules?:number[]| null | undefined,
    semestre?:number| null | undefined
}