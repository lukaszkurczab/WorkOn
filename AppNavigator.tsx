import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, RootStackParamList } from './src/utility/navigate';
import { refreshAccessToken } from './src/api/users';
import { jwtDecode } from 'jwt-decode';
import LoginScreen from './src/features/login/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/features/login/screens/RegisterScreen/RegisterScreen';
import MainScreen from './src/features/main/screens/MainScreen';
import TestScreen from './src/features/test/screens/TestScreen';
import CarouselScreen from './src/features/planCreator/screens/CarouselScreen/CarouselScreen';
import LoadingScreen from './src/features/login/screens/LoadingScreen/LoadingScreen';
import { getToken, storeToken } from './src/utility/secureStore';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList>('LoginScreen');

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const accessToken = await getToken('accessToken');
        const rememberMe = await getToken('rememberMe');

        if (accessToken && rememberMe === 'true') {
          const decodedToken: any = jwtDecode(accessToken);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp > currentTime) {
            setInitialRoute('CarouselScreen');
          } else {
            const refreshToken = await getToken('refreshToken');
            if (refreshToken) {
              try {
                const newAccessToken = await refreshAccessToken(refreshToken);
                if (newAccessToken) {
                  await storeToken('accessToken', newAccessToken);
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
        setIsLoading(false);
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
        <Stack.Screen name="TestScreen" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
