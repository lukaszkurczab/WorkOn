export const fetchUser = async id => {
  try {
    const response = await fetch('https://workon-backend.azurewebsites.net/users/' + id);
    const data = await response.json();
    return { id: data.id, email: data.email, history: data.history, plans: data.plans };
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
};
