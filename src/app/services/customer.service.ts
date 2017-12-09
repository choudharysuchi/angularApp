import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {
  
  customers: Customer[] = [];
  
  constructor() {
    
  }
  
  addCustomer(customer: Customer) {
    if(customer.name != '') {
      this.customers.push(customer);
      console.log('Customer added');
    } else {
      console.log('Nothing to be added');
    }
  }
  
  getAllCustomers() : Customer[] {
    return this.customers;
  }
}