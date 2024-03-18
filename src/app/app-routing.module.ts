import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
 
  {
    path:'myForm',
    component:MyFormComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
