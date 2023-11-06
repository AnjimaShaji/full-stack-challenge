import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteconfirmationdialogComponent } from './deleteconfirmationdialog.component';

describe('DeleteconfirmationdialogComponent', () => {
  let component: DeleteconfirmationdialogComponent;
  let fixture: ComponentFixture<DeleteconfirmationdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteconfirmationdialogComponent]
    });
    fixture = TestBed.createComponent(DeleteconfirmationdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
