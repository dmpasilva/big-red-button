import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleButtonsComponent } from './multiple-buttons.component';

describe('MultipleButtonsComponent', () => {
  let component: MultipleButtonsComponent;
  let fixture: ComponentFixture<MultipleButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
