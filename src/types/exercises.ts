export interface Exercise {
  id: string;
  name: string;
  loadIncrease: number;
  repsRange: [number, number];
  series: Series[];
}

export interface ExerciseData {
  id: string;
  name: string;
  focusPoints: string;
  group: string;
  muscleAdditional: string[];
  muscleMain: string[];
  startPostition: string;
  image: string;
}

export interface Series {
  id: string;
  reps: number;
  weight: number;
}
