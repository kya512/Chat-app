import { Component, EvenEmitter, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit{

  @Output() inputChange = new EventEmitter<string>();
  @Output() buttonClick = new EventEmitter<void>();

  searchText: string = '';

  /*@Output : Indique la propriété envoyant l'information.
  EventEmitter : Emettre l'événement aux composants parents */

  onInputChange(value: string): void {
    this.searchText = value;
    this.inputChange.emit(value);
  }

  onButtonClick(): void {
    this.buttonClick.emit();
  }
}
