import { createNavigationContainerRef } from '@react-navigation/native';
import { ExerciseData } from '../types/exercises';

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
  PlanDetailsScreen: undefined;
  ExerciseAtlasScreen: undefined;
  ExerciseDetailsScreen: { exercise: ExerciseData } | any;
  CalendarScreen: undefined;
  ProfileScreen: undefined;
  SettingsScreen: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

type ScreenNames = keyof RootStackParamList;

export function navigate(name: ScreenNames, params?: RootStackParamList[ScreenNames]) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
