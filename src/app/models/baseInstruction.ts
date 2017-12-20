export class CreateBaseInstrRequest {
  customerName: string;
  customerDOB: string;
  customerNIID: string;
}

export class CreateBaseInstrResponse {
  success: Boolean;
  contractAddress: string;
}
