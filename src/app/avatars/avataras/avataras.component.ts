import {Component, OnInit, TemplateRef} from '@angular/core';
import {AvatarasService} from "../../services/avataras.service";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-avataras',
  templateUrl: './avataras.component.html',
  styleUrls: ['./avataras.component.css']
})
export class AvatarasComponent implements OnInit {

  avataras = [];
  avataras2 = [];
  a = [];
  selectedAvatar: object;
  showAvataras: boolean;
  modalRef: BsModalRef;
  private route: any;

  constructor(
    private route: ActivatedRoute,
    private avatarasService: AvatarasService,
    private modalService: BsModalService,
    private router: Router
  ) {
    this.route.url
      .subscribe(
        () => {
          this.showAvataras = !this.route.children.length;
        }
      );
  }

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

  openAvatarModal(template: TemplateRef<any>, avatar) {
    this.selectedAvatar = avatar;
    this.modalRef = this.modalService.show(template, this.selectedAvatar);
  }

  openAvatarDetailPage(id) {
    this.router.navigate(['avataras', id]);
    this.modalRef.hide();
  }
}
