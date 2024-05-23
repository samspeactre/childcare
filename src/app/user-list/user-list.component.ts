import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface User {
  name: string;
  dob: string;
  phoneNumber: string;
  [key: string]: any; 
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  data: User[] = [];
  newUser: User = { name: '', dob: '', phoneNumber: '' };
  selectedUser: User | null = null;
  selectedImage: string | ArrayBuffer | null = null; 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const savedData = localStorage.getItem('userList');
    if (savedData) {
      this.data = JSON.parse(savedData);
    }
  }

  openModal() {
    const modal = document.getElementById('addUserModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('addUserModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  addUser() {
    if (!this.newUser.dob.trim()) {
      return;
    }
  
    this.newUser.dob = this.formatDate(this.newUser.dob);
  
    // if (this.selectedImage) {
    //   this.newUser['image'] = this.selectedImage.toString();
    // }
  
    this.saveUserDataToDatabase(this.newUser);
  
    this.data.push({ ...this.newUser });
    this.saveDataToLocalStorage();
  
    this.newUser = { name: '', dob: '', phoneNumber: '' };
    this.closeModal();
  }

  openEditModal(user: User) {
    this.selectedUser = { ...user };
  }

  closeEditModal() {
    this.selectedUser = null;
  }

  updateUser() {
    if (this.selectedUser) {
      const index = this.data.findIndex(item => item === this.selectedUser);
      if (index !== -1) {
        this.data[index] = { ...this.selectedUser };
  
        if (this.selectedImage) {
          this.data[index]['image'] = this.selectedImage.toString();
        }
  
        this.saveUserDataToDatabase(this.selectedUser);
        this.saveDataToLocalStorage();
        this.closeEditModal();
      }
    }
  }

  deleteUser(user: User) {
    const index = this.data.indexOf(user);
    if (index !== -1) {
      this.data.splice(index, 1);
      this.saveDataToLocalStorage();
    }
  }

  saveUserDataToDatabase(user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    const formData = new FormData();
    Object.keys(user).forEach(key => {
      if (key !== 'image') {
        formData.append(key, user[key]);
      }
    });
    if (user['image']) {
      formData.append('image', user['image']);
    }
  
    this.http.post<any>('http://localhost/childcarephp/employee_data.php', formData, { headers }).subscribe(
      response => {
        console.log('User data saved successfully:', response);
      },
      error => {
        console.error('Error saving user data:', error);
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${JSON.stringify(error.error)}`
          );
        }
      }
    );
  }
  
  formatDate(dateString: string): string {
    if (!dateString) {
      return '';
    }
    const dateParts = dateString.split('-');
    if (dateParts.length !== 3) {
      return '';
    }
    const [year, month, day] = dateParts;
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
    }
  }

  saveDataToLocalStorage() {
    localStorage.setItem('userList', JSON.stringify(this.data));
  }
}
