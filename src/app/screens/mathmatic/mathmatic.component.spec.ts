import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathmaticComponent } from './mathmatic.component';

describe('MathmaticComponent', () => {
  let component: MathmaticComponent;
  let fixture: ComponentFixture<MathmaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathmaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathmaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
