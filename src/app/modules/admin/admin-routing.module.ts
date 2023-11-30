import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

  const routes: Routes = [
    {path:'', component:DashboardComponent, children:[
    {path:'forms', component:FormsComponent},
    {path:'sidebar', component:SidebarComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
