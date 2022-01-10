import { useEffect, useState } from "react";
import styles from "./home.module.css";
import { getUsers } from "../../services/api";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

function Home() {
  const [loading, setLoading] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  //Get current users
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = usersList.slice(firstUserIndex, lastUserIndex);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const result = await getUsers();
      setUsersList(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container">
      <h1>USERS LIST</h1>
      {!!loading ? (
        <Loading />
      ) : (
        <div>
          <ul>
            <div className={styles.title}>
              <span>user name</span>
              <span>created at</span>
            </div>
            {currentUsers.map((user) => (
              <li className={styles.flex} key={user.id}>
                <span>{`${user.first_name} ${user.last_name}`}</span>
                <span>{new Date(user.created_at).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={usersList.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
