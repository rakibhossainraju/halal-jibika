import ButtonComponent from "../button/ButtonComponent.jsx";
import style from "./JobPortal.module.css";
import { useNavigate } from "react-router-dom";

const JobPortal = ({ btnBg = "white", ...otherProps }) => {
  const navigate = useNavigate();

  return (
    <section {...otherProps} className={style.portalSection}>
      <div>
        <h3>Most complete job portal.</h3>
        <p>Signup and start find your job or talents.</p>
      </div>
      <div className={style.btnContainer}>
        <ButtonComponent
          style={{ backgroundColor: btnBg }}
          onClick={() => navigate("/jobs")}
          className={style.outlinedBtn}
        >
          Looking for a job?
        </ButtonComponent>
        <ButtonComponent className={style.filledBtn}>
          Post a job
        </ButtonComponent>
      </div>
    </section>
  );
};

export default JobPortal;
