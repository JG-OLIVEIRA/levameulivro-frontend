import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getBookById from "../services/getBookById";
import viaCepApi from "../services/viaCepApi";
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

  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");

  const { id } = useParams();

  async function showAdressByZipCodeInPage(zipCode) {
    const { data } = await viaCepApi.get(`/${zipCode}/json/`);

    const { logradouro, bairro, localidade } = data;

    setLogradouro(logradouro);
    setBairro(bairro);
    setLocalidade(localidade);
  }

  async function showBookByIdInPage(id) {
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
    showBookByIdInPage(id);
    showAdressByZipCodeInPage(zipCode);
  }, [id, zipCode]);

  return (
    <main>
      <section className={styles.bookInformationContainer}>
        <div className={styles.bookImageContainer}>
          <img src={thumbnailUrl} alt="imagem do livro" />
        </div>
        <div className={styles.bookMainInformationContainer}>
          <h1>{name}</h1>
          <div>
            <b>Autor:</b>
            <p>{author}</p>
            <b>ISBN:</b>
            <p>{isbn}</p>
            <b>Dono:</b>
            <p>
              {firstName} {lastName}
            </p>
            <b>CEP:</b>
            <p>{zipCode}</p>
            <button>QUERO TROCAR!</button>
          </div>
        </div>
        <div className={styles.adressInformationContainer}>
          <p>
            {localidade}, {bairro} - {logradouro}
          </p>
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
