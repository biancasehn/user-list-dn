import { Form } from "../../components"
import { useStore } from "../../services/store";
import { userCreation } from "../../controller"

function EditUser() {
  const {
   firstName,
   lastName,
  } = useStore();

  return (
    <div className="container">
      <h2>EDIT USER</h2>
      <Form onSubmit={userCreation(firstName, lastName)} />
    </div>
  );
}

export default EditUser;