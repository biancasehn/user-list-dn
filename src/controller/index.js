import { get, updateStatus, create, updateUser } from "../model";

const loadUsers = async () => {
  try {
    const result = await get();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const statusChange = async (idOfChange, statusToChange) => {
  try {
    await updateStatus(idOfChange, statusToChange);
  } catch (error) {
    console.log(error);
  }
};

const userCreation = async (firstName, lastName) => {
  try {
    return await create(firstName, lastName);
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (idOfChange, firstName, lastName) => {
  try {
    return await updateUser(idOfChange, firstName, lastName);
  } catch (error) {
    console.log(error);
  }
};

export { loadUsers, statusChange, userCreation, editUser };
