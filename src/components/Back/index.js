import { ReactComponent as BackIcon } from "../../assets/back.svg";
import { Link } from "react-router-dom";
import styles from "./back.module.css"

function Back() {
  return (
    <div className={styles.icon}>
      <Link to="/">
        <BackIcon />
      </Link>
    </div>
  );
}

export default Back;
