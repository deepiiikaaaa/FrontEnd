import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransdashComponent } from './transdash.component';

describe('TransdashComponent', () => {
  let component: TransdashComponent;
  let fixture: ComponentFixture<TransdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
