import { Status } from "./Status.interface";

export default interface UserRequest {
  name: string;
  email: string;
  status: Status;
}
