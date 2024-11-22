import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit{

  message!: string = '';

  sendMessage(): void {
    if (this.message.trim()) {
      console.log('Message envoyé:', this.message);
      this.message = ''; // Réinitialise
    }
  }

  /*handleMicClick(): void {
    console.log('Microphone activé');
  }*/ 

  AttachClick(): void {
    console.log('Attachement ouvert');
  }
}
