import { createNavigationContainerRef } from '@react-navigation/native';
import { ExerciseData } from '../types/exercises';
import { WorkoutPlan } from '../types/plans';

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  MainScreen: undefined;
  CarouselScreen: { firstLogin?: boolean } | any;
  ManualCreatorScreen: undefined;
  SelectTrainingScreen: undefined;
  TrainingScreen: undefined;
  WorkoutSummary: undefined;
  PlansListScreen: undefined;
  PlanDetailsScreen: { plan: WorkoutPlan; editable: boolean } | any;
  ExerciseAtlasScreen: undefined;
  ExerciseDetailsScreen: { exercise: ExerciseData } | any;
  CalendarScreen: undefined;
  ProfileScreen: undefined;
  SettingsScreen: undefined;
  ChangeUsernameScreen: undefined;
  ChangePasswordScreen: undefined;
  SetPublicPlansScreen: undefined;
  SetPublicWorkoutsScreen: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

type ScreenNames = keyof RootStackParamList;

export function navigate(name: ScreenNames, params?: RootStackParamList[ScreenNames]) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
