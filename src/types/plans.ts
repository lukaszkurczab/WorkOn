import { Exercise } from './exercises';

export interface WorkoutPlan {
  id: string;
  name: string;
  publicType: 'public' | 'private';
  progression: string;
  allowedUsers: string[];
  authorId: string;
  days: Day[];
  waves: Wave[];
}

export interface Day {
  id: string;
  name: string;
  exercises: PlanExercise[];
}

export interface Wave {
  id: string;
  name: string;
  days: string[];
}
