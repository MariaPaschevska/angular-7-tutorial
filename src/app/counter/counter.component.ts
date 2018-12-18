import { Component, OnInit } from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;
  count2: number;
  subjectCount: number;
  subjectCount2: number;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    let subscription1, subscription2;

    this.counterService.getCounter().subscribe(count => this.count = count);
    this.counterService.getCounter().subscribe(count2 => this.count2 = count2);
    subscription1 = this.counterService.subject.subscribe(subjectCount => this.subjectCount = subjectCount);
    subscription2 = this.counterService.subject.subscribe(subjectCount2 => this.subjectCount2 = subjectCount2);

    setTimeout(() => {
      subscription1.unsubscribe();
    }, 5000);

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 10000);
  }
}
