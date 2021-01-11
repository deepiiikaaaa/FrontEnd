import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenidashComponent } from './benidash.component';

describe('BenidashComponent', () => {
  let component: BenidashComponent;
  let fixture: ComponentFixture<BenidashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenidashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenidashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
