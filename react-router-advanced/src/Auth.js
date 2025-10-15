// auth.js (utility file)
export const isAuthenticated = () => {
  // Simulate login status (true = logged in, false = not)
  return localStorage.getItem('isLoggedIn') === 'true';
};
localStorage.setItem('isLoggedIn', 'true');  // login
localStorage.setItem('isLoggedIn', 'false'); // logout
