import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDirectoryService } from './employee-directory.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeDirectoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
