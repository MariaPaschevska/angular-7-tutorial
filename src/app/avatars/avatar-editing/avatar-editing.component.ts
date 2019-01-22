import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AvatarasService} from "../../services/avataras.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-avatar-editing',
  templateUrl: './avatar-editing.component.html',
  styleUrls: ['./avatar-editing.component.css']
})
export class AvatarEditingComponent implements OnInit {

  id: number;
  avatar: object;

  avatarEditForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    historyTime: new FormControl(''),
    country: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute,
    private avatarasService: AvatarasService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        params => {
          this.id = +params['id'];
        }
      );

    this.getAvatar();
  }

  getAvatar(): void {
    this.avatarasService.getAvatar(this.id)
      .subscribe(
        avatar => {
          this.avatar = avatar;
        },
        error => {
          console.log('Error getAvatar AvatarEditing', error);
        },
        () => {
          console.log('Complete getAvatar AvatarEditing');
        }
      );
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('Submitted Avatar', this.avatarEditForm.value);
  }

  // save(): void {
  //   this.avatarasService.updateAvatar(this.avatar)
  //     .subscribe(() => this.goBack());
  // }

  goBack(): void {
    this.location.back();
  }
}
