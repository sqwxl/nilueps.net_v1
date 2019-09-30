import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpusImageComponent } from './opus-image.component';

describe('OpusImageComponent', () => {
  let component: OpusImageComponent;
  let fixture: ComponentFixture<OpusImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpusImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpusImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
