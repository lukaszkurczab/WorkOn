import { Series } from './exercises';
import { WorkoutPlan } from './plans';
import { HistoryItem } from './history';

export interface User {
  id: string;
  username: string;
  bio: string;
  email: string;
  password: string;
  token?: string;
  plans: WorkoutPlan[];
  history: HistoryItem[];
}

export interface UserRecord {
  exercise: string;
  weight: number;
  public: boolean;
}
