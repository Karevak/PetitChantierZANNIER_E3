import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionUtilisateurComponent } from './edition-utilisateur.component';

describe('EditionUtilisateurComponent', () => {
  let component: EditionUtilisateurComponent;
  let fixture: ComponentFixture<EditionUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionUtilisateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditionUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
