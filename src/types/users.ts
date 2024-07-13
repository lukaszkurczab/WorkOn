import { WorkoutPlan } from './plans';
import { HistoryItem } from './history';

export interface UserSettings {
  defaultHistoryPublicType: 'public' | 'private';
}

export interface User {
  id: string;
  username: string;
  bio: string;
  email: string;
  password: string;
  token?: string;
  plans: WorkoutPlan[];
  history: HistoryItem[];
  settings: UserSettings;
}

export interface UserRecord {
  exercise: string;
  weight: number;
  public: boolean;
}
