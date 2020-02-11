import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { lessonsComponent } from './lessons.component';

describe('lessonsComponent', () => {
  let component: lessonsComponent;
  let fixture: ComponentFixture<lessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ lessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(lessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
