import { ReactComponent as Edit } from "../../assets/edit.svg";
import { Link } from "react-router-dom";
import styles from "./list.module.css";

function List({ currentUsers, handleOpenModal, handleEditUser }) {
  return (
    <ul className={styles.wrap}>
      <div className={styles.title}>
        <span>user name</span>
        <span>created at</span>
        <span>status</span>
      </div>
      {currentUsers.map((user) => (
        <li className={styles.grid} key={user.id}>
          <span
            className={user.status === "locked" && styles.blocked}
          >{`${user.first_name} ${user.last_name}`}</span>

          <span className={user.status === "locked" && styles.blocked}>
            {new Date(user.created_at).toLocaleDateString()}
          </span>

          <a
            onClick={() => handleOpenModal(user.id, user.status)}
            className={styles.status}
          >
            {user.status}
          </a>
          <Link to={"/edit"}>
            <div onClick={() => handleEditUser(user.id, user.first_name, user.last_name)} className={styles.icon}>
              <Edit />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default List;
