import { Component, OnInit, TemplateRef } from '@angular/core';
import {CounterService} from "../services/counter.service";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {template} from "@angular/core/src/render3";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;
  countInterval: number;
  subjectCount: number;
  subjectCount2: number;

  modalRef: BsModalRef;

  constructor(private counterService: CounterService, private modalService: BsModalService) { }

  ngOnInit() {
    let subscription, subscription1, subscription2, subscription3;

    subscription = this.counterService.getCounterInterval()
      .subscribe(countInterval => this.countInterval = countInterval);

    subscription1 = this.counterService.getCounter()
      .subscribe(count => this.count = count);

    subscription2 = this.counterService.getSubjectCounter()
      .subscribe(subjectCount => this.subjectCount = subjectCount);

    subscription3 = this.counterService.getSubjectCounter()
      .subscribe(subjectCount2 => this.subjectCount2 = subjectCount2);

    setTimeout(() => {
      subscription.unsubscribe();
    }, 3000);

    setTimeout(() => {
      subscription1.unsubscribe();
    }, 20000);

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 5000);

    setTimeout(() => {
      subscription3.unsubscribe();
    }, 10000);

   }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
