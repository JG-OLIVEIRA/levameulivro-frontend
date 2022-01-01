import styles from "../styles/pages/UserProfile.module.css";
import ActionCard from "../components/ActionCard";

import imgMyData from "../assets/imgMeusDados.svg";
import imgCredit from "../assets/imgSaldo.svg";
import imgBooks from "../assets/imgLivros.svg";
import imgExchanges from "../assets/imgTroca.svg";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();

  function navigateToMyData() {
    navigate("/my-data");
  }

  function navigateToMyCredit() {
    navigate("/my-credit");
  }

  function navigateToMyBooks() {
    navigate("/my-books");
  }

  function navigateToMyExchanges() {
    navigate("/my-exchanges");
  }

  return (
    <main className={styles.userProfileContainer}>
      <h2>Aeee! Seja Bem-Vindx ao Nosso Clube!</h2>
      <div className={styles.actionsCardContainer}>
        <ActionCard
          actionImage={imgMyData}
          actionAlternativeText="imagem meus dados"
          actionTitle="Meus Dados"
          paragrafy="Aqui é o Seu Espaço Para Alterar Suas Informações Previamente Cadastradas. Edite sua senha e cadastre uma imagem."
          actionFunction={navigateToMyData}
          titleColor="#EB4335"
          backgroundColor="#EB4335"
        />
        <ActionCard
          actionImage={imgCredit}
          actionAlternativeText="imagem créditos"
          actionTitle="Meu Saldo"
          paragrafy="Veja qual é o crédito que você possui disponível para trocar por novos livros e/ou descubra como conseguir."
          actionFunction={navigateToMyCredit}
          titleColor="#34A853"
          backgroundColor="#34A853"
        />
        <ActionCard
          actionImage={imgBooks}
          actionAlternativeText="imagem meus livros"
          actionTitle="Meus Livros"
          paragrafy="Cadastre os livros que está disposto a trocar para receber créditos. Responda dúvidas de outros usuários."
          actionFunction={navigateToMyBooks}
          titleColor="#4285F4"
          backgroundColor="#4285F4"
        />
        <ActionCard
          actionImage={imgExchanges}
          actionAlternativeText="imagem minhas trocas"
          actionTitle="Pedidos de trocas"
          paragrafy="Visualize aqui quem pediu os livros que você cadastrou e também acompanhe os seus pedidos de troca."
          actionFunction={navigateToMyExchanges}
          titleColor="#FCBC05"
          backgroundColor="#FCBC05"
        />
      </div>
    </main>
  );
}
