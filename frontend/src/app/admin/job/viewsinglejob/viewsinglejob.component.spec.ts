import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsinglejobComponent } from './viewsinglejob.component';

describe('ViewsinglejobComponent', () => {
  let component: ViewsinglejobComponent;
  let fixture: ComponentFixture<ViewsinglejobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewsinglejobComponent]
    });
    fixture = TestBed.createComponent(ViewsinglejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
