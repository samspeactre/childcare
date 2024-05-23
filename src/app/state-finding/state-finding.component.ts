import { Component } from '@angular/core';

@Component({
  selector: 'app-state-finding',
  templateUrl: './state-finding.component.html',
  styleUrl: './state-finding.component.css'
})
export class StateFindingComponent {
  cards = [
    {
      imageUrl: '',
      title: 'I Love childcare & learning center',
      star: '⭐⭐⭐',
      careCenter: 'Child care learning center',
      contact: '(912) 564 - 2273',
      address: '485 east frontage road sylvania gA 30467',
      status: 'Open',
      Licensed: 'Yes',
      showDetails: false
    },
    {
      imageUrl: '',
      title: 'I Love childcare & learning center',
      star: '⭐⭐⭐',
      careCenter: 'Child care learning center',
      contact: '(912) 564 - 2273',
      address: '485 east frontage road sylvania gA 30467',
      status: 'Open',
      Licensed: 'Yes',
      showDetails: false
    },
    {
      imageUrl: '',
      title: 'I Love childcare & learning center',
      star: '⭐⭐⭐',
      careCenter: 'Child care learning center',
      contact: '(912) 564 - 2273',
      address: '485 east frontage road sylvania gA 30467',
      status: 'Open',
      Licensed: 'Yes',
      showDetails: false
    },
    {
      imageUrl: '',
      title: 'I Love childcare & learning center',
      star: '⭐⭐⭐',
      careCenter: 'Child care learning center',
      contact: '(912) 564 - 2273',
      address: '485 east frontage road sylvania gA 30467',
      status: 'Open',
      Licensed: 'Yes',
      showDetails: false
    },
  ]

  toggleDetails(card: any) {
    card.showDetails = !card.showDetails;
  }
}
