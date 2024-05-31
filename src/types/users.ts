interface User {
  id: string;
  username: string;
  bio: string;
  email: string;
  password: string;
  token?: string;
  plans: WorkoutPlan[];
  history: WorkoutSession[];
}

interface UserRecord {
  exercise: string;
  weight: number;
  public: boolean;
}

interface WorkoutSession {
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
