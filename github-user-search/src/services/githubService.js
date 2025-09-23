import axios from "axios";

export async function fetchUserData(mazbandago) {
  const response = await axios.get(`https://api.github.com/users/${mazbandago}`);
  return response.data;
}
