import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContinentListComponent } from './continent-list/continent-list.component';
import { AddContinentComponent } from './add-continent/add-continent.component';



const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'continents' },
  { path: '', component: ContinentListComponent },
  { path: 'add', component: AddContinentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

