import { Observable } from "rxjs";
import { DtoRequestCalendar, SessionCours, SessionCoursCreate } from "../core/models/sessionCours.response";
import { AbstractService } from "./abstract-service";
import { RestResponse } from "../core/models/rest.response";

export interface AbstractSessionsCours extends AbstractService<SessionCours[]>{
    annuler(page:number,id:number | null):Observable<RestResponse<SessionCours[]>>;
    add(data:SessionCoursCreate):Observable<RestResponse<SessionCoursCreate>>;
    getSessionByUsername(username: string): Observable<RestResponse<DtoRequestCalendar[]>>;

}
