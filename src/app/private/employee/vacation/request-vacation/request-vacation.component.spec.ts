import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVacationComponent } from './request-vacation.component';

describe('RequestVacationComponent', () => {
  let component: RequestVacationComponent;
  let fixture: ComponentFixture<RequestVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
