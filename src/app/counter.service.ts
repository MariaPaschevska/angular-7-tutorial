import { Injectable } from '@angular/core';
import {Observable, interval, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: Observable<number>;
  private subject: Subject<number>;

  constructor() {
    // simple counter using interval operator
    // this.counter = interval(1000);

    // counter using create operator
    this.counter = Observable.create(function(observer) {
      let value = 0;
      setInterval(() => {
        observer.next(value++);
      }, 1000);
    });

    this.subject = new Subject<number>();
    let value = 0;
    setInterval(() => {
      this.subject.next(value++);
    }, 1000);
    setInterval(() => {
      this.subject.next(value++);
    }, 1000);
  }

  getCounter(): Observable<number> {
    return this.counter;
  }
}
