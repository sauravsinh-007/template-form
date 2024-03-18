import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  formDataArray: any[] = [];
  editFormData: any;
  constructor() { }
  ngOnInit(){
   this.getUserData()
  }
  getUserData(){
    let userData = localStorage.getItem('userData')
    if (userData) {
      this.formDataArray = JSON.parse(userData)
    }
  }

  receiveData(event: any) {
    console.log('data', event)
    this.formDataArray = event;
    this.getUserData()
    console.log('Form data received in HomeComponent:', this.formDataArray);
  }

  onEdit(data: any) {
    console.log('Edit data received in HomeComponent:', data);
    this.editFormData = data;
  }

}
