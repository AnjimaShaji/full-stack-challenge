import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelcompanyComponent } from './delcompany.component';

describe('DelcompanyComponent', () => {
  let component: DelcompanyComponent;
  let fixture: ComponentFixture<DelcompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelcompanyComponent]
    });
    fixture = TestBed.createComponent(DelcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
