import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AvatarasService} from "../services/avataras.service";

@Component({
  selector: 'app-avatar-detail',
  templateUrl: './avatar-detail.component.html',
  styleUrls: ['./avatar-detail.component.css']
})
export class AvatarDetailComponent implements OnInit {

  avatar: object;

  constructor(
    private route: ActivatedRoute,
    private avatarasService: AvatarasService
  ) {
    this.route.params.subscribe(avatar => this.avatar = avatar);
  }

  ngOnInit(): void {
    this.getAvatar();
  }

  getAvatar(): void {
    this.avatarasService.getAvatar(this.avatar.id)
      .subscribe(avatar => this.avatar = avatar);
  }
}
