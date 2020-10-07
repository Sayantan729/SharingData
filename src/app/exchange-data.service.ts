import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {
  data=new BehaviorSubject('Initial Message');

  constructor() { }

  setData(data)
  {
    this.data.next(data);

  }
}
