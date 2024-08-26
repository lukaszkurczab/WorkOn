import { WorkoutPlan } from '../types/plans';
import { HistoryItem } from '../types/history';
import { getToken } from '../utility/secureStore';
import { SearchHistoryItem } from '../types/users';

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const addHistoryItemToUser = async (userData: { userId: string; historyItem: HistoryItem }) => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/users/history/${userData.userId}`, {
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
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/users/plans/${userData.userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
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
    const response = await fetch(`${BASE_URL}/users/plans/${userData.userId}`, {
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

export const addPlanToUser = async (data: { userId: string; newPlan: WorkoutPlan }): Promise<WorkoutPlan> => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/users/plans/${data.userId}`, {
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
    const response = await fetch(`${BASE_URL}/users/register`, {
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
    const response = await fetch(`${BASE_URL}/users/login`, {
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

export const updateUserUsername = async (userData: { userId: string; newUsername: string; password: string }) => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/users/username/${userData.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ newUsername: userData.newUsername, password: userData.password }),
    });
    if (!response.ok) {
      if (response.status === 401) {
        console.log('Error: Invalid password');
      } else if (response.status === 409) {
        console.log('Error: Username taken');
      } else throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating username:', error);
    throw error;
  }
};

export const getPublicPlans = async (userId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/users/public/plans/${userId}`, {
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
    const response = await fetch(`${BASE_URL}/users/public/records/${userId}`, {
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
    const response = await fetch(`${BASE_URL}/users/public/history/${userId}`, {
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

export const setPublicPlan = async ({ userId, items }: { userId: string; items: WorkoutPlan[] }) => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/users/set-public/plans/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
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

export const setPublicHistoryItem = async ({
  userId,
  items,
  publicType,
}: {
  userId: string;
  items: HistoryItem[];
  publicType: 'public' | 'private';
}) => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/users/set-public/history/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ items, publicType }),
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
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/users/password/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ newPassword, oldPassword }),
    });
    if (!response.ok) {
      if (response.status === 401) {
        console.log('Error: Invalid password');
      } else throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating user password:', error);
    throw error;
  }
};

export const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response = await fetch(`${BASE_URL}/users/token`, {
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
    const response = await fetch(`${BASE_URL}/users/${token}`, {
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

export const removeSearchHistoryItemFromUser = async (userData: { userId: string; itemId: string }) => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/users/search-history/${userData.userId}/${userData.itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to remove search history item');
    }
    return await response.json();
  } catch (error) {
    console.error('Error removing search history item:', error);
    throw error;
  }
};

export const clearSearchHistoryForUser = async (userId: string) => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/users/search-history/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to clear search history');
    }
    return await response.json();
  } catch (error) {
    console.error('Error clearing search history:', error);
    throw error;
  }
};

export const searchUsers = async (userId: string, query: string, maxResults?: number) => {
  try {
    const accessToken = await getToken('accessToken');
    const url = `${BASE_URL}/users/search/${userId}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query, maxResults }),
    });

    if (!response.ok) {
      throw new Error('Failed to search users');
    }

    return await response.json();
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export const searchUser = async (userData: { userId: string; searchHistoryItem: SearchHistoryItem }) => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/users/search-user/${userData.userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(userData.searchHistoryItem),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error in searching user and adding to history:', error);
    throw error;
  }
};
