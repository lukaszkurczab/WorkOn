export const fetchPlans = async () => {
  try {
    const response = await fetch('https://workon-api.azurewebsites.net/plans');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
};
