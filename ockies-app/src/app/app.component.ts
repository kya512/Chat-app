import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content/main-content.component';
import { SideMenuComponent } from './side-menu/side-menu/side-menu.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    MainContentComponent,
    SideMenuComponent,
    ParticipantListComponent,
    SearchBarComponent,
    NgClass
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ockies-app';

  /*rendre le menu de côté visible ou invisible */
  isSideMenuVisible!: boolean;

  ngOnInit(): void {
      this.isSideMenuVisible = true;
  }

  setSideMenuVisible(){
    this.isSideMenuVisible = true;
  }

  setSideMenuInvisible(){
    this.isSideMenuVisible = false;
  }
}
