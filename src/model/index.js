import { API_URL } from "../constants/api";

export const get = async () => {
  const fetchResult = await fetch(`${API_URL}/users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const result = await fetchResult.json();
  return result.sort((a, b) => {
    return a.id - b.id;
  });
};

export const updateStatus = async (id, status) => {
  console.log("status update", status);
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

export const create = async (firstName, lastName) => {
  const data = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: "?",
      last_name: lastName,
      first_name: firstName,
      status: "active",
      created_at: new Date(),
      updated_at: new Date(),
      url: "?",
    }),
  });
  if (data.status == 422) return await data.json();
  return "";
};

export const updateUser = async (id, firstName, lastName) => {
  if (id) {
    const data = await fetch(`${API_URL}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        last_name: lastName,
        first_name: firstName,
      }),
    });
    if (data.status == 422) return await data.json();
    return "";
  }
  return;
};
