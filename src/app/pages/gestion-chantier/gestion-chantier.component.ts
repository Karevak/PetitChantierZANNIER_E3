import { Component, inject } from '@angular/core';
import { Chantier } from '../models/chantiers.type';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gestion-chantier',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconButton, RouterLink, DatePipe],
  templateUrl: './gestion-chantier.component.html',
  styleUrl: './gestion-chantier.component.css'
})
export class GestionChantierComponent {
    listeChantiers: Chantier[] = [ ];
    httpClient = inject(HttpClient)
  
    ngOnInit(){
      this.refresh();
  
    }
    refresh(){
      this.httpClient
      .get<Chantier[]>("http://localhost:9902/chantiers")
      .subscribe(listePersonne => (this.listeChantiers = listePersonne));
    }
    supprimeChantier(idChantier? : number) {
      if (idChantier){
        this.httpClient
        .delete("http://localhost:9902/chantier/"+idChantier)
        .subscribe((retour) => this.refresh());
      }
    }
  }
