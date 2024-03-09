import BACKEND_PORT from '../../.env'

export const fetchExercises = async () => {
  try {
    const response = await fetch(`${BACKEND_PORT}/exercises`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
};