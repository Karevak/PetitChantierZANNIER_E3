import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Utilisateur } from '../models/utilisateurs.type';
import { JwtService } from '../../services/jwt.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  httpClient = inject(HttpClient);
  router= inject(Router);
  route= inject(ActivatedRoute);
  formBuilder = inject(FormBuilder);
  jwtService = inject(JwtService);

  utilisateur?: Utilisateur | null =  null;

  ngOnInnit(){
    this.utilisateur = this.jwtService.getUserFromJwt();
  }

  formulaire= this.formBuilder.group({
    email:["",[Validators.required, Validators.email]],
    motDePasse:['',[Validators.required]]
  });
  connexion(){
    if(this.formulaire.valid){
      this.httpClient.post(
        "http://localhost:9902/login",
        this.formulaire.value, {
          responseType:"text"
        ,})
        .subscribe((jwt)=>{
          localStorage.setItem('jwt',jwt)
          this.router.navigateByUrl('/accueil');
    });
  }
  }
  deconnexion(){
    this.jwtService.deconnexion();
    this.router.navigateByUrl("/accueil");
  }
}

