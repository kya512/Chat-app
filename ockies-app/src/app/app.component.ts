import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content/main-content.component';
import { SideMenuComponent } from './side-menu/side-menu/side-menu.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';

@Component({
  selector: 'app-root',
  imports: [
    MainContentComponent,
    SideMenuComponent,
    ParticipantListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ockies-app';
}
