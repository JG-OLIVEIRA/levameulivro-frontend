import { useEffect, useState } from "react";
import styles from "../styles/pages/Home.module.css";
import capa1 from "../assets/capa1.png";
import capa2 from "../assets/capa2.png";
import capa3 from "../assets/capa3.png";
import capa4 from "../assets/capa4.png";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import getBooks from "../services/getBooks";
import BookCard from "../components/BookCard";
import InformativeRectangle from "../components/InformativeRectangle";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  async function showBooksInPage() {
    const { books } = await getBooks(1, 4);

    setBooks(books);
  }

  function navigateToBook(id) {
    navigate(`/books/${id}`);
  }

  useEffect(() => {
    showBooksInPage();
  }, []);

  return (
    <main>
      <section className={styles.carouselContainer} aria-label="Gallery">
        <ol className={styles.carouselViewport}>
          <li
            id="carousel__slide1"
            tabIndex="0"
            className={styles.carouselSlide}
          >
            <div className={styles.carouselSnapper}>
              <a href="#carousel__slide4" className={styles.carouselPrev}>
                Go to last slide
              </a>
              <img src={capa1} alt="imagem 1" className="capa1" />
              <a href="#carousel__slide2" className={styles.carouselNext}>
                Go to next slide
              </a>
            </div>
          </li>
          <li
            id="carousel__slide2"
            tabIndex="0"
            className={styles.carouselSlide}
          >
            <div className={styles.carouselSnapper}></div>
            <a href="#carousel__slide1" className={styles.carouselPrev}>
              Go to previous slide
            </a>
            <img src={capa2} alt="imagem 2" className="capa2" />
            <a href="#carousel__slide3" className={styles.carouselNext}>
              Go to next slide
            </a>
          </li>
          <li
            id="carousel__slide3"
            tabIndex="0"
            className={styles.carouselSlide}
          >
            <div className={styles.carouselSnapper}></div>
            <a href="#carousel__slide2" className={styles.carouselPrev}>
              Go to previous slide
            </a>
            <img src={capa3} alt="imagem 3" className="capa3" />
            <a href="#carousel__slide4" className={styles.carouselNext}>
              Go to next slide
            </a>
          </li>
          <li
            id="carousel__slide4"
            tabIndex="0"
            className={styles.carouselSlide}
          >
            <div className={styles.carouselSnapper}></div>
            <a href="#carousel__slide3" className={styles.carouselPrev}>
              Go to previous slide
            </a>
            <img src={capa4} alt="imagem 4" className="capa4" />
            <a href="#carousel__slide1" className={styles.carouselNext}>
              Go to first slide
            </a>
          </li>
        </ol>
        <aside className={styles.carouselNavigation}>
          <ol className={styles.carouselNavigationList}>
            <li className={styles.carouselNavigationItem}>
              <a
                href="#carousel__slide1"
                className={styles.carouselNavigationButton}
              >
                Go to slide 1
              </a>
            </li>
            <li className={styles.carouselNavigationItem}>
              <a
                href="#carousel__slide2"
                className={styles.carouselNavigationButton}
              >
                Go to slide 2
              </a>
            </li>
            <li className={styles.carouselNavigationItem}>
              <a
                href="#carousel__slide3"
                className={styles.carouselNavigationButton}
              >
                Go to slide 3
              </a>
            </li>
            <li className={styles.carouselNavigationItem}>
              <a
                href="#carousel__slide4"
                className={styles.carouselNavigationButton}
              >
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>
      <section className={styles.cardsContainer}>
        <div className={styles.card1Container}>
          <img className={styles.img1} src={img1} alt="" />
          <p>
            Encontre livros acadêmicos e troque com alguém sem utilizar
            dinheiro!
          </p>
        </div>
        <div className={styles.card2Container}>
          <img className={styles.img2} src={img2} alt="" />
          <p>
            É de graça se você trocar com alguém, ou compre a um preço módico.
          </p>
        </div>
        <div className={styles.card3Container}>
          <img className={styles.img3} src={img3} alt="" />
          <p>Cada livro cadastrado e enviado à alguém você recebe 1 ponto.</p>
        </div>
        <div className={styles.card4Container}>
          <img className={styles.img4} src={img4} alt="" />
          <p>
            Navegue no site e utilize seus pontos para trocar por outro livro.
          </p>
        </div>
      </section>
      <InformativeRectangle />
      <ul className={styles.avaliableBooks}>
        {books.map((book) => (
          <li key={book.id}>
            <BookCard
              id={book.id}
              name={book.name}
              thumbnailURL={book.thumbnail_url}
              navigateFunction={() => navigateToBook(book.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
