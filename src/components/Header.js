import styles from "../styles/components/Header.module.css";
import searchButton from "../assets/search.svg";
import loginImage from "../assets/login.svg";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTop}>
        <div>
          <img src={logo} />
        </div>

        <div className={styles.searchContainer}>
          <input
            className={styles.searchButton}
            placeholder="Busque por seu livro, autor ou ISBN"
          />
          <button>
            <img src={searchButton} />
          </button>
        </div>

        <div className={styles.userSessionContainer}>
          <div className={styles.userSession}>
            <span>Oi, seja bem vindx!</span>
            <div className={styles.userSessionButtonsContainer}>
              <button className={styles.userSessionButton}>
                Entre / Registrar-se
              </button>
            </div>
          </div>
          <div>
            <img src={loginImage} />
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <button>Entre / Registrar-se</button>
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="">COMO FUNCIONA</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
