import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSpettacoloComponent } from './generate-spettacolo.component';

describe('GenerateSpettacoloComponent', () => {
  let component: GenerateSpettacoloComponent;
  let fixture: ComponentFixture<GenerateSpettacoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateSpettacoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateSpettacoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
