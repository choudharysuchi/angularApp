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
  cust: Customer;
  title: string;
  
  constructor(private custService: CustomerService, private logger: LoggingService) { }

  reset(): void {
    this.title = 'Enter your Details';
    this.cust = new Customer();
  }

  log(message: string): void {
    this.logger.info('Base-Form: ' + message);
  }

  addCustomer(): void {
    if (!this.cust.name) {
      this.log('Validations Failded');
      return;
    }
    this.title = 'Wait a sec';
    this.custService.addCustomer(this.cust)
      .subscribe(address => {
        var msg = (address) ? `Address: ${address}` : `Error Occured while getting address of created contract.`;
        this.log(msg);
        this.reset();
      });
  }
  


  ngOnInit() {
    this.reset();
  }

}
