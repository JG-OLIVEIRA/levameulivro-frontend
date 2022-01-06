import WelcomeMessege from "../components/WelcomeMessege";
import Pagination from "../components/Pagination";
import imgIconBook from "../assets/icon-livro.svg";
import imgPlus from "../assets/imgPlus.svg";

import styles from "../styles/pages/MyBooks.module.css";
import MyBookTable from "../components/MyBooksTable";
import api from "../services/api";

import { getToken } from "../services/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function MyBooks() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [mustShow, setMustShow] = useState(true);

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [description, setDescription] = useState("");

  const MySwal = withReactContent(Swal);

  async function getMyBooks(page) {
    const token = getToken();
    const { data } = await api.get("/users/books", {
      headers: { authorization: `Bearer ${token}` },
      params: { page, limit: 3 },
    });

    setBooks(data.your_books?.books);
  }

  async function insertMyBook(event) {
    event.preventDefault();

    const token = getToken();

    try {
      await api.post(
        "/books",
        {
          name: name,
          author: author,
          isbn: ISBN,
          description: description,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      MySwal.fire({
        icon: "success",
        title:
          '<span style="font-family: sans-serif;"> Livro Cadastrado com sucesso </span>',
        backdrop: "rgba(66, 133, 244, 0.45)",
      });
      getMyBooks();
      setMustShow(!mustShow);
    } catch (error) {
      const { status } = error.response;

      if (status === 400) {
        MySwal.fire({
          icon: "error",
          title:
            '<span style="font-family: sans-serif;"> Ops, deu ruim... </span>',
          text: error.response.data.errors[0].msg,
          backdrop: "rgba(66, 133, 244, 0.45)",
        });
      }
    }
  }

  async function onDeleteLivro() {
    await getMyBooks();
  }

  useEffect(() => {
    getMyBooks(page);
  }, [page]);

  return (
    <main className={styles.myBooksContainer}>
      <WelcomeMessege messege="Aeee! Seja Bem-Vindx ao Nosso Clube!" />
      <div className={styles.titlePageContainer}>
        <img src={imgIconBook} alt="Ícone Livro" />
        <h1>Cadastrar Meus Livros</h1>
      </div>
      <button
        onClick={() => setMustShow(!mustShow)}
        className={styles.buttonAddNewBook}
      >
        <img src={imgPlus} alt="imagem do botão adicionar livro" />
        <p>Incluir novo livro</p>
      </button>
      <div className={styles.booksTablesContainer}>
        {books
          ? books.map((book) => (
              <MyBookTable
                key={book.id}
                id={book.id}
                name={book.name}
                author={book.author}
                thumbnailURL={book.thumbnail_url}
                onDeleteLivro={onDeleteLivro}
              />
            ))
          : null}
      </div>
      <Pagination
        disabled={!books}
        page={page}
        onPageChange={(newPage) => setPage(newPage)}
      />
      {!mustShow && (
        <>
          <h2>PREENCHA AS INFORMAÇÕES A SEGUIR:</h2>
          <form
            className={styles.bookFormContainer}
            onSubmit={(event) => insertMyBook(event)}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite o nome do livro..."
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Digite o nome do autor..."
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
            <input
              type="text"
              name="ISBN"
              id="ISBN"
              placeholder="Digite o ISBN..."
              value={ISBN}
              onChange={(event) => setISBN(event.target.value)}
            />
            <textarea
              name="description"
              id="description"
              placeholder="Digite uma descrição para o livro"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <button className={styles.buttonSubmit}>Cadastrar</button>
          </form>
        </>
      )}
    </main>
  );
}
