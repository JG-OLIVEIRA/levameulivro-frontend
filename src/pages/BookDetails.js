import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getBookById from "../services/getBookById";
import styles from "../styles/pages/BookDetails.module.css";

export default function BookDetails() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [description, setDescription] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zipCode, setZipCode] = useState("");

  const { id } = useParams();

  async function showBookByIdInPage() {
    const { book } = await getBookById(id);

    setName(book.name);
    setAuthor(book.author);
    setIsbn(book.isbn);
    setThumbnailUrl(book.thumbnail_url);
    setDescription(book.description);
    setFirstName(book.users.firstName);
    setLastName(book.users.lastName);
    setZipCode(book.users.zipCode);
  }

  useEffect(() => {
    showBookByIdInPage();
  });

  return (
    <main>
      <section className={styles.bookInformationContainer}>
        <div className={styles.bookImageContainer}>
          <img src={thumbnailUrl} alt="imagem do livro" />
        </div>
        <div className={styles.bookMainInformationContainer}>
          <h1>{name}</h1>
          <div>
            <b>Autor: {author}</b>
            <b>ISBN: {isbn}</b>
            <b>
              Dono: {firstName} {lastName}
            </b>
            <b>CEP: {zipCode} </b>
          </div>
          <button>QUERO TROCAR!</button>
        </div>
      </section>
      <section className={styles.bookDescriptionContainer}>
        <div className={styles.lineSeparator}></div>
        <h1>DESCRIÇÃO/RESUMO DO LIVRO</h1>
        <p>{description}</p>
      </section>
    </main>
  );
}
