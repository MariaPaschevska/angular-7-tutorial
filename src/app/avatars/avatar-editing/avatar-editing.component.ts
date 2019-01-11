import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AvatarasService} from "../../services/avataras.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-avatar-editing',
  templateUrl: './avatar-editing.component.html',
  styleUrls: ['./avatar-editing.component.css']
})
export class AvatarEditingComponent implements OnInit {

  avatarId: object;
  avatar: object;

  avatarEditForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    historyTime: new FormControl(''),
    country: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute,
    private avatarasService: AvatarasService,
    private router: Router
  ) {
    this.route.params.subscribe(id => this.avatarId = id);
  }

  ngOnInit(): void {
    this.getAvatar();
  }

  getAvatar(): void {
    this.avatarasService.getAvatar(this.avatarId.id)
      .subscribe(avatar => this.avatar = avatar);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.avatarEditForm.value);
  }

}
