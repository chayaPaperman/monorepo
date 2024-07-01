import { Role } from "./role.module";

export interface User {
  userName: string;
  email: string;
  passwordHash: string;
  role: string;

}
