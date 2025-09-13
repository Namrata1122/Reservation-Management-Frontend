import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { AuthGaurdService } from './Services/authGaurd.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'resources',component:ResourcesComponent},
  {path:'dashboard',component:DashboardComponent},
  {
    path:'userdashboard',
    component:UserDashboardComponent,
    canActivate: [AuthGaurdService],
    data:{expectedRole: 'user'}
  },
  {
    path:'admindashboard',
    component:AdminDashboardComponent,
    canActivate: [AuthGaurdService],
    data:{expectedRole: 'admin'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
