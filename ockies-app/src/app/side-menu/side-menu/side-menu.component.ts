import { Component, Input, OnInit } from '@angular/core';
import { UserComponent } from '../../components/user/user.component';
import { User, UserState } from '../../models/user';
import { NgClass } from '@angular/common';
import { UserIconComponent } from '../../components/user-icon/user-icon.component';

@Component({
  selector: 'app-side-menu',
  imports: [ 
    UserComponent,
    UserIconComponent,
    NgClass
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit {
  @Input() currUser! : User; /*instanciation de l'utilisateur actuel */
  @Input() users! :User[];
  onlineUserNumber! : number;

  ngOnInit(): void {
    this.currUser =  new User()// vide car pas encore de requête d'api

    this.users =[
    // Créaction d'une liste de 10 utilisateurs fictifs
   new User(1, "https://media.istockphoto.com/id/1389348844/fr/photo/plan-de-studio-dune-belle-jeune-femme-souriante-debout-sur-un-fond-gris.jpg?s=612x612&w=0&k=20&c=VGipX3a8xrbYuXTNm_61pFuzpGdAO9lwt2xnVUd7Khs=", "Alice", UserState.eating, true),
   new User(2, "https://i.pinimg.com/564x/dc/4d/21/dc4d21953049b5f11687ce7f681c583c.jpg", "Bob", UserState.invisible, true),
   new User(3, "https://media.istockphoto.com/id/1350690621/fr/photo/portrait-dun-homme-asiatique.jpg?s=612x612&w=0&k=20&c=QtVVcI5uRe-yfV7ngHHGSFcsF7R8aYfkq9p6U93FAkU=", "Charlie", UserState.online, true),
   new User(4, "https://i.pinimg.com/564x/dc/4d/21/dc4d21953049b5f11687ce7f681c583c.jpg", "Diana", UserState.online, true),
   new User(5, "https://www.shutterstock.com/image-photo/happy-young-caucasian-girl-smiling-260nw-2486941175.jpg", "Eve", UserState.sleeping, true),
   new User(6, "https://i.pinimg.com/736x/13/37/f8/1337f8213306e4fee48c6a18a0748aa3.jpg", "Frank", UserState.eating, true),
   new User(7, "https://i.pinimg.com/564x/dc/4d/21/dc4d21953049b5f11687ce7f681c583c.jpg", "Grace", UserState.offLine, true),
   new User(8, "https://st4.depositphotos.com/1075946/25185/i/450/depositphotos_251858810-stock-photo-portrait-smiling-man-grey-hair.jpg", "Hank", UserState.online, true),
   new User(9, "https://t3.ftcdn.net/jpg/06/34/59/02/360_F_634590284_wpYosnoN0vM87NRr8r24W0cDz3edGSD2.jpg", "Jung", UserState.online, true),
   new User(10, "https://www.shutterstock.com/image-photo/handsome-happy-african-american-bearded-600nw-2460702995.jpg", "Jack", UserState.offLine, true)
        ]

    this.onlineUserNumber = this.users.filter(user => user.stateOnline ).length // Filtre la liste des utilisateurs en ligne et donne le nombre
    
  }
  

  

}
