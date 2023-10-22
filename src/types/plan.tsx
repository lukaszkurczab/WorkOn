import { Exercise } from "./exercise";

export interface Plan {
  id: string;
  name: string;
  img: string;
  planType: "weekly"|"daily";
  days: PlanDay[]
}

interface PlanDay {
  name: "Monday"|"Tuesday"|"Wednesday"|"Thursday"|"Friday"|"Saturday"|"Sunday";
  exercises: PlanExercise[]
}

interface PlanExercise {
  id: string;
  series: number;
  reps: number;
  weight: number;
}