import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalconfirmationComponent } from './approvalconfirmation.component';

describe('ApprovalconfirmationComponent', () => {
  let component: ApprovalconfirmationComponent;
  let fixture: ComponentFixture<ApprovalconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
