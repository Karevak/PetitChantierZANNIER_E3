import { Component, inject } from '@angular/core';
import { Site } from '../models/site.type';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { MatCard, MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButtonModule, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-gestion-sites',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconButton, RouterLink],
  templateUrl: './gestion-sites.component.html',
  styleUrl: './gestion-sites.component.css'
})
export class GestionSitesComponent {
  listeSites: Site[] = [ ];
  httpClient = inject(HttpClient)

  ngOnInit(){
    this.refresh();

  }
  refresh(){
    this.httpClient
    .get<Site[]>("http://localhost:9902/sites")
    .subscribe(listeSite => (this.listeSites = listeSite));
  }
}
