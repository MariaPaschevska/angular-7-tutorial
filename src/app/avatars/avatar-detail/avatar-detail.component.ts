import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AvatarasService} from "../../services/avataras.service";

@Component({
  selector: 'app-avatar-detail',
  templateUrl: './avatar-detail.component.html',
  styleUrls: ['./avatar-detail.component.css']
})
export class AvatarDetailComponent implements OnInit {

  id: number;
  avatar: object;

  constructor(
    private route: ActivatedRoute,
    private avatarasService: AvatarasService,
    private router: Router
  ) {
    this.route.params
      .subscribe(
        params => {
          this.id = +params['id'];
        }
      );
  }

  ngOnInit(): void {
    this.getAvatar();
  }

  getAvatar(): void {
    this.avatarasService.getAvatar(this.id)
      .subscribe(
        avatar => {
          this.avatar = avatar;
        },
        error => {
          console.log('Error getAvatar AvatarDetail', error);
        },
        () => {
          console.log('Complete getAvatar AvatarDetail');
        }
      );
  }

  openAvatarEditPage(id) {
    this.router.navigate(['avataras', id, 'edit']);
  }
}
