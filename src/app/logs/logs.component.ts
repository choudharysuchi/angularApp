import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../services/logging.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  
  constructor(public logger: LoggingService) { }

  ngOnInit() {
  }

}
