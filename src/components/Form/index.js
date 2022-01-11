import { useStore } from "../../services/store";

function Form() {
  const { firstName, setFirstName, lastName, setLastName } = useStore();
  return (
    <div>
      {/* FIRST NAME */}
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
      </div>
      {/* LAST NAME */}
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
      </div>
      <input type="submit" value="Submit" />
    </div>
  );
}

export default Form;
