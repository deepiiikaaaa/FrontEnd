import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserdataComponent } from './edituserdata.component';

describe('EdituserdataComponent', () => {
  let component: EdituserdataComponent;
  let fixture: ComponentFixture<EdituserdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdituserdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
