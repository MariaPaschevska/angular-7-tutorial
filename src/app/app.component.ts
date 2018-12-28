import {Component, OnInit} from '@angular/core';
import {CounterService} from "./services/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  count: number;
  subjectCount: number;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    let subscription1 = this.counterService.getCounter()
      .subscribe(count => this.count = count);

    let subscription2 = this.counterService.getSubjectCounter()
      .subscribe(subjectCount => this.subjectCount = subjectCount);

    setTimeout(() => {
      subscription1.unsubscribe();
    }, 20000);

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 5000);
  }
}
