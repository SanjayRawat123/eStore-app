import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGellaryComponent } from './products-gellary.component';

describe('ProductsGellaryComponent', () => {
  let component: ProductsGellaryComponent;
  let fixture: ComponentFixture<ProductsGellaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsGellaryComponent]
    });
    fixture = TestBed.createComponent(ProductsGellaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
