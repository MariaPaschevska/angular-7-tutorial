import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarEditingComponent } from './avatar-editing.component';

describe('AvatarEditingComponent', () => {
  let component: AvatarEditingComponent;
  let fixture: ComponentFixture<AvatarEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
