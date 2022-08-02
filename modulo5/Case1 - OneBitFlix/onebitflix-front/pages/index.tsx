import Aos from "aos";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "../src/components/common/footer";
import CardsSection from "../src/components/homeNoAuth/cardsSection";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import styles from "../styles/homeNoAuth.module.scss";

const HomeNotAuth = function () {

useEffect(() => {
	Aos.init();
}, []);

  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <>
        <main>
          <div
            className={styles.sectionBackground}
            data-aos="fade-zoom-in"
            data-aos-duration="1600"
          >
            <HeaderNoAuth />
            <PresentationSection />
          </div>
          <div data-aos="fade-right" data-aos-duration="1200">
            <CardsSection />
          </div>

          <Footer />
        </main>
      </>
    </>
  );
};

export default HomeNotAuth;
