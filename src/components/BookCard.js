import styles from "../styles/components/BookCard.module.css";

export default function BookCard(props) {
  return (
    <div className={styles.bookCardContainer}>
      <img src={props.thumbnailURL} alt="imagem do livro" />
      <div className={styles.nameContainer}>
        <p>{props.name}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonOne}>
          <span>QUERO</span>
        </button>
        <button className={styles.buttonTwo}>
          <span>+DETALHES</span>
        </button>
      </div>
    </div>
  );
}
