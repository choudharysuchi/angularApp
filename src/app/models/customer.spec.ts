import {Customer} from './customer';

describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });
  
  it('should accept values in the constructor', () => {
    let cust = new Customer({
      name: 'Customer1',
      dob: '02/02/2014',
      niid: 'AB456985C'
    });
    expect(cust.name).toEqual('Customer1');
    expect(cust.dob).toEqual('02/02/2014');
    expect(cust.niid).toEqual('AB456985C');
  });
});