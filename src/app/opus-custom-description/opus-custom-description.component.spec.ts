import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpusCustomDescriptionComponent } from './opus-custom-description.component';

describe('OpusCustomDescriptionComponent', () => {
  let component: OpusCustomDescriptionComponent;
  let fixture: ComponentFixture<OpusCustomDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpusCustomDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpusCustomDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
