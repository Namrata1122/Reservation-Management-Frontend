import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { MyReservationsComponent } from './components/reservations/my-reservations/my-reservations.component';
import { CreateReservationComponent } from './components/reservations/create-reservation/create-reservation.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ResourceListComponent } from './components/resources/resource-list/resource-list.component';
import { ResourceCreateComponent } from './components/resources/resource-create/resource-create.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StepOneComponent } from './components/registration/step-one/step-one.component';
import { StepTwoComponent } from './components/registration/step-two/step-two.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ReservationsComponent,
    MyReservationsComponent,
    CreateReservationComponent,
    ResourcesComponent,
    ResourceListComponent,
    ResourceCreateComponent,
    RegistrationComponent,
    StepOneComponent,
    StepTwoComponent,
    DashboardComponent,
    UserDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
