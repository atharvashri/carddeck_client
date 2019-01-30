import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { NgDragDropModule } from 'ng-drag-drop';
import { CardDashboardComponent } from './card-dashboard/card-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppRoutes } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    CardDashboardComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DragAndDropModule,
    NgDragDropModule.forRoot(),
    CommonModule,
    RouterModule.forRoot(AppRoutes),
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
