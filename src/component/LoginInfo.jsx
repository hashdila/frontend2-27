// LoginInfo.js

// Function to retrieve the login information from the browser storage
export const getLoginInfo = () => {
    // Get the login information from local storage
    const loginInfoString = localStorage.getItem('loginInfo');
    
    // Parse the JSON string to get the object
    const loginInfo = JSON.parse(loginInfoString);
    
    // Return the login information
    return loginInfo;
  };
  