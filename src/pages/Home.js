import styles from "../styles/pages/Home.module.css";
import capa1 from "../assets/capa1.png";
import capa2 from "../assets/capa2.png";
import capa3 from "../assets/capa3.png";
import capa4 from "../assets/capa4.png";

function Home() {
  return (
    <section className={styles.carouselContainer} aria-label="Gallery">
      <ol className={styles.carouselViewport}>
        <li id="carousel__slide1" tabIndex="0" className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}>
            <a href="#carousel__slide4" className={styles.carouselPrev}>
              Go to last slide
            </a>
            <img src={capa1} className="capa1" />
            <a href="#carousel__slide2" className={styles.carouselNext}>
              Go to next slide
            </a>
          </div>
        </li>
        <li id="carousel__slide2" tabIndex="0" className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}></div>
          <a href="#carousel__slide1" className={styles.carouselPrev}>
            Go to previous slide
          </a>
          <img src={capa2} className="capa2" />
          <a href="#carousel__slide3" className={styles.carouselNext}>
            Go to next slide
          </a>
        </li>
        <li id="carousel__slide3" tabIndex="0" className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}></div>
          <a href="#carousel__slide2" className={styles.carouselPrev}>
            Go to previous slide
          </a>
          <img src={capa3} className="capa3" />
          <a href="#carousel__slide4" className={styles.carouselNext}>
            Go to next slide
          </a>
        </li>
        <li id="carousel__slide4" tabIndex="0" className={styles.carouselSlide}>
          <div className={styles.carouselSnapper}></div>
          <a href="#carousel__slide3" className={styles.carouselPrev}>
            Go to previous slide
          </a>
          <img src={capa4} className="capa4" />
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
  );
}

export default Home;
