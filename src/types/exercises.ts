interface Exercise {
  id: string;
  name: string;
  loadIncrease: number;
  repsRange: [number, number];
  series: Series[];
}

interface Series {
  id: number;
  reps: number;
  weight: number;
}
