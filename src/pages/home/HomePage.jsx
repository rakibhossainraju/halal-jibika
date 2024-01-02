import {
  banner,
  heading,
  subHeading1,
  subHeading2,
  contentBox,
  description,
  // bannerImgContainer,
  bannerImg,
} from "./HomePage.module.css";
import ButtonComponent from "../../components/button/ButtonComponent.jsx";
import { useNavigate } from "react-router-dom";
import JobPortal from "../../components/job-portal/JobPortal.jsx";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className={banner}>
        <div className={contentBox}>
          <h1 className={heading}>
            <span className={subHeading1}>Your Halal Career </span>
            <span className={subHeading2}>Journey Starts Here</span>
          </h1>
          <p className={description}>
            Get you dream job with Islamic culture in your work environment.
            Settle your <span>Din</span> and <span>Duniya</span>.
          </p>
          <ButtonComponent onClick={() => navigate("/jobs")}>
            Explore Jobs
          </ButtonComponent>
        </div>
        {/*<div className={bannerImgContainer}>*/}
        <img
          className={bannerImg}
          src="/assets/images/meating.svg"
          alt="Person svg"
        />
        {/*</div>*/}
      </header>
      <img
        style={{ maxWidth: "50rem" }}
        src="/assets/images/background.svg"
        alt=""
      />
      <JobPortal />
    </>
  );
};

export default HomePage;
