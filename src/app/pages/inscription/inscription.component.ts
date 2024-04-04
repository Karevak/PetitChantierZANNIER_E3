import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, 
    ReactiveFormsModule, 
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  httpClient = inject(HttpClient);
  formBuilder = inject(FormBuilder);

  emailDejaUtilise:boolean = false;

  formulaire= this.formBuilder.group({
    email:["",[Validators.required, Validators.email]],
    motDePasse:['',[Validators.required]]
  });

ngOnInit(){
  this.formulaire.get('email')?.valueChanges.subscribe(()=> this.emailDejaUtilise = false)
}

  inscription(){
    if(this.formulaire.valid){
      this.httpClient
        .post("http://localhost:9902/inscription",
        this.formulaire.value)
        .subscribe({
          next: (utilisateur) => alert('utilisateur créé'),
          error:(error) => {

            console.log(error);

            if (error.status = 409){
              this.emailDejaUtilise = true;
            }
          }
        });
    };
  }
}
