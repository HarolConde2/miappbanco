import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewGeneralComponent } from './components/view-general/view-general.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'mycredits'
  },
  {
    path: 'mycredits',
    component: ViewGeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
