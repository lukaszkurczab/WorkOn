import { Series } from './exercises';

export interface HistoryItem {
  id: string | null;
  date: Date;
  plan: string;
  day: string;
  time: number;
  public: boolean;
  exercises: Array<{
    id: string;
    series: Series[];
  }>;
}
