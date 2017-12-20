export class Customer {
  name: string = '';
  dob: string = '';
  niid: string = '';
  contractAddress: string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}