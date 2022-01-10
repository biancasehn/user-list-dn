import { API_URL } from "../constants/api";

export const getUsers = async () => {
  const fetchResult = await fetch(`${API_URL}/users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await fetchResult.json();

  return result;
};