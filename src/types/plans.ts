import { Exercise } from './exercises';

export interface WorkoutPlan {
  id: string;
  name: string;
  publicType: string;
  allowedUsers: string[];
  authorId: string;
  public: boolean;
  days: Day[];
}

export interface Day {
  id: string;
  name: string;
  exercises: Exercise[];
}
