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
    this.route.params.subscribe(avatar => this.avatar = avatar);
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.avatarEditForm.value);
  }

}
