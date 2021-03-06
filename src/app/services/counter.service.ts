import { Injectable } from '@angular/core';
import {Observable, interval, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: Observable<number>;
  private counterInterval: Observable<number>;
  private subject: Subject<number>;

  constructor() {
    // simple counter using interval operator
    this.counterInterval = interval(1000);

    // counter using create operator
    this.counter = this.increaseValueObserver();

    this.subject = new Subject<number>();
    this.increaseValueSubject();
  }

  increaseValueObserver(): Observable<number> {
    return Observable.create(function(observer) {
      let value = 0;
      setInterval(() => {
        observer.next(value++);
      }, 1000);
    });
  }

  increaseValueSubject() {
    let value = 0;
    setInterval(() => {
      this.subject.next(value++);
    }, 1000);
  }

  getCounter(): Observable<number> {
    return this.counter;
  }

  getCounterInterval(): Observable<number> {
    return this.counterInterval;
  }

  getSubjectCounter(): Subject<number> {
    return this.subject;
  }
}
