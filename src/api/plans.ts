//const BASE_URL = 'https://workon-backend.azurewebsites.net/plans';
//hotspot
//const BASE_URL = 'http://192.168.74.169:4000/plans';
//home
const BASE_URL = 'http://192.168.1.100:4000/plans';
//Tuchów
//const BASE_URL = 'http://192.168.1.25:4000/plans';

import { WorkoutPlan } from '../types/plans';

export const fetchPlans = async (): Promise<WorkoutPlan[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching plans:', error);
    throw error;
  }
};

export const addPlan = async (data: { userId: string; newPlan: WorkoutPlan }): Promise<void> => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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

export const updatePlan = async (id: string, updatedPlan: WorkoutPlan): Promise<WorkoutPlan> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPlan),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating plan:', error);
    throw error;
  }
};

export const deletePlan = async (id: string): Promise<{ message: string }> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting plan:', error);
    throw error;
  }
};
