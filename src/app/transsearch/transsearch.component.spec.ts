import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranssearchComponent } from './transsearch.component';

describe('TranssearchComponent', () => {
  let component: TranssearchComponent;
  let fixture: ComponentFixture<TranssearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranssearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
