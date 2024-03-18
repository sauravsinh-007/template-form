import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit, OnChanges {
  fullName: any = '';
  phoneNumber: any = '';
  email: any = '';
  dob: any = '';
  gender: any = '';
  city: any = '';
  today: string = '';

  @Output() userData: EventEmitter<any> = new EventEmitter();
  @Input() editData: any;

  constructor() {
    this.today = new Date().toISOString().split('T')[0];
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.editData) {
      this.populateFormFields(this.editData);
    }
  }
  ngOnInit(): void {
  }

  populateFormFields(data: any) {
    this.fullName = data.fullName;
    this.phoneNumber = data.phoneNumber;
    this.email = data.email;
    this.dob = data.dob;
    this.gender = data.gender;
    this.city = data.city;
  }

  onSubmitBtn() {
    const data = {
      fullName: this.fullName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      dob: this.dob,
      gender: this.gender,
      city: this.city
    };

    // Logic to save data to localStorage
    let savedData = JSON.parse(localStorage.getItem('userData') || '[]');
    if (this.editData) {
      const index = savedData.findIndex((item: any) => item.email === this.editData.email);
      if (index !== -1) {
        savedData[index] = data;
      }
    } else {
      savedData.push(data);
    }
    localStorage.setItem('userData', JSON.stringify(savedData));

    this.userData.emit(savedData);

    this.resetFormFields();
  }

  resetFormFields() {
    this.fullName = '';
    this.phoneNumber = '';
    this.email = '';
    this.dob = '';
    this.gender = '';
    this.city = '';
  }

  onInputChange(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }
}

