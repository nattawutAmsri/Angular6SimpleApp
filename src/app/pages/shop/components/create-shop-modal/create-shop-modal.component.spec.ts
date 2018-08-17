import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShopModalComponent } from './create-shop-modal.component';

describe('CreateShopModalComponent', () => {
  let component: CreateShopModalComponent;
  let fixture: ComponentFixture<CreateShopModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShopModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShopModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
