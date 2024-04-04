import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../models/site.type';
import { MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-edition-site',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,MatInputModule, MatButtonModule, ReactiveFormsModule, MatOptionModule, MatCheckboxModule],
  templateUrl: './edition-site.component.html',
  styleUrl: './edition-site.component.css'
})
export class EditionSiteComponent {
  httpClient = inject(HttpClient);
  router= inject(Router);
  route= inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);
  idSiteModifie?: number;

  
  ngOnInit(){
    this.route.params.subscribe((parametres) =>{
      if (parametres['id']) {
        const id = parseInt(parametres['id']);

        if (!isNaN(id)) {
          this.httpClient
            .get('http://localhost:9902/personne/' + id)
            .subscribe((site) => {
              this.idSiteModifie = id;
              this.formulaire.patchValue(site);
            });
          }
          }
      });
  }

  formulaire = this.formBuilder.group(
    {
      adresse: ["",[Validators.required]],
      nom: ["",[Validators.required]],
      coord: ["",[Validators.required]],
    }

  )
  onAjoutSite() {
    if (this.formulaire.valid) {

      const site: Site = {
        id: this.idSiteModifie,
        nom: this.formulaire.value.nom ?? '',
        adresse: this.formulaire.value.adresse?? '',
        coord: this.formulaire.value.coord?? '',
      };

      this.httpClient
          .post('http://localhost:9902/site', site)
          .subscribe(() => this.router.navigate(['gestion-site']));
    }
  }
}
