import { Component, OnInit } from '@angular/core';
import {AvatarasService} from "../services/avataras.service";

@Component({
  selector: 'app-avataras',
  templateUrl: './avataras.component.html',
  styleUrls: ['./avataras.component.css']
})
export class AvatarasComponent implements OnInit {

  avataras = [];
  avataras2 = [];
  a = [];

  avatarId: number;
  avatarName: string;
  avatarAge: string;
  avatarCountry: string;

  constructor(private avatarasService: AvatarasService) { }

  ngOnInit() {

    this.avatarasService.avatarasOf.subscribe(
      avataras => this.avataras = avataras,
      error => console.log('Subscription avatarasOf error', error),
      () => console.log('Subscription avatarasOf completed'));

    this.avatarasService.avatarasFrom.subscribe(
      avataras2 => {
        this.a.push(avataras2);
        return this.avataras2 = this.a;
      }, error1 => console.log('Subscription avatarasFrom error', error1),
      ()=> console.log('Subscription avatarasFrom completed')
    );
  }

}
