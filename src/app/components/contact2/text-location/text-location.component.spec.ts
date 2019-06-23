import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLocationComponent } from './text-location.component';

describe('TextLocationComponent', () => {
  let component: TextLocationComponent;
  let fixture: ComponentFixture<TextLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
