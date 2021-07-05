import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentallgradesComponent } from './studentallgrades.component';

describe('StudentallgradesComponent', () => {
  let component: StudentallgradesComponent;
  let fixture: ComponentFixture<StudentallgradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentallgradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentallgradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
