import { useStore } from "../../services/store";
import styles from "./form.module.css";

function Form({ handleUserCreation, handleEditUser }) {
  const { firstName, setFirstName, lastName, setLastName, errorMessage } =
    useStore();

  return (
    <form
      className={styles.form}
      onSubmit={!!handleUserCreation ? handleUserCreation : handleEditUser}
    >
      {/* FIRST NAME */}
      <div>
        <label>
          First Name:
          <input
            className={styles.input}
            type="text"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        {errorMessage?.first_name && (
          <p className={styles.errorMessage}>{errorMessage.first_name[0]}</p>
        )}
      </div>
      {/* LAST NAME */}
      <div>
        <label>
          Last Name:
          <input
            className={styles.input}
            type="text"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        {errorMessage?.last_name && (
          <p className={styles.errorMessage}>{errorMessage.last_name[0]}</p>
        )}
      </div>
      <button className={styles.submit} type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
