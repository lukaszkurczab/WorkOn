export interface Exercise {
  id: string;
  name: string;
  loadIncrease: number;
  repsRange: number[];
  series: Series[];
}

export interface Series {
  id: string;
  reps: number;
  weight: number;
}
