import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import styles from "../styles/components/Pagination.module.css";

export default function Pagination(props) {
  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.pag_nav}
        disabled={props.page === 1}
        onClick={() => props.onPageChange(props.page - 1)}
      >
        <MdNavigateBefore size={24} className={styles.color} />
      </button>
      <span className={styles.pag_nav_numb}>
        <p>{props.page}</p>
      </span>
      <button
        className={styles.pag_nav}
        disabled={props.disabled}
        onClick={() => props.onPageChange(props.page + 1)}
      >
        <MdNavigateNext size={24} className={styles.color} />
      </button>
    </div>
  );
}
