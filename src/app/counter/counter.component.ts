import { Component, OnInit, TemplateRef } from '@angular/core';
import {CounterService} from "../counter.service";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {template} from "@angular/core/src/render3";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;
  subjectCount: number;
  subjectCount2: number;
  avataras = [];
  avataras2 = [];
  a = [];

  modalRef: BsModalRef;
  avatarId: number;
  avatarName: string;
  avatarAge: string;
  avatarCountry: string;


  constructor(private counterService: CounterService, private modalService: BsModalService) { }

  ngOnInit() {
    let subscription1, subscription2, subscription3, subscription4, subscription5;

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


    subscription4 = this.counterService.avatarasOf.subscribe(
      avataras => this.avataras = avataras,
      error => console.log('Subscription 4 error', error),
      () => console.log('Subscription 4 completed'));

    subscription5 = this.counterService.avatarasFrom.subscribe(
      avataras2 => {
        this.a.push(avataras2);
        return this.avataras2 = this.a;
      }, error1 => console.log('Subscription 4 error', error1),
      ()=> console.log('Subscription 5 completed')
      );

   }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
