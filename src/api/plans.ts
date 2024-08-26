import { WorkoutPlan } from '../types/plans';
import { getToken } from '../utility/secureStore';

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

export const fetchAllPlans = async (): Promise<WorkoutPlan[]> => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/plans`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching all plans:', error);
    throw error;
  }
};

export const addPlan = async (data: { userId: string; newPlan: WorkoutPlan }): Promise<WorkoutPlan> => {
  try {
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/plans`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ ...data.newPlan, userId: data.userId }),
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
    const accessToken = await getToken('accessToken');
    const response = await fetch(`${BASE_URL}/plans/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
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
