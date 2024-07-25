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
  searchHistory: SearchHistoryItem[];
}

export interface SearchHistoryItem {
  id: string;
  name: string;
  image: string;
  userId: string;
}

export interface UserRecord {
  exercise: string;
  weight: number;
  public: boolean;
}

export interface UserPublicData {
  userId: string;
  username: string;
  plans: WorkoutPlan[];
  history: HistoryItem[];
}
