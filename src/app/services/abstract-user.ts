import { User } from "../core/models/user.response";
import { AbstractService } from "./abstract-service";

export interface AbstractUser extends AbstractService<User[]>{
}
