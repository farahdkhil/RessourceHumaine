import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplProfilComponent } from './empl-profil.component';

describe('EmplProfilComponent', () => {
  let component: EmplProfilComponent;
  let fixture: ComponentFixture<EmplProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
