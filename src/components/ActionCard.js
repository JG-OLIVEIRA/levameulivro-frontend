import styles from "../styles/components/ActionCard.module.css";

export default function ActionCard(props) {
  return (
    <div className={styles.actionCardContainer}>
      <div className={styles.actionImageContainer}>
        <img src={props.actionImage} alt={props.actionAlternativeText} />
      </div>
      <h2 style={{ color: props.titleColor }}>{props.actionTitle}</h2>
      <div className={styles.paragrafyContainer}>
        <p>{props.paragrafy}</p>
      </div>
      <button
        style={{ background: props.backgroundColor, color: "#FFFFFF" }}
        onClick={props.actionFunction}
      >
        Acessar
      </button>
    </div>
  );
}
