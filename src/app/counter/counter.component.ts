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

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.getCounter().subscribe(count => this.count = count);
    this.counterService.subject.subscribe(subjectCount => this.subjectCount = subjectCount);
    this.counterService.subject.subscribe(subjectCount2 => this.subjectCount2 = subjectCount2);
  }
}
