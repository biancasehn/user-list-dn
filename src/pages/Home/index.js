import { useEffect, useState } from "react";
import { getUsers, patchUser } from "../../services/api";
import { Loading, Pagination, List, Modal } from "../../components";

function Home() {
  const [loading, setLoading] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const [modalOpen, setModalOpen] = useState(false);
  const [idStatusChange, setIdStatusChange] = useState("");
  const [statusToChange, setIdStatusToChange] = useState("");

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
  const handleOpenModal = (id, status) => {
    setIdStatusChange(id);
    setIdStatusToChange(status);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleStatusChange = async () => {
    setModalOpen(false);
    setLoading(true);
    try {
      await patchUser(idStatusChange, statusToChange);
      setLoading(false);
      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };

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
          <List currentUsers={currentUsers} handleOpenModal={handleOpenModal} />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={usersList.length}
            currentPage={currentPage}
            paginate={paginate}
          />
          <Modal
            modalOpen={modalOpen}
            handleCloseModal={handleCloseModal}
            handleStatusChange={handleStatusChange}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
