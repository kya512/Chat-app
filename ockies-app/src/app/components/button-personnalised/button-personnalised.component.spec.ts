import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPersonnalisedComponent } from './button-personnalised.component';

describe('ButtonPersonnalisedComponent', () => {
  let component: ButtonPersonnalisedComponent;
  let fixture: ComponentFixture<ButtonPersonnalisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPersonnalisedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonPersonnalisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
