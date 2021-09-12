import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedEmployeesComponent } from './archived-employees.component';

describe('ArchivedEmployeesComponent', () => {
  let component: ArchivedEmployeesComponent;
  let fixture: ComponentFixture<ArchivedEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
