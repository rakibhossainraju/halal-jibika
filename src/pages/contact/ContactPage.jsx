import style from "./ContactPage.module.css";
import NewsLatterComponent from "../../components/news-latter/NewsLatterComponent.jsx";

const ContactPage = () => {
  return (
    <main>
      <h3 className={style.contactTitle}>Get in touch</h3>
      <section className={style.addressContainer}>
        <div className={style.addressBlock}>
          <p className={style.addressLogo}>
            <img src="/assets/images/location.svg" alt="location icon" />
          </p>
          <h5>Our Address</h5>
          <p>
            Bass Hill Plaza Medical Center <br />
            Sydney, Australia.
          </p>
        </div>
        <div className={style.addressBlock}>
          <p className={style.addressLogo}>
            <img src="/assets/images/maiLogo.svg" alt="mail logo" />
          </p>
          <h5>Contact Info</h5>
          <p>
            Open a chat or give us call at <br />
            <a href="tel:+880 1915042989">01915042989</a>
          </p>
        </div>
        <div className={style.addressBlock}>
          <p className={style.addressLogo}>
            <img src="/assets/images/chatLogo.svg" alt="caht log" />
          </p>
          <h5>Live Support</h5>
          <p>
            Live chat service <br /> <a href="#">www.halaljibikachat.com</a>
          </p>
        </div>
      </section>
      <h3
        style={{ marginBlock: "0 5rem", fontSize: "5rem" }}
        className={style.contactTitle}
      >
        Our Location
      </h3>
      <section className={style.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14606.014700696616!2d90.4333882!3d23.7650722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d5e2055259%3A0xef380c39c46ee1ba!2sAs-Sunnah%20Foundation!5e0!3m2!1sen!2sbd!4v1704164933666!5m2!1sen!2sbd"
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <NewsLatterComponent />
    </main>
  );
};

export default ContactPage;
