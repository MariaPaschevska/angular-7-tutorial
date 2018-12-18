import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { interval } from 'rxjs';
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: Observable<number>;

  constructor() {
    // simple counter using interval operator
    // this.counter = interval(1000);

    // counter using create operator
    this.counter = Observable.create(function(observer) {
      let value = 0;
      setInterval(() => {
        observer.next(value++);
      }, 1000);
    })
  }

  getCounter(): Observable<number> {
    return this.counter;
  }
}
