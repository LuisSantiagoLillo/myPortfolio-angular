import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteLetter2Component } from './write-letter2.component';

describe('WriteLetter2Component', () => {
  let component: WriteLetter2Component;
  let fixture: ComponentFixture<WriteLetter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteLetter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteLetter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
