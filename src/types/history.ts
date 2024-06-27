import { Series } from './exercises';

export interface HistoryItem {
  id: string;
  date: string;
  plan: string;
  day: string;
  time: number;
  public: boolean;
  exercises: Array<{
    id: string;
    series: Series[];
  }>;
}
