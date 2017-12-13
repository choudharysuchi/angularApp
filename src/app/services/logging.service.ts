import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  messages: string[] = [];  
  
  clear() : void {
    this.messages = [];
  }
  
  info(msg: string): void {
    this.messages.unshift(`[INFO] ${msg}`);
  }
  constructor() { }

}
