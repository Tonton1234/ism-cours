import { AbscenceRelation } from "./abscence.relation";
import { EmargementRelation } from "./emargement.response.relation";
import { InscriptionRelation } from "./inscription.response.relation";
import { Role } from "./role.response";

export interface Etudiant{
    id:number,
    nom:string,
    prenom:string,
    username:string,
    password:string,
    active:boolean
    roles:Role[],
    matricule:string,
    tuteur:string,
    inscriptions:InscriptionRelation[],
    absences:AbscenceRelation[],
    emargements:EmargementRelation[]

}

export interface EtudiantCreate{
    nom:string,
    prenom:string,
    username:string,
    password:string,
    matricule:string,
    tuteur:string,
  

}