import { Injectable } from '@angular/core';
import { Customer } from './../models/customer';

@Injectable()
export class CustomerService {
  
  customers: Customer[] = [];
  
  constructor() {
    
  }
  
  addCustomer(customer: Customer): boolean {
    //alert('m here');
    if(customer.name) {
      this.customers.push(customer);
      return true;
    } else {
      return false;
    }
  }
  
  getAllCustomers() : Customer[] {
    return this.customers;
  }
}