import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionChantierComponent } from './edition-chantier.component';

describe('EditionChantierComponent', () => {
  let component: EditionChantierComponent;
  let fixture: ComponentFixture<EditionChantierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionChantierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditionChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
