import { Component, OnInit } from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;
  subjectCount: number;
  subjectCount2: number;
  avataras: object;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    let subscription1, subscription2, subscription3, subscription4;

    subscription1 = this.counterService.getCounter()
      .subscribe(count => this.count = count);

    subscription2 = this.counterService.getSubjectCounter()
      .subscribe(subjectCount => this.subjectCount = subjectCount);

    subscription3 = this.counterService.getSubjectCounter()
      .subscribe(subjectCount2 => this.subjectCount2 = subjectCount2);

    setTimeout(() => {
      subscription1.unsubscribe();
    }, 20000);

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 5000);

    setTimeout(() => {
      subscription3.unsubscribe();
    }, 10000);


    subscription4 = this.counterService.avatarasOf.subscribe(avataras => this.avataras = avataras);
  }
}
