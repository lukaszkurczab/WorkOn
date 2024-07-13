import { Series } from './exercises';

export interface HistoryItem {
  id: string;
  date: Date;
  plan: string;
  day: string;
  time: number;
  publicType: 'public' | 'private';
  exercises: Array<{
    id: string;
    name: string;
    repsRange: [number, number];
    loadIncrease: number;
    series: Series[];
  }>;
}
