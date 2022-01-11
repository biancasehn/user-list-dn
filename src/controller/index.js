import { getUsers, statusUpdate, createUser } from "../model";

const loadUsers = async () => {
  try {
    const result = await getUsers();
    return result
  } catch (error) {
    console.log(error);
  }
};

const statusChange = async (idStatusChange, statusToChange) => {
  try {
    await statusUpdate(idStatusChange, statusToChange);
  } catch (error) {
    console.log(error);
  }
};

const userCreation = async (firstName, lastName) => {
//   event.preventDefault();
  console.log("oi")
  try {
    await createUser(firstName, lastName);
  } catch (error) {
    console.log(error);
  }
};

export { loadUsers, statusChange, userCreation };
