import styles from "../styles/components/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.about}>
        <h1>
          SOBRE O <strong>LEVA MEU LIVRO</strong>
        </h1>
        <p>
          O projeto Leva Meu Livro tem por objetivo fomentar a educação
          nacional. Entendemos que enquanto houver pessoas com livros
          acadêmicos, ainda que usados, estes podem ser reaproveitados por
          outras pessoas sem condições de compra. Queremos montar uma corrente
          do bem em que quem possui um livro acadêmico pode compartilhar com
          outra pessoa que não tem, e ainda, conseguir um outro livro acadêmico
          em troca da ajuda.
        </p>
      </div>
      <div className={styles.license}>
        <h1>LEVA MEU LIVRO © | 2021 - Todos os direitos reservados </h1>
      </div>
    </footer>
  );
}

export default Footer;
