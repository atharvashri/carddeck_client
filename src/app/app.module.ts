import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { NgDragDropModule } from 'ng-drag-drop';
import { CardDashboardComponent } from './card-dashboard/card-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DragAndDropModule,
    NgDragDropModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
