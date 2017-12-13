import { Component, OnInit } from '@angular/core';

import { LoggingService } from './../services/logging.service';
import { CustomerService } from './../services/customer.service';
import { Customer } from './../models/customer';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent implements OnInit {
  cust: Customer = new Customer();
  
  constructor(private custService: CustomerService, private logger: LoggingService) { }
  
  addCustomer(): void {    
    var added = this.custService.addCustomer(this.cust);
    if(added)
      this.logger.info(`Added ${this.cust.name}`);
    else
      this.logger.info(`Not added. validations failed maybe?`);
    this.cust = new Customer();
  }
  
  ngOnInit() {
  }

}
