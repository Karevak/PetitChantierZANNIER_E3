import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateurs.type';
import { MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-edition-utilisateur',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,MatInputModule, MatButtonModule, ReactiveFormsModule, MatOptionModule, MatCheckboxModule],
  templateUrl: './edition-utilisateur.component.html',
  styleUrl: './edition-utilisateur.component.css'
})
export class EditionUtilisateurComponent {
  httpClient = inject(HttpClient);
  router= inject(Router);
  route= inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);
  idUtilisateurModifie?: number;

  
  ngOnInit(){
    this.route.params.subscribe((parametres) =>{
      if (parametres['id']) {
        const id = parseInt(parametres['id']);

        if (!isNaN(id)) {
          this.httpClient
            .get('http://localhost:9902/personne/' + id)
            .subscribe((utilisateur) => {
              this.idUtilisateurModifie = id;
              this.formulaire.patchValue(utilisateur);
            });
          }
          }
      });
  }

  formulaire = this.formBuilder.group(
    {
      prenom: ["",[Validators.required]],
      nom: ["",[Validators.required]],
      email: ["",[Validators.required, Validators.email]],
      motDePasse: ["",[Validators.required]],
      respSite: [false],
      gestMateriel: [false],
    }

  )
  onAjoutUtilisateur() {
    if (this.formulaire.valid) {

      const utilisateur: Utilisateur = {
        id: this.idUtilisateurModifie,
        admin: false,
        respSite: false,
        gestMateriel: false,
        email: this.formulaire.value.email ?? '',
        nom: this.formulaire.value.nom ?? '',
        prenom: this.formulaire.value.prenom ?? '',
        motDePasse: this.formulaire.value.motDePasse?? '',
      };

      this.httpClient
          .post('http://localhost:9902/edition-utilisateur', utilisateur)
          .subscribe(() => this.router.navigate(['gestion-utilisateur']));
    }
  }
}
