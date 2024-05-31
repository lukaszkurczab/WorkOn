interface WorkoutPlan {
  id: string;
  name: string;
  publicType: string;
  allowedUsers: string[];
  authorId: string;
  public: boolean;
  days: Day[];
}

interface Day {
  id: string;
  name: string;
  exercises: Exercise[];
}
