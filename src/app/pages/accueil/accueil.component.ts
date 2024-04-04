import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  age: number = 18;
  listeArticle: any[] = [
    { nom: 'expresso', prix: 2, promo: true },
    { nom: 'latte', prix: 2.5, promo: false },
    { nom: 'cappuccino', prix: 3, promo: true },
  ];
}
