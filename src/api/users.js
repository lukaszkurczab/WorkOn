export const fetchUser = async id => {
  try {
    const response = await fetch('https://workon-backend.azurewebsites.net/users/' + id);
    const data = await response.json();
    return { id: data.id, email: data.email, history: data.history, plans: data.plans };
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
};

export const addHistoryItemToUser = async (id, historyItem) => {
  try {
    const response = await fetch('https://workon-backend.azurewebsites.net/users/history/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(historyItem),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
};
