import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewVacationComponent } from './review-vacation.component';

describe('ReviewVacationComponent', () => {
  let component: ReviewVacationComponent;
  let fixture: ComponentFixture<ReviewVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
