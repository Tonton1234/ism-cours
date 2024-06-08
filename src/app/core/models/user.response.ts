import { Role } from "./role.response"

export interface User{
    id:number,
    nom:string,
    prenom:string,
    username:string,
    password:string,
    roles:Role[],
    active:boolean
}