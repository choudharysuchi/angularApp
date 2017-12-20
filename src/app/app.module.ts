import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { LoggingService } from './services/logging.service';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    BaseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
