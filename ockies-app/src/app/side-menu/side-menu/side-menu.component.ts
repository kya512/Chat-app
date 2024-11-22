import { Component, Input, OnInit } from '@angular/core';
import { UserComponent } from '../../components/user/user.component';
import { User, UserState } from '../../models/user';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  imports: [ 
    UserComponent,
    NgClass
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit {
  @Input() currUser! : User; /*instanciation de l'utilisateur actuel */

   
  ngOnInit(): void {
    this.currUser =  new User()// vide car pas encore de requête d'api
  }
  

  

}
