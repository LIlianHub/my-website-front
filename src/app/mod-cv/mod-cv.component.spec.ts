import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCvComponent } from './mod-cv.component';

describe('ModCvComponent', () => {
  let component: ModCvComponent;
  let fixture: ComponentFixture<ModCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
