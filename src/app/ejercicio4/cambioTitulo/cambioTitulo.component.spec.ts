import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cambioTituloComponent } from './cambioTitulo.component';

describe('cambioTituloComponent', () => {
  let component: cambioTituloComponent;
  let fixture: ComponentFixture<cambioTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [cambioTituloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(cambioTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
