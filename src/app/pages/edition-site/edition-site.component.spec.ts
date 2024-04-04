import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionSiteComponent } from './edition-site.component';

describe('EditionSiteComponent', () => {
  let component: EditionSiteComponent;
  let fixture: ComponentFixture<EditionSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditionSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
