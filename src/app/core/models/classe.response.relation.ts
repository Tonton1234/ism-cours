import { Filiere, Niveau } from "./classe.response"
import { Cours } from "./cours.response"
import { Inscription } from "./inscription.response"
import { ProfesseurClasseModules } from "./professeurClasseModules.response"

export interface ClasseRelation{
    id:number,
    libelle:string,
    filiere:Filiere,
    niveau:Niveau,
    place:number,
    active:boolean
}

