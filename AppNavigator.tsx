import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, RootStackParamList } from './src/utility/navigate';
import { refreshAccessToken } from './src/api/users';
import { jwtDecode } from 'jwt-decode';
import LoginScreen from './src/features/login/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/features/login/screens/RegisterScreen/RegisterScreen';
import MainScreen from './src/features/main/screens/MainScreen';
import CarouselScreen from './src/features/planCreator/screens/CarouselScreen/CarouselScreen';
import LoadingScreen from './src/features/login/screens/LoadingScreen/LoadingScreen';
import ManualCreatorScreen from './src/features/planCreator/screens/ManualCreatorScreen/ManualCreatorScreen';
import SelectTrainingScreen from './src/features/training/screens/SelectTrainingScreen/SelectTrainingScreen';
import { getToken, storeToken } from './src/utility/secureStore';
import { useDispatch } from './src/utility/hooks';
import { DECODE_USER_DATA } from './src/store/slice/userSlice';
import { getUserData } from './src/store/actions/userActions';
import TrainingScreen from './src/features/training/screens/TrainingScreen/TrainingScreen';
import WorkoutSummary from './src/features/training/screens/TrainingSummaryScreen/TrainingSummaryScreen';
import PlansListScreen from './src/features/plansList/screens/PlansListScreen/PlansListScreen';
import PlanDetailsScreen from './src/features/plansList/screens/PlanDetailsScreen/PlanDetailsScreen';
import ExerciseAtlasScreen from './src/features/exerciseAtlas/screens/ExerciseAtlasScreen/ExerciseAtlasScreen';
import ExerciseDetailsScreen from './src/features/exerciseAtlas/screens/ExerciseDetailsScreen/ExereciseDetailsScreen';
import CalendarScreen from './src/features/history/screens/CalendarScreen/CalendarScreen';
import ProfileScreen from './src/features/userProfile/screens/ProfileScreen/ProfileScreen';
import SettingsScreen from './src/features/userProfile/screens/SettingsScreen/SettingsScreen';
import SetPublicPlansScreen from './src/features/userProfile/screens/SetPublicPlansScreen/SetPublicPlansScreen';
import SetPublicWorkoutsScreen from './src/features/userProfile/screens/SetPublicWorkoutsScreen/SetPublicWorkoutsScreen';
import ChangePasswordScreen from './src/features/userProfile/screens/ChangePasswordScreen/ChangePasswordScreen';
import ChangeUsernameScreen from './src/features/userProfile/screens/ChangeUsernameScreen/ChangeUsernameScreen';
import { useSelector } from 'react-redux';
import { RootState } from './src/store/store';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList>('LoginScreen');
  const trainingActivity = useSelector((state: RootState) => state.training.lastActivity);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const accessToken = await getToken('accessToken');
        const rememberMe = await getToken('rememberMe');

        if (accessToken && rememberMe === 'true') {
          const decodedToken: any = jwtDecode(accessToken);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp > currentTime) {
            dispatch(DECODE_USER_DATA(accessToken));
            dispatch(getUserData(accessToken));
            setInitialRoute('MainScreen');
          } else {
            const refreshToken = await getToken('refreshToken');

            if (refreshToken) {
              try {
                const newAccessToken = await refreshAccessToken(refreshToken);
                if (newAccessToken) {
                  await storeToken('accessToken', newAccessToken);
                  dispatch(DECODE_USER_DATA(newAccessToken));
                  dispatch(getUserData(newAccessToken));
                  setInitialRoute('MainScreen');
                }
              } catch (error) {
                console.error('Error refreshing token:', error);
              }
            }
          }
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        checkTrainingActivity();
        setIsLoading(false);
      }
    };

    const checkTrainingActivity = () => {
      if (trainingActivity !== null && Date.now() - trainingActivity < 1800000) {
        setInitialRoute('TrainingScreen');
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="CarouselScreen" component={CarouselScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SelectTrainingScreen" component={SelectTrainingScreen} />
        <Stack.Screen name="ManualCreatorScreen" component={ManualCreatorScreen} />
        <Stack.Screen name="TrainingScreen" component={TrainingScreen} />
        <Stack.Screen name="WorkoutSummaryScreen" component={WorkoutSummary} />
        <Stack.Screen name="PlansListScreen" component={PlansListScreen} />
        <Stack.Screen name="PlanDetailsScreen" component={PlanDetailsScreen} />
        <Stack.Screen name="ExerciseAtlasScreen" component={ExerciseAtlasScreen} />
        <Stack.Screen name="ExerciseDetailsScreen" component={ExerciseDetailsScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
        <Stack.Screen name="SetPublicPlansScreen" component={SetPublicPlansScreen} />
        <Stack.Screen name="SetPublicWorkoutsScreen" component={SetPublicWorkoutsScreen} />
        <Stack.Screen name="ChangeUsernameScreen" component={ChangeUsernameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
