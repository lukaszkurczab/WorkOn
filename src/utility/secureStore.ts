// utils/secureStore.ts
import * as SecureStore from 'expo-secure-store';

export const storeToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (e) {
    console.error('Error saving token', e);
  }
};

export const getToken = async (key: string) => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (e) {
    console.error('Error getting token', e);
    return null;
  }
};

export const removeToken = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (e) {
    console.error('Error removing token', e);
  }
};
