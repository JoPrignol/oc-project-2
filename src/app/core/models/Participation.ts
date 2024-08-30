// TODO: create here a typescript interface for a participation
/*
example of participation:
{
    id: 1,
    year: 2012,
    city: "Londres",
    medalsCount: 28,
    athleteCount: 372
}
*/
// Modèle de données pour une participation à un JO
export interface Participation {
  year: number;
  city: string;
  medalsCount: number;
  athleteCount: number;
}
