import { Exercise } from './exercises';

export interface WorkoutPlan {
  id: string;
  name: string;
  publicType: 'public' | 'private';
  allowedUsers: string[];
  authorId: string;
  days: Day[];
}

export interface Day {
  id: string;
  name: string;
  exercises: Exercise[];
}
