import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: Observable<number>;

  constructor() {
    this.counter = interval(1000);
  }

  getNumber(): Observable<number> {
    return this.counter;
  }
}
