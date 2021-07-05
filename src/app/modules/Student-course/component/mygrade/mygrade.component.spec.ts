import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygradeComponent } from './mygrade.component';

describe('MygradeComponent', () => {
  let component: MygradeComponent;
  let fixture: ComponentFixture<MygradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MygradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MygradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
