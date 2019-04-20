import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SampleFormComponent} from './sample-form/sample-form.component';


const routes: Routes = [
  {
    path: '',
    component: SampleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleFormsRoutingModule { }
