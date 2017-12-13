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
  
  private log(message: string) {
    this.logger.info('Base-Form: ' + message);
  }
  
  private added(address: string) {
    if (address) {
      this.logger.info(`Address: ${address}`);
    } else
      this.logger.info(`Error Occured`);
    this.cust = new Customer();
  }
  
  addCustomer(): void {
    if (!this.cust.name) {
      this.logger.info('Validations Failded');
      return;
    }
    this.custService.addCustomer(this.cust).subscribe(this.added);

  }
  
  ngOnInit() {
  }

}
