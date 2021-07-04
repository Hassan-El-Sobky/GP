import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerProfileComponent } from './viewer-profile.component';

describe('ViewerProfileComponent', () => {
  let component: ViewerProfileComponent;
  let fixture: ComponentFixture<ViewerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
