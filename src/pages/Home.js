import styles from "../styles/pages/Home.module.css";
import capa1 from "../assets/capa1.png";
import capa2 from "../assets/capa2.png";
import capa3 from "../assets/capa3.png";
import capa4 from "../assets/capa4.png";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import getAllBooks from "../services/getAllBooks";
import BookCard from "../components/BookCard";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    const { books } = await getAllBooks();

    setBooks(books);
  }, []);

  return (
    <>
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
      <Navbar />
      <ul className={styles.avaliableBooks}>
        {books.map((book) => (
          <li>
            <BookCard
              id={book.id}
              name={book.name}
              thumbnailURL={book.thumbnail_url}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
