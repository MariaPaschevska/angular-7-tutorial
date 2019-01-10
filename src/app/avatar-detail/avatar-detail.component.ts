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
  ) { }

  ngOnInit(): void {
    this.getAvatar();
  }

  getAvatar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.avatarasService.getAvatar(id)
      .subscribe(avatar => this.avatar = avatar);
  }
}
