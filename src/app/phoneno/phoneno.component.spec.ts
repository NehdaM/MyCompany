import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenoComponent } from './phoneno.component';

describe('PhonenoComponent', () => {
  let component: PhonenoComponent;
  let fixture: ComponentFixture<PhonenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhonenoComponent]
    });
    fixture = TestBed.createComponent(PhonenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
