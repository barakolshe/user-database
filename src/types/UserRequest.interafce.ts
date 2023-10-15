import { UserStatus } from "./UserStatus.interface";

export default interface UserRequest {
  name: string;
  email: string;
  status: UserStatus;
}
