import { Muscles, MusclesGroup } from "./muscles";

export interface Exercise {
  id: string;
  name: string;
  descripion: string;
  group: MusclesGroup;
  muscleMain: Muscles[];
  muscleAdditional: Muscles[];
  image: string;
}