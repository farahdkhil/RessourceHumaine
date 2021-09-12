import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForVacationComponent } from './request-for-vacation.component';

describe('RequestForVacationComponent', () => {
  let component: RequestForVacationComponent;
  let fixture: ComponentFixture<RequestForVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
