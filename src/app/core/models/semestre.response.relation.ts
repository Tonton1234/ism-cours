import { Niveau } from "./classe.response"

export interface SemestreRelation{
    id:number,
    libelle:string,
    niveau:Niveau,
    active:boolean
}