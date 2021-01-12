import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransverifyComponent } from './transverify.component';

describe('TransverifyComponent', () => {
  let component: TransverifyComponent;
  let fixture: ComponentFixture<TransverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransverifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
