import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from '../exchange-data.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  data="";

  constructor(private exchange:ExchangeDataService) { }

  ngOnInit(): void {
  }

  display()
  {
    console.log(this.data);
    this.exchange.setData(this.data)
    
    
  }

}
