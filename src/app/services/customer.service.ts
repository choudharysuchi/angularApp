import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators/tap';
import { catchError } from 'rxjs/operators/catchError';

import { Customer } from './../models/customer';
import { CreateBaseInstrRequest, CreateBaseInstrResponse } from './../models/baseInstruction';
import { LoggingService } from './logging.service';

@Injectable()
export class CustomerService {

  private handleError < T > (operation = 'operation', result ? : T) {
    return (error: any): Observable < T > => {
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }  
  
  //private serverURL = 'http://primary-dabba-vibhumbhardwaj573796.codeanyapp.com:8080';
  private serverURL = 'localhost:8080';
  
  customers: Customer[] = [];
  
  private log(message: string): void {
    this.logger.info('CustomerService: ' + message);
  }
  
  constructor(private http: HttpClient, private logger: LoggingService) {
    
  }
  
  convertRequest(customer: Customer): CreateBaseInstrRequest {
    let request: CreateBaseInstrRequest = new CreateBaseInstrRequest();
    request.customerName = customer.name;
    request.customerDOB = customer.dob;
    request.customerNIID = customer.niid;
    return request;
  }
  
  addCustomer(customer: Customer): Observable<string> {
    return this.http.post(`${this.serverURL}/api/createBaseContract`, this.convertRequest(customer) ).pipe(
      map((res: CreateBaseInstrResponse) => res.contractAddress),
      tap(address => {
        customer.contractAddress = address;
        this.customers.push(customer);
        this.log(`Smart Contract created successfully.`);
      }),
      catchError(this.handleError('createBaseContract', ''))
    );
  }
  
  getAllCustomers() : Customer[] {
    return this.customers;
  }
}