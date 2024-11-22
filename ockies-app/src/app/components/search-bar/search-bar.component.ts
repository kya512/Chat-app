import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit{

  @Output() inputChange = new EventEmitter<string>();
  @Output() buttonClick = new EventEmitter<void>();

  // inspiration du code : https://angular.fr/reactive-forms/value-changes

  searchText = new FormControl(''); // Texte actuel de la barre de recherche
  private subscription!: Subscription;   // Gère l'abonnement au changement de valeur du champ de recherche pour éviter les fuites de mémoire.

   
  ngOnInit(): void {
   // "abonnement" aux changements de valeur du champ de recherche.
   this.searchText.valueChanges.subscribe(value => {
    console.log('current value:', value);
  });
  }
  /*@Output : Indique la propriété envoyant l'information.
  EventEmitter : Emettre l'événement aux composants parents */

 /** Cette Méthode appelée lorsque l'utilisateur clique sur le bouton */
  onButtonClick(): void {
    this.buttonClick.emit();
  }

   /** Pour éviter la surchage et les appels répéter ( ce qui peut faire crash le site ) */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }  
  }

}
