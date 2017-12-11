import { Component, Input } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomerService]
})
export class AppComponent {
  title = 'Mr';
  cust: Customer = new Customer();
  
  constructor(private custService : CustomerService) {    
  }
    
  submitData(name) {
    console.log("done");
    console.log(name);
  }
  
  addCustomer() {
    this.custService.addCustomer(this.cust);
    this.cust = new Customer();
  }
}
