import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAccueilComponent } from './element-accueil.component';

describe('ElementAccueilComponent', () => {
  let component: ElementAccueilComponent;
  let fixture: ComponentFixture<ElementAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
