import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentgradeComponent } from './studentgrade.component';

describe('StudentgradeComponent', () => {
  let component: StudentgradeComponent;
  let fixture: ComponentFixture<StudentgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentgradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
