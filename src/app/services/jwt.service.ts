import { Injectable } from '@angular/core';
import { Utilisateur } from '../pages/models/utilisateurs.type';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getUserFromJwt(): Utilisateur | null{
    const jwt = localStorage.getItem("jwt");

    if (jwt!= null){
      const bodyBased64 = jwt?.split('.')[1];
      const body = atob(bodyBased64);
      const user = JSON.parse(body);
      return user;
    }

    return null;
  }
  deconnexion(){
    localStorage.removeItem('jwt');
  }
}
