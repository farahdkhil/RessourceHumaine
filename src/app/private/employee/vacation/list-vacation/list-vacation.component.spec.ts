import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVacationComponent } from './list-vacation.component';

describe('ListVacationComponent', () => {
  let component: ListVacationComponent;
  let fixture: ComponentFixture<ListVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
