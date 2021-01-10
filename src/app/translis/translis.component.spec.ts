import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslisComponent } from './translis.component';

describe('TranslisComponent', () => {
  let component: TranslisComponent;
  let fixture: ComponentFixture<TranslisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
