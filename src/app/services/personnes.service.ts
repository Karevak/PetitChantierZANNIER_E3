import { Injectable, inject } from '@angular/core';
import { Utilisateur } from '../pages/models/utilisateurs.type';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {
  httpClient = inject (HttpClient)

  constructor() { }

  public async getPersonnes(){
    return await firstValueFrom(
      this.httpClient.get<Utilisateur[]>('http://localhost:9902/personnes')
      );
    };
  }
