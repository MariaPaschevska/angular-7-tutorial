import { Component, OnInit } from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.getCounter().subscribe(count => this.count = count);
  }
}
