import ButtonComponent from "../button/ButtonComponent.jsx";
import style from "./JobDetailCard.module.css";

const JobDetailCardComponent = () => {
  return (
    <section className={style.JobDetailCard}>
      <div className={style.logoBox}>
        <img
          src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_23.20c2dd37.png&w=64&q=75"
          alt="company logo"
        />
        <p>Slack</p>
        <ButtonComponent>Visit Website</ButtonComponent>
      </div>
      <hr className={style.divider} />
      <div className={style.detailsContainer}>
        <div className={style.textContainer}>
          <div>
            <p>Salary</p>
            <h6>100/Weekly</h6>
            <p>Location</p>
            <h6>USA,New York</h6>
            <p>Date</p> <h6>25 Jul 2024</h6>
          </div>
          <div>
            <p>Expertise</p>
            <h6>Intermediate</h6>
            <p>Job Type</p>
            <h6>Part time</h6>
            <p>Experience</p>
            <h6>Intermediate</h6>
          </div>
        </div>
        <div className={style.categoriesContainer}>
          <a href="#">design</a>
          <a href="#">seo</a>
          <a href="#">ui/ux</a>
        </div>
        <ButtonComponent>Apply Now</ButtonComponent>
      </div>
    </section>
  );
};

export default JobDetailCardComponent;
