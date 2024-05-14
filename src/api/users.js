const BASE_URL = 'https://workon-backend.azurewebsites.net/users';

export const registerUser = async userData => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async userData => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const updateUserUsername = async userData => {
  try {
    const response = await fetch(`${BASE_URL}/username/${userData.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newUsername: userData.newUsername }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating username:', error);
    throw error;
  }
};

export const getPublicPlans = async userId => {
  try {
    const response = await fetch(`${BASE_URL}/public/plans/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching public plans:', error);
    throw error;
  }
};

export const getPublicRecords = async userId => {
  try {
    const response = await fetch(`${BASE_URL}/public/records/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching public records:', error);
    throw error;
  }
};

export const getPublicHistoryItems = async userId => {
  try {
    const response = await fetch(`${BASE_URL}/public/history/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching public history items:', error);
    throw error;
  }
};

export const setPublicPlan = async (userId, itemId, isPublic) => {
  try {
    const response = await fetch(`${BASE_URL}/set-public/plans/${userId}/${itemId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isPublic }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error setting public status for plan:', error);
    throw error;
  }
};

export const setPublicHistoryItem = async (userId, itemId, isPublic) => {
  try {
    const response = await fetch(`${BASE_URL}/set-public/history/${userId}/${itemId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isPublic }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error setting public status for history item:', error);
    throw error;
  }
};

export const updateUserPassword = async (userId, newPassword, oldPassword) => {
  try {
    const response = await fetch(`${BASE_URL}/password/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword, oldPassword }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating user password:', error);
    throw error;
  }
};

export const setUserRecords = async (userId, records) => {
  try {
    const response = await fetch(`${BASE_URL}/update-records/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ records }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating user records:', error);
    throw error;
  }
};

export const getUserByToken = async token => {
  try {
    const response = await fetch(`${BASE_URL}/auth/${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user by token:', error);
    throw error;
  }
};
