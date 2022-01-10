import styles from "./pagination.module.css";

function Pagination({ usersPerPage, totalUsers, currentPage, paginate }) {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalUsers / usersPerPage); index++) {
    pageNumbers.push(index);
  }

  return (
    <ul className={styles.ul}>
      {currentPage != 1 && (
        <button
          className={styles.button}
          onClick={() => paginate((prev) => prev - 1)}
          href="#"
        >
          Previous
        </button>
      )}

      {pageNumbers.map((number) => (
        <li key={number}>
          <a
            className={number === currentPage && styles.active}
            onClick={() => paginate(number)}
            href="#"
          >
            {number}
          </a>
        </li>
      ))}
      {currentPage != pageNumbers.length && (
        <button
          className={styles.button}
          onClick={() => paginate((prev) => prev + 1)}
          href="#"
        >
          Next
        </button>
      )}
    </ul>
  );
}

export default Pagination;
