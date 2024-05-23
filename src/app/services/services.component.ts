import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  cards = [
    { 
      imageUrl: '../../assets/img/service-1.png', 
      title: 'Service Name', 
      description: 'Lorem ipsum dolor sit amet consectetur. Cursus turpis tristique sit accumsan. Tincidunt mi nam nec tincidunt non.',
      buttonUrl: 'url_for_button_1'
    },
    { 
      imageUrl: '../../assets/img/service-2.png', 
      title: 'Service Name', 
      description: 'Lorem ipsum dolor sit amet consectetur. Cursus turpis tristique sit accumsan. Tincidunt mi nam nec tincidunt non.',
      buttonUrl: 'url_for_button_2'
    },
    { 
      imageUrl: '../../assets/img/service-3.png', 
      title: 'Service Name', 
      description: 'Lorem ipsum dolor sit amet consectetur. Cursus turpis tristique sit accumsan. Tincidunt mi nam nec tincidunt non.',
      buttonUrl: 'url_for_button_3'
    },
    { 
      imageUrl: '../../assets/img/service-4.png', 
      title: 'Service Name', 
      description: 'Lorem ipsum dolor sit amet consectetur. Cursus turpis tristique sit accumsan. Tincidunt mi nam nec tincidunt non.',
      buttonUrl: 'url_for_button_4'
    },
  ];
}
