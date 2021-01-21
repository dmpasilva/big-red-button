import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeButtonsComponent } from './three-buttons.component';

describe('ThreeButtonsComponent', () => {
  let component: ThreeButtonsComponent;
  let fixture: ComponentFixture<ThreeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
