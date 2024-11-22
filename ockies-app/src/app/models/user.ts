// Définition d'une énumération (enum) pour représenter les différents états possibles d'un utilisateur

export enum UserState {
  online = "online", 
  offLine = "offline", 
  invisible = "invisible",
  eating = "currently eating pastas 🍝", 
  sleeping = "sleeping 😴", 
  chilling = "chilling 😎",
}

// Définition de la classe User qui modélise un utilisateur
export class User{
  constructor( 
              public id : number = 1,// ID unique 
              public avatar :string ="https://i.pinimg.com/564x/dc/4d/21/dc4d21953049b5f11687ce7f681c583c.jpg",
              public userName : string ="John Doe",
              public statut :UserState = UserState.eating,
              public stateOnline : boolean = true, 
              public friendsList :Array<User> = []
               ){}

}

