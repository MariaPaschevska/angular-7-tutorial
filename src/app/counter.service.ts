import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: Observable<number>;
  private start = 0;

  constructor() {
    this.counter = Observable.interval(1000).map(increase => this.start++);
  }

  getNumber(): Observable<number> {
    return this.counter;
  }
}
