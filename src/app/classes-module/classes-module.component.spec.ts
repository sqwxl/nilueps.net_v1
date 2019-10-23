import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesModuleComponent } from './classes-module.component';

describe('ClassesModuleComponent', () => {
  let component: ClassesModuleComponent;
  let fixture: ComponentFixture<ClassesModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
