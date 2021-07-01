import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelecturedialogComponent } from './deletelecturedialog.component';

describe('DeletelecturedialogComponent', () => {
  let component: DeletelecturedialogComponent;
  let fixture: ComponentFixture<DeletelecturedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletelecturedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelecturedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
