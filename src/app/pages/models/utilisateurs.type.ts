export type Utilisateur = {
    id?: number,
    email: string,
    nom: string,
    prenom: string,
    admin: boolean,
    motDePasse?: string,
    respSite: boolean,
    gestMateriel: boolean,
    listeChantier?: [],
}