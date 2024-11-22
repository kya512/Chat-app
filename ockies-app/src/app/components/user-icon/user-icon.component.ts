import { Component, Input, OnInit } from '@angular/core';
import { User,UserState } from '../../models/user';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-user-icon',
  imports: [NgClass ,
    NgStyle
  ],
  templateUrl: './user-icon.component.html',
  styleUrl: './user-icon.component.css'
})


export class UserIconComponent implements OnInit{
   @Input() user! :User ;
   isLoading! : boolean ;

   ngOnInit(): void {
    if (!this.user) {
      this.user = new User(); // Si il n'y a pas d'object pour l'utilisateur on utilise celui par défaut
    }
    this.isLoading = true;
    setTimeout(()=>{                        
      this.isLoading = false;
     }, 2000);
   }


   
}
