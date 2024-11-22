import { User } from "./user";

export class MessageCard{
  constructor(
    public userProfil: User = new User(),
    public content: string = "empty",
    public timestamp: string = "0:00am",
    publicisCurrentUser: boolean = false, // Pour identifier si c'est l'utilisateur actuel
    public isTyping?: boolean, // Pour le message "is typing"
  ){

  }
}