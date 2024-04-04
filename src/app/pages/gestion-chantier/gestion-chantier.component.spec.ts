import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionChantierComponent } from './gestion-chantier.component';

describe('GestionChantierComponent', () => {
  let component: GestionChantierComponent;
  let fixture: ComponentFixture<GestionChantierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionChantierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
