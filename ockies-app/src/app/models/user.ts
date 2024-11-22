export class User{
  constructor(public avatar :string,
              public name : string,
              public statut :string,
              public stateOnline : boolean, 
              public friendsList :Array<User>, 
              public createdAt : Date ){}


}