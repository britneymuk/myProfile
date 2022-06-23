import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {NgbToast} from '@ng-bootstrap/ng-bootstrap';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    // ,NgbToast
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
