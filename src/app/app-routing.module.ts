import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResourcesComponent } from './components/resources/resources.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'admindashboard',component:AdminDashboardComponent},
  {path:'userdashboard',component:UserDashboardComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'resources',component:ResourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
