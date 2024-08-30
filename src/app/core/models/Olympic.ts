// TODO: create here a typescript interface for an olympic country

import { Participation } from './Participation';

// Modèle do données pour un pays participant aux JO. Ce modèle est utilisé
// pour définir le type de données retournées par le service olympic.service.ts
// 'export' permet d'importer ce modèle dans d'autres fichiers
export interface Olympic {
  country: string;
  participations: Participation[];
}
