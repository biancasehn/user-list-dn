import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import styles from "./newUser.module.css";

function NewUserButton() {
  return (
    <Link to={"/new"}>
      <div className={styles.icon}>
        <Plus />
      </div>
    </Link>
  );
}

export default NewUserButton;
