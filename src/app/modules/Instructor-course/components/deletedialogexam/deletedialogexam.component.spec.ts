import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedialogexamComponent } from './deletedialogexam.component';

describe('DeletedialogexamComponent', () => {
  let component: DeletedialogexamComponent;
  let fixture: ComponentFixture<DeletedialogexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedialogexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedialogexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
