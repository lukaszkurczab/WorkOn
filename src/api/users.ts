//const BASE_URL = 'https://workon-backend.azurewebsites.net/users';
//hotspot
//const BASE_URL = 'http://192.168.74.169:4000/users';
//home
const BASE_URL = 'http://192.168.1.100:4000/users';
//Tuchów
//const BASE_URL = 'http://192.168.1.25:4000/users';

import { WorkoutPlan } from '../types/plans';
import { WorkoutSession } from '../types/users';
import { getToken } from '../utility/secureStore';

export const addHistoryItemToUser = async (userData: { userId: string; historyItem: WorkoutSession }) => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/history/${userData.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ historyItem: userData.historyItem }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
};

export const removePlanFromUser = async (userData: { userId: string; planId: string }) => {
  try {
    const response = await fetch(`${BASE_URL}/plans/${userData.userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: userData.planId }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
};

export const editUserPlan = async (userData: { userId: string; plan: WorkoutPlan }) => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/plans/${userData.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(userData.plan),
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
};

export const addPlanToUser = async (data: { userId: string; newPlan: WorkoutPlan }): Promise<void> => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/plans/${data.userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data.newPlan),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding plan:', error);
    throw error;
  }
};

export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      if (errorResponse.message === 'User already exists with that username') {
        throw new Error('Username is taken');
      } else if (errorResponse.message === 'User already exists with that email') {
        throw new Error('Email is taken');
      }
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (userData: { email: string; password: string }) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const updateUserUsername = async (userData: { userId: string; newUsername: string }) => {
  try {
    const response = await fetch(`${BASE_URL}/username/${userData.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newUsername: userData.newUsername }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating username:', error);
    throw error;
  }
};

export const getPublicPlans = async (userId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/public/plans/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching public plans:', error);
    throw error;
  }
};

export const getPublicRecords = async (userId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/public/records/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching public records:', error);
    throw error;
  }
};

export const getPublicHistoryItems = async (userId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/public/history/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching public history items:', error);
    throw error;
  }
};

export const setPublicPlan = async ({ userId, items }: { userId: string; items: string[] }) => {
  try {
    const response = await fetch(`${BASE_URL}/set-public/plans/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error setting public status for plan:', error);
    throw error;
  }
};

export const setPublicHistoryItem = async ({ userId, items }: { userId: string; items: string[] }) => {
  try {
    const response = await fetch(`${BASE_URL}/set-public/history/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error setting public status for history item:', error);
    throw error;
  }
};

export const updateUserPassword = async ({
  userId,
  newPassword,
  oldPassword,
}: {
  userId: string;
  newPassword: string;
  oldPassword: string;
}) => {
  try {
    const response = await fetch(`${BASE_URL}/password/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword, oldPassword }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating user password:', error);
    throw error;
  }
};

export const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response = await fetch(`${BASE_URL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: refreshToken }),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Network response was not ok');
    }
    const data = await response.json();
    return data.accessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};

export const getData = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
