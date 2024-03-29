import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StudentsComponent } from './students/students.component';
import { AddressComponent } from './address/address.component';
import { PhonenoComponent } from './phoneno/phoneno.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UsersComponent,
    AboutusComponent,
    ContactusComponent,
    StudentsComponent,
    AddressComponent,
    PhonenoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
