import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamquestionsComponent } from './examquestions.component';

describe('ExamquestionsComponent', () => {
  let component: ExamquestionsComponent;
  let fixture: ComponentFixture<ExamquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
