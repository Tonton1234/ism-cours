import { AnneeScolaireRelation } from "./anneeScolaireRelation";
import { ClasseRelation } from "./classe.response.relation";
import { EtudiantRelation } from "./etudiant.relation.response";

export interface Inscription{
    id:number,
    date:string,
    active:boolean,
    etudiant:EtudiantRelation,
    classe:ClasseRelation,
    anneeScolaire:AnneeScolaireRelation
}