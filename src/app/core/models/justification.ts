import { AbscenceRelation } from "./abscence.relation";
import { EtatJustification } from "./justification.response.relation";

export interface Justification{
    id:number,
    date:string,
    motif:string,
    etat:EtatJustification,
    active:boolean,
    absence:AbscenceRelation

}