import { createNavigationContainerRef } from '@react-navigation/native';

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  MainScreen: undefined;
  CarouselScreen: undefined;
  ManualCreatorScreen: undefined;
  SelectTrainingScreen: undefined;
  TrainingScreen: undefined;
  WorkoutSummary: undefined;
  PlansListScreen: undefined;
  PlanDetailsScreen: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

type ScreenNames = keyof RootStackParamList;

export function navigate(name: ScreenNames, params?: RootStackParamList[ScreenNames]) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
