import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailEditComponent } from './userdetail-edit.component';

describe('UserdetailEditComponent', () => {
  let component: UserdetailEditComponent;
  let fixture: ComponentFixture<UserdetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetailEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
