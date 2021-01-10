import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeniaddComponent } from './beniadd.component';

describe('BeniaddComponent', () => {
  let component: BeniaddComponent;
  let fixture: ComponentFixture<BeniaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeniaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeniaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
