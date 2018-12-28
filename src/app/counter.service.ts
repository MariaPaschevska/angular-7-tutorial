import { Injectable } from '@angular/core';
import {Observable, interval, Subject, of, from} from "rxjs";

let avataras = [
  {
    id: 1,
    name: 'Krishna',
    age: '4 000 BC',
    country: 'India'
  },
  {
    id: 2,
    name: 'Buddha',
    age: '500 BC',
    country: 'India'
  },
  {
    id: 3,
    name: 'Muhammad',
    age: '570',
    country: 'Saudi Arabia'
  }
];

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: Observable<number>;
  private subject: Subject<number>;
  public avatarasOf: Observable<any>;
  public avatarasFrom: Observable<any>;

  constructor() {
    // simple counter using interval operator
    // this.counter = interval(1000);

    // counter using create operator
    this.counter = this.increaseValueObserver();

    this.subject = new Subject<number>();
    this.increaseValueSubject();

    this.avatarasOf = of(avataras);
    this.avatarasFrom = from(avataras);
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

  getSubjectCounter(): Subject<number> {
    return this.subject;
  }
}
