import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderCrudComponent } from './gender-crud.component';

describe('GenderCrudComponent', () => {
  let component: GenderCrudComponent;
  let fixture: ComponentFixture<GenderCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
