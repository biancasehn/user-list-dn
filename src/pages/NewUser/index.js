import { useEffect } from "react";
import { Loading, Form, Back } from "../../components";
import { useStore } from "../../services/store";
import { userCreation } from "../../controller";

function NewUser() {
  const {
    loading,
    setLoading,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    setErrorMessage,
  } = useStore();

  const handleUserCreation = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await userCreation(firstName, lastName);
    setErrorMessage(response);
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
    </div>
  );
}

export default NewUser;
