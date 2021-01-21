import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkyButtonsComponent } from './funky-buttons.component';

describe('FunkyButtonsComponent', () => {
  let component: FunkyButtonsComponent;
  let fixture: ComponentFixture<FunkyButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkyButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkyButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
