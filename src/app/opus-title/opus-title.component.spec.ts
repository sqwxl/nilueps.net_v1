import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpusTitleComponent } from './opus-title.component';

describe('OpusTitleComponent', () => {
  let component: OpusTitleComponent;
  let fixture: ComponentFixture<OpusTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpusTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpusTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
