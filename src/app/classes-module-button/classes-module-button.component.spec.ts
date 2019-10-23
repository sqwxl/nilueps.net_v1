import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesModuleButtonComponent } from './classes-module-button.component';

describe('ClassesModuleButtonComponent', () => {
  let component: ClassesModuleButtonComponent;
  let fixture: ComponentFixture<ClassesModuleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesModuleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesModuleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
