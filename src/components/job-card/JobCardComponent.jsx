import style from "./JobCard.module.css";
import ButtonComponent from "../button/ButtonComponent.jsx";

const JobCardComponent = () => {
  return (
    <div className={style.jobCard}>
      <div className={style.jobLogoContainer}>
        <img
          src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_22.142b36c3.png&w=128&q=75"
          alt="company logo"
        />
        <div>
          <h5>Full time</h5>
          <h3>Developer & expert in...</h3>
        </div>
      </div>
      <div>
        <p className={style.location}>Spain, Barcelona</p>
        <p className={style.extraDetails}>
          <span className={style.price}>$900</span> / Monthly . Fresher
        </p>
      </div>
      <div className={style.cardButtonContainer}>
        <button className={style.bookmarkBtn + " " + style.remove}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="currentColor"
            className="bi bi-bookmark-dash"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"
            />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
          </svg>
        </button>
        <ButtonComponent className={style.applyBtn}>Apply</ButtonComponent>
      </div>
    </div>
  );
};

export default JobCardComponent;
