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

export const removePlanFromUser = async (userId, planId) => {
  try {
    const response = await fetch('https://workon-backend.azurewebsites.net/users/plans/' + userId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: planId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
};

export const editUserPlan = async (userId, plan) => {
  try {
    const response = await fetch('https://workon-backend.azurewebsites.net/users/plans/' + userId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plan),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
};

export const registerUser = async userData => {
  try {
    const response = await fetch('https://workon-backend.azurewebsites.net/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async userData => {
  try {
    const response = await fetch('https://workon-backend.azurewebsites.net/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const updateUserUsername = async userData => {
  try {
    const response = await fetch(`https://workon-backend.azurewebsites.net/users/username/${userData.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newUsername: userData.newUsername }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating username:', error);
    throw error;
  }
};

export const getPublicPlans = async userId => {
  try {
    const response = await fetch(`https://workon-backend.azurewebsites.net/users/public/plans/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching public plans:', error);
    throw error;
  }
};

export const getPublicRecords = async userId => {
  try {
    const response = await fetch(`https://workon-backend.azurewebsites.net/users/public/records/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching public records:', error);
    throw error;
  }
};

export const getPublicHistoryItems = async userId => {
  try {
    const response = await fetch(`https://workon-backend.azurewebsites.net/users/public/history/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching public history items:', error);
    throw error;
  }
};

export const setPublicPlan = async (userId, itemId, isPublic) => {
  try {
    const response = await fetch(
      `https://workon-backend.azurewebsites.net/users/set-public/plans/${userId}/${itemId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isPublic }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error setting public status for plan:`, error);
    throw error;
  }
};

export const setPublicHistoryItem = async (userId, itemId, isPublic) => {
  try {
    const response = await fetch(
      `https://workon-backend.azurewebsites.net/users/set-public/history/${userId}/${itemId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isPublic }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error setting public status for history item:`, error);
    throw error;
  }
};

export const updateUserPassword = async (userId, newPassword) => {
  try {
    const response = await fetch(`https://workon-backend.azurewebsites.net/users/password/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: newPassword }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating user password:`, error);
    throw error;
  }
};

export const setUserRecords = async (userId, records) => {
  try {
    const response = await fetch(`https://workon-backend.azurewebsites.net/users/update-records/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ records: records }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating user records:`, error);
    throw error;
  }
};
