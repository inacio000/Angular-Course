import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Inacio';
  age: Number = 20;
  job = 'Programmer';
  hobbies = [
    "Play Football",
    " Play Basketball",
    " Studing",
    " Cooking",
  ];
  car = {
    name: 'Mercedes',
    year: 2018,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
