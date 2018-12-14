import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter: Observable<any>;

  constructor() {
    this.counter = new Observable();
  }
}
