export const fetchExercises = async version => {
  try {
    const response = await fetch('https://workon-backend.azurewebsites.net/exercises', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ version: '1.0' }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
};
