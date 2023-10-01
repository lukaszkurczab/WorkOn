import { Muscles, MusclesGroup } from "./muscles";

export interface Exercise {
  id: string;
  name: string;
  focusPoints: string;
  startPosition: string;
  process: string;
  groups: MusclesGroup[];
  muscleMain: Muscles[];
  muscleAdditional: Muscles[];
  image: string;
}