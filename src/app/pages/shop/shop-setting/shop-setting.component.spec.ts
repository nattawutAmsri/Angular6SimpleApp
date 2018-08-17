import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSettingComponent } from './shop-setting.component';

describe('ShopSettingComponent', () => {
  let component: ShopSettingComponent;
  let fixture: ComponentFixture<ShopSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
