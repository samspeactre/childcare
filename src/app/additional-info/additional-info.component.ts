import { Component } from '@angular/core';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrl: './additional-info.component.css'
})
export class AdditionalInfoComponent {
  cards = [
    {
      imageUrl: '../assets/img/additional-info1.png',
      date: '23-MAR-2024',
      title: 'Lorem ipsum dolor sit amet,',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque consectetur convallis vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit....'
    },
    {
      imageUrl: '../assets/img/additional-info2.png',
      date: '23-MAR-2024',
      title: 'Lorem ipsum dolor sit amet,',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque consectetur convallis vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit....'
    },
    {
      imageUrl: '../assets/img/additional-info3.png',
      date: '23-MAR-2024',
      title: 'Lorem ipsum dolor sit amet,',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque consectetur convallis vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit....'
    },
    {
      imageUrl: '../assets/img/additional-info4.png',
      date: '23-MAR-2024',
      title: 'Lorem ipsum dolor sit amet,',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque consectetur convallis vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit....'
    },
  ]
}
