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
    setLoading,
    setModalOpen,
    idStatusChange,
    setIdStatusChange,
    statusToChange,
    setStatusToChange,
    usersList,
    setUsersList,
  } = useStore();

  //Get current users
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = usersList.slice(firstUserIndex, lastUserIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleOpenModal = (id, status) => {
    setIdStatusChange(id);
    setStatusToChange(status);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleStatusChange = async () => {
    setModalOpen(false);
    setLoading(true);
    await statusChange(idStatusChange, statusToChange);
    load()
    setLoading(false);
  };

  const load = async () => {
    setLoading(true);
    const result = await loadUsers();
    setUsersList(result);
    setLoading(false);
  }

  useEffect(async () => {
    load()
  }, []);

  return (
    <div className="container">
      <h1>USERS LIST</h1>
      <NewUserButton />
      {!!loading ? (
        <Loading />
      ) : (
        <div>
          <List currentUsers={currentUsers} handleOpenModal={handleOpenModal} />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={usersList.length}
            currentPage={currentPage}
            paginate={paginate}
          />
          <Modal
            handleCloseModal={handleCloseModal}
            handleStatusChange={handleStatusChange}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
