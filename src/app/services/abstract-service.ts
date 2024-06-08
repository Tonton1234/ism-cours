import { Observable } from "rxjs";
import { RestResponse } from "../core/models/rest.response";

export interface AbstractService<T,> {
    findAll(page:number,keyword:string | null):Observable<RestResponse<T>>;
    create(data:T):Observable<RestResponse<T>>;
}
