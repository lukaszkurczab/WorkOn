import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import MainScreen from './src/screens/mainScreen/mainScreen';
import PlanDetailsScreen from './src/screens/planDetailsScreen/planDetailsScreen';
import PlansListScreen from './src/screens/plansListScreen/plansListScreen';
import ArticlesSelectScreen from './src/screens/articlesSelectScreen/articlesSelectScreen';
import ArticlesListScreen from './src/screens/articlesListScreen/articlesListScreen';
import AtlasScreen from './src/screens/atlasScreen/atlasScreen';
import WorkoutScreen from './src/screens/workoutScreen/workoutScreen';
import WorkoutSummaryScreen from './src/screens/workoutSummaryScreen/workoutSummaryScreen';
import PlanEditScreen from './src/screens/planEditScreen/planEditScreen';
import ExerciseScreen from './src/screens/exerciseScreen/exerciseScreen';
import CalendarScreen from './src/screens/calendarScreen/calendarScreen';
import ProfileScreen from './src/screens/profileScreen/profileScreen';
import LoginScreen from './src/screens/loginScreen/loginScreen';
import RegisterScreen from './src/screens/registerScreen/registerScreen';
import AuthScreen from './src/screens/authScreen/authScreen';
import SettingsScreen from './src/screens/settingsScreen/settingsScreen';
import SelectRecordsScreen from './src/screens/selectRecordsScreen/selectRecordsScreen';
import SelectPublicPlansScreen from './src/screens/selectPublicPlansScreen/selectPublicPlansScreen';
import SelectPublicWorkoutsScreen from './src/screens/selectPublicWorkoutsScreen/selectPublicWorkoutsScreen';
import FindUsersScreen from './src/screens/findUserScreen/findUserScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  AsyncStorage.clear();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle='dark-content' />
          <Stack.Navigator initialRouteName='AuthScreen'>
            <Stack.Screen name='MainScreen' component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name='PlansListScreen' component={PlansListScreen} options={{ headerShown: false }} />
            <Stack.Screen name='PlanDetailsScreen' component={PlanDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ArticlesSelectScreen' component={ArticlesSelectScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ArticlesListScreen' component={ArticlesListScreen} options={{ headerShown: false }} />
            <Stack.Screen name='AtlasScreen' component={AtlasScreen} options={{ headerShown: false }} />
            <Stack.Screen name='WorkoutScreen' component={WorkoutScreen} options={{ headerShown: false }} />
            <Stack.Screen name='WorkoutSummaryScreen' component={WorkoutSummaryScreen} options={{ headerShown: false }} />
            <Stack.Screen name='PlanEditScreen' component={PlanEditScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ExerciseScreen' component={ExerciseScreen} options={{ headerShown: false }} />
            <Stack.Screen name='CalendarScreen' component={CalendarScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name='AuthScreen' component={AuthScreen} options={{ headerShown: false }} />
            <Stack.Screen name='SettingsScreen' component={SettingsScreen} options={{ headerShown: false }} />
            <Stack.Screen name='SelectRecordsScreen' component={SelectRecordsScreen} options={{ headerShown: false }} />
            <Stack.Screen name='SelectPublicPlansScreen' component={SelectPublicPlansScreen} options={{ headerShown: false }} />
            <Stack.Screen name='SelectPublicWorkoutsScreen' component={SelectPublicWorkoutsScreen} options={{ headerShown: false }} />
            <Stack.Screen name='FindUsersScreen' component={FindUsersScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
