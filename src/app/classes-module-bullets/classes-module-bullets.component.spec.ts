import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesModuleBulletsComponent } from './classes-module-bullets.component';

describe('ClassesModuleBulletsComponent', () => {
  let component: ClassesModuleBulletsComponent;
  let fixture: ComponentFixture<ClassesModuleBulletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesModuleBulletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesModuleBulletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
