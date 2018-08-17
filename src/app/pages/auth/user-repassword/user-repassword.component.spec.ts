import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepasswordComponent } from './user-repassword.component';

describe('UserRepasswordComponent', () => {
  let component: UserRepasswordComponent;
  let fixture: ComponentFixture<UserRepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
