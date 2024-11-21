import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit {

  userName!:string;
  messageCount!:number;
  
  ngOnInit(): void {
      this.userName = 'johnDoe'
      this.messageCount = 12
  }

}
