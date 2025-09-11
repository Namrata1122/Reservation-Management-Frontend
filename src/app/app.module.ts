import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './components/dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { MyReservationsComponent } from './components/reservations/my-reservations/my-reservations.component';
import { CreateReservationComponent } from './components/reservations/create-reservation/create-reservation.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ResourceListComponent } from './components/resources/resource-list/resource-list.component';
import { ResourceCreateComponent } from './components/resources/resource-create/resource-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ReservationsComponent,
    MyReservationsComponent,
    CreateReservationComponent,
    ResourcesComponent,
    ResourceListComponent,
    ResourceCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
