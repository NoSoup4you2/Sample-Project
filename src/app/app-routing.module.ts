import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmCreateComponent } from './farm-create/farm-create.component';

const routes: Routes = [

  { path: '', redirectTo: 'FarmEdit', pathMatch: 'full' },
  {
    component: FarmCreateComponent ,
    data: { displayName: 'Edit Farm' },
    path: 'FarmEdit',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
