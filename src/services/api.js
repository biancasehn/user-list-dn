import { API_URL } from "../constants/api";

export const getUsers = async () => {
  const fetchResult = await fetch(`${API_URL}/users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await fetchResult.json();
  return result.sort((a, b) => {
    return a.id - b.id;
  });
};

export const patchUser = async (id, status) => {
  console.log(status);
  if (id) {
    return await fetch(`${API_URL}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: status === "locked" ? "active" : "locked",
      }),
    });
  }
  return;
};
