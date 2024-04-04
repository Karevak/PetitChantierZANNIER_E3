import { Utilisateur } from "./utilisateurs.type";

export type Chantier = {
    id?: number;
    nom: String;
    responsable?:Utilisateur;
    dureeJourEstimee: number;
    date?: string;

}