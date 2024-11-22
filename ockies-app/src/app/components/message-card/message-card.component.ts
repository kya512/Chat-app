import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { MessageCard } from '../../models/message-card';
import { NgClass } from '@angular/common';
import { UserIconComponent } from '../user-icon/user-icon.component';

@Component({
  selector: 'app-message-card',
  imports: [NgClass,
    UserIconComponent
  ],
  templateUrl: './message-card.component.html',
  styleUrl: './message-card.component.css'
})
export class MessageCardComponent implements OnInit {
  @Input() message! : MessageCard;
  isLoading! : boolean ;

  ngOnInit(): void {

    if (!this.message){
      this.message = new MessageCard();
    }

      this.isLoading = true;
      setTimeout(()=>{                        
        this.isLoading = false;
       },2100)

  }
}