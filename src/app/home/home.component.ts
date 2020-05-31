import { AppService } from '../services/app-serve.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  corona;
  caseCount;
  totalCount;
  initVal;
  count;

  constructor(private appService : AppService) { }

  ngOnInit(): void {
    this.corona = this.appService.getStates().subscribe(
      data => {
        this.corona = (data as any);	
        console.log(this.corona);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    
    this.caseCount = this.appService.getCaseCount().subscribe(
      data => {
        this.caseCount = (data as any);	
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    this.totalCount = this.appService.getCaseCount().subscribe(
      data => {
        this.totalCount = (data as any).data['unofficial-summary'][0];	
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }

  totalConfirmed(values = []){
    this.initVal = 0;
    values.forEach(element => {
      this.count = element.confirmed;
      this.initVal = this.initVal + this.count;
    });
    return this.initVal;
  }

  totalActive(values = []){
    this.initVal = 0;
    values.forEach(element => {
      this.count = element.active;
      this.initVal = this.initVal + this.count;
    });
    return this.initVal;
  }

  totalRecovered(values = []){
    this.initVal = 0;
    values.forEach(element => {
      this.count = element.recovered;
      this.initVal = this.initVal + this.count;
    });
    return this.initVal;
  }

  totalDeceased(values = []){
    this.initVal = 0;
    values.forEach(element => {
      this.count = element.deceased;
      this.initVal = this.initVal + this.count;
    });
    return this.initVal;
  }

}
