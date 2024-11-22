import { Component, OnInit } from '@angular/core';
import { CharteGraphiqueComponent } from '../../charte-graphique/charte-graphique/charte-graphique.component';

@Component({
  selector: 'app-side-menu',
  imports: [ 
    CharteGraphiqueComponent
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit {

  userName!:string;
  messageCount!:number;
  imageUrl!:string;
  
  ngOnInit(): void {
      this.userName = 'Cookies72'
      this.messageCount = 0
      this.imageUrl = "../../../design/font_interface.JPG"
  }

  onClickIncrement= () => {
   this.messageCount++
  } 


  onClickDecrement= () => {
    this.messageCount--
   } 

}
