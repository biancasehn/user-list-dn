import { useEffect, useState } from "react";
import {
  Loading,
  Pagination,
  List,
  Modal,
  NewUserButton,
} from "../../components";
import { loadUsers, statusChange } from "../../controller";
import { useStore } from "../../services/store";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const {
    loading,
    setFirstName,
    setLastName,
    setLoading,
    setModalOpen,
    idOfChange,
    setidOfChange,
    statusToChange,
    setStatusToChange,
    usersList,
    setUsersList,
  } = useStore();

  const description = `Do you want to update the status to ${
    statusToChange === "locked" ? "active" : "locked"
  }?`;

  //Get current users
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = usersList.slice(firstUserIndex, lastUserIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEditUser = (id, first, last) => {
    setidOfChange(id);
    setFirstName(first);
    setLastName(last);
  };

  const handleStatusChange = async () => {
    setModalOpen(false);
    setLoading(true);
    await statusChange(idOfChange, statusToChange);
    load();
    setLoading(false);
  };

  const load = async () => {
    setLoading(true);
    const result = await loadUsers();
    setUsersList(result);
    setLoading(false);
  };

  useEffect(async () => {
    load();
  }, []);

  return (
    <div className="container">
      <h1>USERS LIST</h1>
      <NewUserButton />
      {!!loading ? (
        <Loading />
      ) : (
        <div>
          <List currentUsers={currentUsers} handleEditUser={handleEditUser} />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={usersList.length}
            currentPage={currentPage}
            paginate={paginate}
          />
          <Modal
            handleStatusChange={handleStatusChange}
            description={description}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
