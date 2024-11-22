import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    NgStyle
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {


  ngOnInit(): void {
  }

}
