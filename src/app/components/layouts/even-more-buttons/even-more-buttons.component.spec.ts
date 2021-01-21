import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenMoreButtonsComponent } from './even-more-buttons.component';

describe('EvenMoreButtonsComponent', () => {
  let component: EvenMoreButtonsComponent;
  let fixture: ComponentFixture<EvenMoreButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenMoreButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenMoreButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
