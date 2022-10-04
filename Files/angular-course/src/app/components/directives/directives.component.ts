import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 40;
  font = 'Arial';
  color = 'green';

  classes = [
    'green-title', 
    'small-title'
  ];

  underLine = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }

}
