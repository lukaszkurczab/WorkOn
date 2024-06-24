import { Exercise } from '../types/exercises';

const EXERCISE_BASE_URL = 'https://workon-backend.azurewebsites.net/exercises';

export const fetchExercises = async (version = '1.0') => {
  try {
    const response = await fetch(`${EXERCISE_BASE_URL}/${version}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching exercises:', error);
    throw error;
  }
};

export const addExercise = async (newExercise: Exercise) => {
  try {
    const response = await fetch(EXERCISE_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newExercise),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding exercise:', error);
    throw error;
  }
};

export const updateExercise = async (id: string, updatedExercise: Exercise) => {
  try {
    const response = await fetch(`${EXERCISE_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedExercise),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating exercise:', error);
    throw error;
  }
};

export const deleteExercise = async (id: string) => {
  try {
    const response = await fetch(`${EXERCISE_BASE_URL}/${id}`, {
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
    console.error('Error deleting exercise:', error);
    throw error;
  }
};
