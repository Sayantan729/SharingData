import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from '../exchange-data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  data;

  constructor(private exchange:ExchangeDataService) { }

  ngOnInit(): void {
    this.exchange.data.subscribe(data=>{this.data=data});
  }

}
