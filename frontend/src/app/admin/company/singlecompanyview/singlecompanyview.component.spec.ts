import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecompanyviewComponent } from './singlecompanyview.component';

describe('SinglecompanyviewComponent', () => {
  let component: SinglecompanyviewComponent;
  let fixture: ComponentFixture<SinglecompanyviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglecompanyviewComponent]
    });
    fixture = TestBed.createComponent(SinglecompanyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
