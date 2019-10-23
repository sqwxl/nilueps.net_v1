import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesModuleImageComponent } from './classes-module-image.component';

describe('ClassesModuleImageComponent', () => {
  let component: ClassesModuleImageComponent;
  let fixture: ComponentFixture<ClassesModuleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesModuleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesModuleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
