import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundtrasferComponent } from './fundtrasfer.component';

describe('FundtrasferComponent', () => {
  let component: FundtrasferComponent;
  let fixture: ComponentFixture<FundtrasferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundtrasferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundtrasferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
