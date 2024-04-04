import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Chantier } from '../models/chantiers.type';
import { Utilisateur } from '../models/utilisateurs.type';
import { PersonnesService } from '../../services/personnes.service';
@Component({
  selector: 'app-edition-chantier',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,MatInputModule, MatButtonModule , ReactiveFormsModule],
  templateUrl: './edition-chantier.component.html',
  styleUrl: './edition-chantier.component.css'
})
export class EditionChantierComponent {
  httpClient = inject(HttpClient);
  router= inject(Router);
  route= inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);
  personnesService = inject(PersonnesService);

  idChantierModifie?: number;

  listeUtilisateurs: Utilisateur [] = [];

  
  async ngOnInit(){
    this.listeUtilisateurs = await this.personnesService.getPersonnes();

    this.route.params.subscribe((parametres) =>{
      if (parametres['id']) {
        const id = parseInt(parametres['id']);

        if (!isNaN(id)) {
          this.httpClient
            .get('http://localhost:9902/chantier/' + id)
            .subscribe((chantier) => {
              this.idChantierModifie = id;
              this.formulaire.patchValue(chantier);
            });
          }
          }
      });
  }

  formulaire = this.formBuilder.group(
    {
      nom: ["",[Validators.required]],
      dureeJourEstimee: [null,[Validators.required, Validators.pattern(/^\d+$/)]],
      responsable: [null, [Validators.required]]
    }

  )
  onAjoutChantier() {
    if (this.formulaire.valid) {

      const chantier: Chantier = {
        id: this.idChantierModifie,
        nom: this.formulaire.value.nom ?? '',
        dureeJourEstimee: this.formulaire.value.dureeJourEstimee?? 0,
        
        responsable: this.formulaire.value.responsable?? undefined,
        date: new Date().toLocaleString(),

      };

      this.httpClient
          .post('http://localhost:9902/chantier', chantier)
          .subscribe(() => this.router.navigate(['gestion-chantier']));
        };
      
    }
  }
