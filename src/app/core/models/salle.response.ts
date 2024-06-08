export interface Salle{
    id:number,
    nom:string,
    numero:string,
    nbrePlaces:number,
    active:boolean
}

export interface SalleCreate{
    nom:string,
    numero:string,
    nbrePlaces:number
}