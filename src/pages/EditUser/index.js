import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading, Form, Back } from "../../components";
import { useStore } from "../../services/store";
import { editUser } from "../../controller";

function EditUser() {
  const {
    loading,
    setLoading,
    firstName,
    lastName,
    idOfChange,
    setErrorMessage,
  } = useStore();

  const handleEditUser = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await editUser(idOfChange, firstName, lastName);
    setErrorMessage(response);
    setLoading(false);
  };

  useEffect(() => {
    setErrorMessage("");
  }, []);

  return (
    <div className="container">
      <Back />
      <h2>{`EDIT USER`}</h2>
      {!!loading ? (
        <Loading />
      ) : !idOfChange ? (
        <h3>
          Select an user from the <Link to={"/"}>list</Link>
        </h3>
      ) : (
        <div>
          <h4>{`${firstName} ${lastName}`}</h4>
          <Form handleEditUser={handleEditUser} />
        </div>
      )}
    </div>
  );
}

export default EditUser;
