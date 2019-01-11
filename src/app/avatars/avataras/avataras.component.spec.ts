import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarasComponent } from './avataras.component';

describe('AvatarasComponent', () => {
  let component: AvatarasComponent;
  let fixture: ComponentFixture<AvatarasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
