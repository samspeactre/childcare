import { Component } from '@angular/core';

@Component({
  selector: 'app-search-parent',
  templateUrl: './search-parent.component.html',
  styleUrl: './search-parent.component.css'
})
export class SearchParentComponent {
  cards = [
    {
      imageUrl: '../assets/img/employe-card-img.jpeg',
      heading1: 'John Doe',
      num: '+123 456 7890'
    },
    {
      imageUrl: '../assets/img/employe-card-img.jpeg',
      heading1: 'John Doe',
      num: '+123 456 7890'
    },
    {
      imageUrl: '../assets/img/employe-card-img.jpeg',
      heading1: 'John Doe',
      num: '+123 456 7890'
    },
    {
      imageUrl: '../assets/img/employe-card-img.jpeg',
      heading1: 'John Doe',
      num: '+123 456 7890'
    }
  ]
}
