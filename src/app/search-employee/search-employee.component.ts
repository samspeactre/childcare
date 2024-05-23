import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface User {
  name: string;
  dob: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  data: User[] = [];
  filteredUsers: User[] = []; // Declare filteredUsers property
  searchName: string = '';
  searchDob: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Load data from Local Storage if available
    const savedData = localStorage.getItem('userList');
    if (savedData) {
      this.data = JSON.parse(savedData);
    }
  }

  onInput() {
    // Check if both search fields are empty or contain only whitespace
    if (!this.searchName.trim() && !this.searchDob.trim()) {
      // If both search fields are empty, clear the filteredUsers array
      this.filteredUsers = [];
    } else {
      // Otherwise, filter the data based on the search criteria
      this.filteredUsers = this.data.filter(user => {
        // Check if the name matches the searchName if it's not empty
        const nameMatch = !this.searchName.trim() || user.name.toLowerCase().includes(this.searchName.toLowerCase());
        // Check if the dob matches the searchDob if it's not empty
        const dobMatch = !this.searchDob.trim() || user.dob.toLowerCase().includes(this.searchDob.toLowerCase());
        return nameMatch && dobMatch;
      });
    }
  }

  search() {
    // Filter the data based on the search criteria
    this.filteredUsers = this.data.filter(user => {
      // Check if the name matches the searchName if it's not empty
      const nameMatch = !this.searchName.trim() || user.name.toLowerCase().includes(this.searchName.toLowerCase());
      // Check if the dob matches the searchDob if it's not empty
      const dobMatch = !this.searchDob.trim() || user.dob.toLowerCase().includes(this.searchDob.toLowerCase());
      return nameMatch && dobMatch;
    });
  }
  
  
  
  
}
  
  
  
  



