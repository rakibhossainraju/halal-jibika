import style from "./HomePage.module.css";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/ButtonComponent.jsx";
import { useNavigate } from "react-router-dom";
import JobPortal from "../../components/job-portal/JobPortal.jsx";
import CategoryComponent from "../../components/category/CategoryComponent.jsx";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className={style.banner}>
        <div className={style.contentBox}>
          <h1 className={style.heading}>
            <span className={style.subHeading1}>Your Halal Career </span>
            <span className={style.subHeading2}>Journey Starts Here</span>
          </h1>
          <p className={style.description}>
            Get you dream job with Islamic culture in your work environment.
            Settle your <span>Din</span> and <span>Duniya</span>.
          </p>
          <ButtonComponent onClick={() => navigate("/jobs")}>
            Explore Jobs
          </ButtonComponent>
        </div>
        <img
          className={style.bannerImg}
          src="/assets/images/meating.svg"
          alt="Person svg"
        />
      </header>
      <main>
        <CategoryComponent />

        <section className={style.featureSection}>
          <img src="/assets/images/experts.png" alt="experts" />
          <div>
            <h3>Get over 50.000+ talented experts in jobi.</h3>
            <p>
              A full hybrid workforce management tools are yours to use, as well
              as access to our top 1% of talent.
            </p>
            <ul>
              <li>Seamless searching</li>
              <li>Get top 3% experts for your project</li>
              <li>Protected payments system</li>
            </ul>
            <ButtonComponent>Post A Job</ButtonComponent>
          </div>
        </section>
        <section className={style.howItWorksSection}>
          <h3>How it’s work?</h3>
          <div className={style.details}>
            <div className={style.detailCard}>
              <div>
                <img
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_08.48144b82.svg"
                  alt=""
                />
              </div>
              <h4>Create Account</h4>
              <p>It’s very easy to open an account and start your journey.</p>
            </div>
            <div className={style.detailCard}>
              <div>
                <img
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_09.cc1ca8a6.svg"
                  alt=""
                />
              </div>
              <h4>Complete your profile</h4>
              <p>
                Complete your profile with all the info to get attention of
                client.
              </p>
            </div>
            <div className={style.detailCard}>
              <div>
                <img
                  src="https://jobi-nextjs.vercel.app/_next/static/media/icon_10.0ccd7f8b.svg"
                  alt=""
                />
              </div>
              <h4>Apply job or hire</h4>
              <p>
                Apply & get your preferable jobs with all the requirements and
                get it.
              </p>
            </div>
          </div>
        </section>
      </main>
      <JobPortal style={{ marginBlock: "15rem" }} />
    </>
  );
};

export default HomePage;
