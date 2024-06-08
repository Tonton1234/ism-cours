export interface JustificationRelation{
    id:number,
    date:string,
    motif:string,
    etat:EtatJustification,
    active:boolean
}
export enum EtatJustification{
    Acceptée,Refusée
}