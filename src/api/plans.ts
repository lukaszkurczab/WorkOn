import { BASE_URL } from '../../env';

import { WorkoutPlan } from '../types/plans';
import { getToken } from '../utility/secureStore';

export const fetchPlans = async (): Promise<WorkoutPlan[]> => {
  try {
    const response = await fetch(`${BASE_URL}/plans`);
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
    const response = await fetch(`${BASE_URL}/plans`, {
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

export const updatePlan = async (data: { id: string; updatedPlan: WorkoutPlan }): Promise<WorkoutPlan> => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/plans/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data.updatedPlan),
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
    const response = await fetch(`${BASE_URL}/plans/${id}`, {
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
