import { useEffect } from "react";
import { Loading, Form, Back, Modal } from "../../components";
import { useStore } from "../../services/store";
import { userCreation } from "../../controller";

function NewUser() {
  const {
    loading,
    setLoading,
    setModalOpen,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    setErrorMessage,
  } = useStore();

  const description = `New user successfully created!`;

  const handleUserCreation = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await userCreation(firstName, lastName);
    setErrorMessage(response);
    response == 201 && setModalOpen(true);
    setLoading(false);
  };

  useEffect(() => {
    setFirstName("");
    setLastName("");
    setErrorMessage("");
  }, []);

  return (
    <div className="container">
      <Back />
      <h2>CREATE NEW USER</h2>
      {!!loading ? (
        <Loading />
      ) : (
        <Form handleUserCreation={handleUserCreation} />
      )}
      <Modal description={description} />
    </div>
  );
}

export default NewUser;
