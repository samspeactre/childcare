import { Component } from '@angular/core';

@Component({
  selector: 'app-hr-compliance',
  templateUrl: './hr-compliance.component.html',
  styleUrl: './hr-compliance.component.css'
})
export class HrComplianceComponent {
  cards = [
    {
      url: '../../assets/dummy.pdf',
      title: 'Agreement.pdf',
    },
    {
      url: '../../assets/dummy.pdf',
      title: 'Compliance.pdf',
    },
    {
      url: '../../assets/dummy.pdf',
      title: 'Policies.pdf',
    },
    {
      url: '../../assets/dummy.pdf',
      title: 'Terms.pdf',
    },
    
  ]

}
