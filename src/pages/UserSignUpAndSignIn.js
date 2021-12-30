import styles from "../styles/pages/UserSignUpAndSignIn.module.css";
import { useState } from "react";
import api from "../services/api";

function UserSignUpAndSignIn() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  async function signUp(event) {
    event.preventDefault();
    await api.post("/users/signup", {
      firstName,
      lastName,
      email,
      password,
      birthDate,
      zipCode,
    });
  }

  async function signIn(event) {
    event.preventDefault();
    await api.post("/users/signin", {
      email: signInEmail,
      password: signInPassword,
    });
  }

  return (
    <main className={styles.userSignUpAndSignInContainer}>
      <h2>Pronto para entrar no time? Então...</h2>
      <div className={styles.formContainer}>
        <form onSubmit={(event) => signUp(event)} className={styles.userForm}>
          <h1>Crie Sua Conta</h1>
          <p>se ainda não tiver um cadastro</p>
          <div>
            <label htmlFor="firstName">Nome:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Digite seu primeiro nome..."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Sobrenome:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Digite seu sobrenome..."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite seu email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha..."
              value={password}
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmedPassword">Confirme a senha:</label>
            <input
              type="password"
              name="confirmedPassword"
              id="confirmedPassword"
              placeholder="Digite sua senha novamente..."
              value={confirmedPassword}
              autoComplete="on"
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="birthDate">Data de nascimento:</label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="zipCode">CEP:</label>
            <input
              type="number"
              name="zipCode"
              id="zipCode"
              value={zipCode}
              placeholder="Digite seu cep..."
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <button className={styles.buttonSignUp}>CADASTRAR</button>
        </form>
        <form onSubmit={(event) => signIn(event)} className={styles.userForm}>
          <h1>Faça Seu Login</h1>
          <p>se já tiver se cadastrado antes</p>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="signInEmail"
              placeholder="Digite seu email..."
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="signInPassword">Senha:</label>
            <input
              type="password"
              name="password"
              id="signInPassword"
              placeholder="Digite sua senha..."
              value={signInPassword}
              autoComplete="on"
              onChange={(e) => setSignInPassword(e.target.value)}
            />
          </div>
          <button className={styles.buttonSignIn}>ENTRAR</button>
        </form>
      </div>
    </main>
  );
}

export default UserSignUpAndSignIn;
