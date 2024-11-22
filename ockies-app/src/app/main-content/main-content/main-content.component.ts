import { Component, OnInit} from '@angular/core';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
@Component({
  selector: 'app-main-content',
  imports: [
    SearchBarComponent
],

  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {

  messages = [
    { content: 'Salut, comment ça va ?', isSender: false },
    { content: 'Ça va bien, merci ! Et toi ?', isSender: true },
    { content: 'Je vais bien aussi, merci.', isSender: false },
    { content: 'Cool, tu fais quoi en ce moment ?', isSender: true }
  ];

  MessageFromUser(message: { content: string; isSender: boolean }): boolean {
    return message.isSender;
  }  /*vérifier si le message est envoyé par l'utilisateur
  return boolean, True si le message est envoyé par l'utilisateur, False sinon
  */

  ngOnInit(): void {
      
  }

}
