import { Component, inject } from '@angular/core';
import { Utilisateur } from '../models/utilisateurs.type';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
import { MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gestion-utilisateur',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconButton, RouterLink, 
    //HttpClientModule
  ],
  templateUrl: './gestion-utilisateur.component.html',
  styleUrl: './gestion-utilisateur.component.css'
})
export class GestionUtilisateurComponent {
  listeUtilisateurs: Utilisateur[] = [ ];
  httpClient = inject(HttpClient)

  ngOnInit(){
    this.refresh();

  }
  refresh(){
    this.httpClient
    .get<Utilisateur[]>("http://localhost:9902/personnes")
    .subscribe(listePersonne => this.listeUtilisateurs = listePersonne);
  }
  supprimeUtilisateur(idUtilisateur? : number) {
    if (idUtilisateur){
      this.httpClient
      .delete("http://localhost:9902/personne/"+idUtilisateur)
      .subscribe((retour) => this.refresh());
    }
  }
}
