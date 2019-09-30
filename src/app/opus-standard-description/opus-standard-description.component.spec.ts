import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpusStandardDescriptionComponent } from './opus-standard-description.component';

describe('OpusStandardDescriptionComponent', () => {
  let component: OpusStandardDescriptionComponent;
  let fixture: ComponentFixture<OpusStandardDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpusStandardDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpusStandardDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
