import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetSoloComponent } from './projet-solo.component';

describe('ProjetSoloComponent', () => {
  let component: ProjetSoloComponent;
  let fixture: ComponentFixture<ProjetSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetSoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
