import { Role } from "./role.response";

export interface EtudiantRelation{
    id:number,
    nom:string,
    prenom:string,
    username:string,
    password:string,
    active:boolean
    roles:Role[],
    matricule:string,
    tuteur:string
}