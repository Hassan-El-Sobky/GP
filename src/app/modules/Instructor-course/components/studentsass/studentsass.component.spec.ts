import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsassComponent } from './studentsass.component';

describe('StudentsassComponent', () => {
  let component: StudentsassComponent;
  let fixture: ComponentFixture<StudentsassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
