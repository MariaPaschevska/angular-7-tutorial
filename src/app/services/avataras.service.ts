import { Injectable } from '@angular/core';
import {from, Observable, of} from "rxjs";
import {filter} from "rxjs/operators";

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
export class AvatarasService {

  public avatarasOf: Observable<any>;
  public avatarasFrom: Observable<any>;

  constructor() {

    this.avatarasOf = of(avataras);
    this.avatarasFrom = from(avataras);

  }

  getAvatar(id: number): Observable<any> {
    return this.avatarasFrom.pipe(filter(avatar => avatar.id == id));
  }
}
