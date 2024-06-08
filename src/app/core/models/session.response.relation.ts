export interface SessionRelation{
    id:number,
    date:string,
    libelle:string,
    heureDebut:string,
    heureFin:string,
    etat:EtatSessionsCours,
    active:boolean,
    lieu:EtatLieu
}
export enum EtatSessionsCours{
    Planifier,Valider,Annuler,Invalider,Faits
}
export enum EtatLieu{
    Enligne,Présentiel
}