import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherstackComponent } from './weatherstack.component';

describe('WeatherstackComponent', () => {
  let component: WeatherstackComponent;
  let fixture: ComponentFixture<WeatherstackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherstackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
