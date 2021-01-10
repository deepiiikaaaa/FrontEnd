import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransdateComponent } from './transdate.component';

describe('TransdateComponent', () => {
  let component: TransdateComponent;
  let fixture: ComponentFixture<TransdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
