// modèle pour les données du graphique

export interface ChartData {
  name: string;
  series: DataSerie[];
}

export interface DataSerie {
  name: string;
  value: number;
}
