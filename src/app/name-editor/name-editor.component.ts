import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  name = new FormControl('');
  updatedValue: string;

  constructor() { }

  ngOnInit() {
    this.name.valueChanges.subscribe(value => this.updatedValue = value);
  }

  updateName() {
    this.name.setValue('Maria');
  }

}
