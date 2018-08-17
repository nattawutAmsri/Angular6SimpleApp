import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderShopManageComponent } from './header-shop-manage.component';

describe('HeaderShopManageComponent', () => {
  let component: HeaderShopManageComponent;
  let fixture: ComponentFixture<HeaderShopManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderShopManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderShopManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
