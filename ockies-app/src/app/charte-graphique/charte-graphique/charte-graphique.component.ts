import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charte-graphique',
  imports: [],
  templateUrl: './charte-graphique.component.html',
  styleUrl: './charte-graphique.component.css'
})
export class CharteGraphiqueComponent implements OnInit{
    
  name!:string;
  count!:number;

  ngOnInit(): void {
    this.name = "Cookie Monster",
    this.count = 0
  }

   onIncrement = () =>{
    this.count++
   }

   onDecrement = () =>{
    this.count == 0 ? 0 : this.count--
   }

}
