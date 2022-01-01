import styles from "../styles/components/Header.module.css";
import searchButton from "../assets/search.svg";
import loginImage from "../assets/login.svg";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function navigateToSignUpAndSignIn() {
    navigate("signup-signin");
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTop}>
        <div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className={styles.searchContainer}>
          <input
            className={styles.searchButton}
            placeholder="Busque por seu livro, autor ou ISBN"
          />
          <button>
            <img src={searchButton} alt="imagem do botão" />
          </button>
        </div>
        <div className={styles.userSessionContainer}>
          <div className={styles.userSession}>
            <span>Oi, seja bem vindx!</span>
            <div className={styles.userSessionButtonsContainer}>
              <button
                onClick={() => navigateToSignUpAndSignIn()}
                className={styles.userSessionButton}
              >
                Entre / Registrar-se
              </button>
            </div>
          </div>
          <div>
            <img src={loginImage} alt="imagem de perfil" />
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <button onClick={() => navigateToSignUpAndSignIn()}>
          Entre / Registrar-se
        </button>
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/comofunciona">COMO FUNCIONA</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
