import { Injectable } from '@angular/core';
import {from, Observable, of} from "rxjs";
import {catchError, filter, tap} from "rxjs/operators";
import {Avatar} from "../avatars/avatar";
import {HttpClient} from "@angular/common/http";

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
  private avatarasUrl = 'api/avataras';

  constructor(
    private http: HttpClient
  ) {
    this.avatarasOf = of(avataras);
    this.avatarasFrom = from(avataras);
  }

  getAvatar(id: number): Observable<any> {
    return from(avataras).pipe(filter(avatar => avatar.id == id));
  }

  updateAvatar() {

  }

  /** get Avataras from the mocked server */
  getAvataras(): Observable<Avatar[]> {
    return this.http.get<Avatar[]>(this.avatarasUrl)
      .pipe(
        tap(_ => console.log('fetched avataras')),
        catchError(console.log('getAvataras error', []))
      );
  }
}
