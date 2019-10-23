import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesModuleDescriptionComponent } from './classes-module-description.component';

describe('ClassesModuleDescriptionComponent', () => {
  let component: ClassesModuleDescriptionComponent;
  let fixture: ComponentFixture<ClassesModuleDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesModuleDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesModuleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
