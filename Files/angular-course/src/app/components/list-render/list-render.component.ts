import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {
      name: 'Doguinha', 
      type: 'Dog',
      age: 4
    },
    {
      name: 'Laika', 
      type: 'Dog',
      age: 5
    },
    {
      name: 'Zira', 
      type: 'Cat',
      age: 2
    },
    {
      name: 'Bob', 
      type: 'Hrse',
      age: 3
    }
  ];

  animalDetails = ''

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `The pet ${animal.name} is ${animal.age} years old.`;
  }

  removeAnimal(animal: Animal): void {
    console.log('Removing animals')
    this.animals = this.listService.remove(this.animals, animal);
  }

}