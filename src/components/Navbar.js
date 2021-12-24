import styles from "../styles/components/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navBarContainer}>
      <h1>Livros disponíveis para troca</h1>
    </nav>
  );
}

export default Navbar;
