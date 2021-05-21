import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { PaisListComponent } from './views/pais-list/pais-list.component';

const routes: Routes = [
  {
    path: 'paisList',
    component: PaisListComponent
  }  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
