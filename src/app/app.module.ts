import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewallComponent } from './viewall/viewall.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const myroutes=[
  {path:"",component:AddComponent},
  {path:"view",component:ViewallComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewallComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 RouterModule.forRoot(myroutes),
 HttpClientModule,
 FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
