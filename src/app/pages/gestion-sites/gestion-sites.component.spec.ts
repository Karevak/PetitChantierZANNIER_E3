import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSitesComponent } from './gestion-sites.component';

describe('GestionSitesComponent', () => {
  let component: GestionSitesComponent;
  let fixture: ComponentFixture<GestionSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionSitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
