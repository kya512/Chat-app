import { User } from "./user";

export class MessageElement{
  constructor(
    public userProfil: User,
    public messageCount : string,
  ){

  }
}