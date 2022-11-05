import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteMailComponent } from './boite-mail.component';

describe('BoiteMailComponent', () => {
  let component: BoiteMailComponent;
  let fixture: ComponentFixture<BoiteMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoiteMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoiteMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
