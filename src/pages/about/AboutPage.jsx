import style from "./AboutPage.module.css";
import NewsLatterComponent from "../../components/news-latter/NewsLatterComponent.jsx";

const colors = ["#FFFFEC", "#EEF5FF", "#F6D5F6"];
const featureData = [
  {
    feature: "Ethical Opportunities",
    description:
      "We curate job opportunities that adhere to Halal standards, ensuring that your career path is aligned with your values. Explore a range of roles with companies that share our commitment to ethical practices.",
  },
  {
    feature: "Community-driven Approach",
    description:
      "Halal Jibika is more than just a job board; it's a community. Connect with like-minded professionals, share insights, and build networks that transcend traditional career boundaries.",
  },
  {
    feature: "Career Guidance",
    description:
      "Our platform offers more than just job listings. Discover valuable resources, insights, and expert advice to navigate your career path successfully. From resume tips to interview strategies, we're here to support your professional journey.",
  },
  {
    feature: "Our Team",
    description:
      "Meet the passionate minds behind Halal Jibika. Our diverse team is dedicated to creating an inclusive space for individuals seeking ethical and rewarding career opportunities.",
  },
  {
    feature: "Founder & CEO - Light",
    description:
      "Driven by a vision of harmonizing professional success with ethical values, Light Yagami founded Halal Jibika to redefine the way we approach career growth.",
  },
  {
    feature: "Meet the Team",
    description:
      "Include brief profiles or photos of key team members, highlighting their expertise and roles within the organization.",
  },
];
const AboutPage = () => {
  return (
    <main className={style.aboutSection}>
      <h2 className={style.aboutHeading}>About Us</h2>
      <div className={style.ourStory}>
        <div className={style.contentBox}>
          <h3>Our Story</h3>
          <p>
            Welcome to Halal Jibika, where the intersection of career growth and
            ethical principles thrives. Our journey began with a vision to
            provide a platform that goes beyond conventional job search portals.
            We believe in fostering a community where talent meets opportunity,
            guided by the principles of Islam.
          </p>
        </div>
        <div className={style.imgBox}>
          <img src="/assets/images/outStory.svg" alt="Our story svg" />
        </div>
      </div>
      <div className={style.missionStatement}>
        <div className={style.contentBox}>
          <h3>Mission Statement</h3>
          <p>Empowering Careers, Preserving Values.</p>
          <p>
            At Halal Jibika, our mission is clear: to empower individuals in
            their career pursuits while upholding the values of integrity,
            fairness, and respect. We are committed to creating a space where
            professionals can thrive in an environment that aligns with their
            ethical beliefs.
          </p>
        </div>
        <div className={style.imgBox}>
          <img src="/assets/images/teamWorkAnimate.svg" alt="Team work" />
        </div>
      </div>
      <section className={style.featureSection}>
        <h3>What Sets Us Apart</h3>
        <div className={style.detailsCards}>
          {featureData.map((data, index) => (
            <div
              key={data.feature}
              style={{ backgroundColor: colors[index % colors.length] }}
              className={style.detailsCard}
            >
              <h4>{data.feature}</h4>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </section>
      <NewsLatterComponent />
    </main>
  );
};

export default AboutPage;
