import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './page/employee/create-employee/create-employee.component';
import { AllEmployeeComponent } from './page/employee/all-employee/all-employee.component';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeserviceService } from './services/employeeservice.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    AllEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
