import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableData: any[] = [];
  @Output() editData: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteUserData(data: any) {
    console.log('Deleting user:', data);
    let index = this.tableData.indexOf(data);
    if (index !== -1) {
      this.tableData.splice(index, 1);
      localStorage.setItem('userData', JSON.stringify(this.tableData));
      console.log('User data deleted:', this.tableData);
    }
  }
  editUserData(data: any) {
    this.editData.emit(data);
  }
 
}
