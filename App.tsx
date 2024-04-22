import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/components/navigation/navigation';
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
import UserScreen from './src/screens/userScreen/userScreen';
import LoginScreen from './src/screens/loginScreen/loginScreen';
import RegisterScreen from './src/screens/registerScreen/registerScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  AsyncStorage.clear();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Navigation>
            <Stack.Navigator initialRouteName="LoginScreen">
              <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
              <Stack.Screen name="PlansListScreen" component={PlansListScreen} options={{ headerShown: false }} />
              <Stack.Screen name="PlanDetailsScreen" component={PlanDetailsScreen} options={{ headerShown: false }} />
              <Stack.Screen
                name="ArticlesSelectScreen"
                component={ArticlesSelectScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="ArticlesListScreen" component={ArticlesListScreen} options={{ headerShown: false }} />
              <Stack.Screen name="AtlasScreen" component={AtlasScreen} options={{ headerShown: false }} />
              <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} options={{ headerShown: false }} />
              <Stack.Screen
                name="WorkoutSummaryScreen"
                component={WorkoutSummaryScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="PlanEditScreen" component={PlanEditScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} options={{ headerShown: false }} />
              <Stack.Screen name="CalendarScreen" component={CalendarScreen} options={{ headerShown: false }} />
              <Stack.Screen name="UserScreen" component={UserScreen} options={{ headerShown: false }} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </Navigation>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
