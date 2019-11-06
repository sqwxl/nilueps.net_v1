import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesModuleCardComponent } from './classes-module-card.component';

describe('ClassesModuleCardComponent', () => {
  let component: ClassesModuleCardComponent;
  let fixture: ComponentFixture<ClassesModuleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesModuleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesModuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
