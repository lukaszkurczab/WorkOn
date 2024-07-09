import { createNavigationContainerRef, CommonActions } from '@react-navigation/native';
import { ExerciseData } from '../types/exercises';
import { WorkoutPlan } from '../types/plans';
import { HistoryItem } from '../types/history';

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  MainScreen: undefined;
  CarouselScreen: { firstLogin?: boolean } | any;
  ManualCreatorScreen: undefined;
  SelectTrainingScreen: undefined;
  TrainingScreen: undefined;
  WorkoutSummaryScreen: { workout: HistoryItem; previousScreen?: string } | any;
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

export function resetNavigation(name: ScreenNames, params?: RootStackParamList[ScreenNames]) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name, params }],
    });
  }
}
